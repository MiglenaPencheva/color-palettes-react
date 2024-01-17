import { Link } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { getColorArr } from './exploreHelpers';
import ColorNamesList from './ColorNamesList';

const ColorNames = () => {
    const { language } = useLanguageContext();

    const list = getColorArr('names');

    return (
        <section className="explore__color-names">

            <h5 className="explore__info">{language.lang === 'en' ? 'Color names' : 'Имената на цветовете'}</h5>

            {language.lang === 'en' ? (
                <article>
                    There are 140 standard color names that are supported by all modern browsers and CSS.
                    <br />Color samples, names and hex codes are listed below in an alphabetical order.
                    Click on a chosen one to view details and explore it in the color values <Link target="_blank" to="/color-explore/convertor"><i>convertor.</i></Link>
                </article>
            ) : (
                <article>
                    Съвременните браузъри поддържат 140 стандартни имена.
                    <br />Цветовете с имената им и техните Хекс стойности (шеснайсетични кодове) са изброени по-надолу по азбучен ред.
                    Кликни върху цвят, за да го разгледаш подробно в <Link target="_blank" to="/color-explore/convertor"><i>конвертора</i></Link> на цветните стойности.
                </article>
            )}

            <ColorNamesList list={list} />

        </section>
    );
};

export default ColorNames;