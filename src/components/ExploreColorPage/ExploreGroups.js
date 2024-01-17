import { useState } from 'react';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { getGroup } from './exploreHelpers';
import ColorNamesList from './ColorNamesList';

const ExploreGroups = () => {
    const { language } = useLanguageContext();

    const [yellow, setYellow] = useState(false);
    const [red, setRed] = useState(false);
    const [blue, setBlue] = useState(false);
    const [orange, setOrange] = useState(false);
    const [green, setGreen] = useState(false);
    const [purple, setPurple] = useState(false);
    const [cyan, setCyan] = useState(false);
    const [brown, setBrown] = useState(false);
    const [white, setWhite] = useState(false);
    const [grey, setGrey] = useState(false);
    const [pink, setPink] = useState(false);

    return (
        <section className="explore__color-names">

            <h5 className="explore__info">{language.lang === 'en' ? 'Colors by groups' : 'Цветовете по групи'}</h5>

            <article>{language.lang === 'en'
                ? 'There are 140 standard color names that are supported by all modern browsers and CSS. Color samples, names and hex codes are listed below, separated in color groups.'
                : 'Съвременните браузъри поддържат 140 стандартни имена на цветовете. Мостри с имената им и техните хекс стойности (шеснайсетични кодове) са изброени по-надолу по групи.'}
            </article>

            <section className="explore__groups" id="exploreGroups">
                <li onClick={() => setYellow(!yellow)} style={{ 'backgroundColor': '#ffffba' }}>{language.lang === 'en' ? 'Yellow colors' : 'Жълти цветове'}</li>
                {yellow && <ColorNamesList list={getGroup['yellow']} />}
                <li onClick={() => setRed(!red)} style={{ 'backgroundColor': '#ffb6ae' }}>{language.lang === 'en' ? 'Red colors' : 'Червени цветове'}</li>
                {red && <ColorNamesList list={getGroup['red']} />}
                <li onClick={() => setBlue(!blue)} style={{ 'backgroundColor': '#a9c0ff' }}>{language.lang === 'en' ? 'Blue colors' : 'Сини цветове'}</li>
                {blue && <ColorNamesList list={getGroup['blue']} />}
                <li onClick={() => setOrange(!orange)} style={{ 'backgroundColor': '#fedca9' }}>{language.lang === 'en' ? 'Orange colors' : 'Оранжеви цветове'}</li>
                {orange && <ColorNamesList list={getGroup['orange']} />}
                <li onClick={() => setPurple(!purple)} style={{ 'backgroundColor': '#d6a9e4' }}>{language.lang === 'en' ? 'Purple colors' : 'Лилави цветове'}</li>
                {purple && <ColorNamesList list={getGroup['purple']} />}
                <li onClick={() => setGreen(!green)} style={{ 'backgroundColor': '#cbe4b9' }}>{language.lang === 'en' ? 'Green colors' : 'Зелени цветове'}</li>
                {green && <ColorNamesList list={getGroup['green']} />}
                <li onClick={() => setCyan(!cyan)} style={{ 'backgroundColor': '#c1ffff' }}>{language.lang === 'en' ? 'Cyan colors' : 'Цианови цветове'}</li>
                {cyan && <ColorNamesList list={getGroup['cyan']} />}
                <li onClick={() => setBrown(!brown)} style={{ 'backgroundColor': '#d8bdbd' }}>{language.lang === 'en' ? 'Brown colors' : 'Оранжеви цветове'}</li>
                {brown && <ColorNamesList list={getGroup['brown']} />}
                <li onClick={() => setPink(!pink)} style={{ 'backgroundColor': '#ffdfe5' }}>{language.lang === 'en' ? 'Pink colors' : 'Розови цветове'}</li>
                {pink && <ColorNamesList list={getGroup['pink']} />}
                <li onClick={() => setWhite(!white)} style={{ 'backgroundColor': '#fffaf0' }}>{language.lang === 'en' ? 'White colors' : 'Бели цветове'}</li>
                {white && <ColorNamesList list={getGroup['white']} />}
                <li onClick={() => setGrey(!grey)} style={{ 'backgroundColor': '#dee2e6' }}>{language.lang === 'en' ? 'Grey colors' : 'Сиви цветове'}</li>
                {grey && <ColorNamesList list={getGroup['grey']} />}
            </section>

        </section>
    );
};

export default ExploreGroups;