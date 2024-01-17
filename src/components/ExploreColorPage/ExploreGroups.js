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

            {language.lang === 'en' ? (
                <>
                    <h5 className="explore__info">Colors by groups</h5>

                    <article>There are 140 standard color names that are supported by all modern browsers and CSS.
                        Color samples, names and hex codes are listed below, separated in color groups.
                    </article>

                    <section className="explore__groups" id="exploreGroups">
                        <li onClick={() => setYellow(!yellow)} style={{ 'backgroundColor': '#ffffba' }}>Yellow colors</li>
                        {yellow && <ColorNamesList list={getGroup['yellow']} />}
                        <li onClick={() => setRed(!red)} style={{ 'backgroundColor': '#ffb6ae' }}>Red colors</li>
                        {red && <ColorNamesList list={getGroup['red']} />}
                        <li onClick={() => setBlue(!blue)} style={{ 'backgroundColor': '#a9c0ff' }}>Blue colors</li>
                        {blue && <ColorNamesList list={getGroup['blue']} />}
                        <li onClick={() => setOrange(!orange)} style={{ 'backgroundColor': '#fedca9' }}>Orange colors</li>
                        {orange && <ColorNamesList list={getGroup['orange']} />}
                        <li onClick={() => setPurple(!purple)} style={{ 'backgroundColor': '#d6a9e4' }}>Purple colors</li>
                        {purple && <ColorNamesList list={getGroup['purple']} />}
                        <li onClick={() => setGreen(!green)} style={{ 'backgroundColor': '#cbe4b9' }}>Green colors</li>
                        {green && <ColorNamesList list={getGroup['green']} />}
                        <li onClick={() => setCyan(!cyan)} style={{ 'backgroundColor': '#c1ffff' }}>Cyan colors</li>
                        {cyan && <ColorNamesList list={getGroup['cyan']} />}
                        <li onClick={() => setBrown(!brown)} style={{ 'backgroundColor': '#d8bdbd' }}>Brown colors</li>
                        {brown && <ColorNamesList list={getGroup['brown']} />}
                        <li onClick={() => setPink(!pink)} style={{ 'backgroundColor': '#ffdfe5' }}>Pink colors</li>
                        {pink && <ColorNamesList list={getGroup['pink']} />}
                        <li onClick={() => setWhite(!white)} style={{ 'backgroundColor': '#fffaf0' }}>White colors</li>
                        {white && <ColorNamesList list={getGroup['white']} />}
                        <li onClick={() => setGrey(!grey)} style={{ 'backgroundColor': '#dee2e6' }}>Grey colors</li>
                        {grey && <ColorNamesList list={getGroup['grey']} />}
                    </section>
                </>
            ) : (
                <>
                    <h5 className="explore__info">Цветовете по групи</h5>

                    <article>Съвременните браузъри поддържат 140 стандартни имена.
                        Цветовете с имената им и техните Хекс стойности (шеснайсетични кодове) са изброени по-надолу по групи.
                    </article>

                    <section className="explore__groups" id="exploreGroups">
                        <li onClick={() => setYellow(!yellow)} style={{ 'backgroundColor': '#ffffba' }}>Жълти цветове</li>
                        {yellow && <ColorNamesList list={getGroup['yellow']} />}
                        <li onClick={() => setRed(!red)} style={{ 'backgroundColor': '#ffb6ae' }}>Червени цветове</li>
                        {red && <ColorNamesList list={getGroup['red']} />}
                        <li onClick={() => setBlue(!blue)} style={{ 'backgroundColor': '#a9c0ff' }}>Сини цветове</li>
                        {blue && <ColorNamesList list={getGroup['blue']} />}
                        <li onClick={() => setOrange(!orange)} style={{ 'backgroundColor': '#fedca9' }}>Оранжеви цветове</li>
                        {orange && <ColorNamesList list={getGroup['orange']} />}
                        <li onClick={() => setPurple(!purple)} style={{ 'backgroundColor': '#d6a9e4' }}>Лилави цветове</li>
                        {purple && <ColorNamesList list={getGroup['purple']} />}
                        <li onClick={() => setGreen(!green)} style={{ 'backgroundColor': '#cbe4b9' }}>Зелени цветове</li>
                        {green && <ColorNamesList list={getGroup['green']} />}
                        <li onClick={() => setCyan(!cyan)} style={{ 'backgroundColor': '#c1ffff' }}>Цианови цветове</li>
                        {cyan && <ColorNamesList list={getGroup['cyan']} />}
                        <li onClick={() => setBrown(!brown)} style={{ 'backgroundColor': '#d8bdbd' }}>Оранжеви цветове</li>
                        {brown && <ColorNamesList list={getGroup['brown']} />}
                        <li onClick={() => setPink(!pink)} style={{ 'backgroundColor': '#ffdfe5' }}>Розови цветове</li>
                        {pink && <ColorNamesList list={getGroup['pink']} />}
                        <li onClick={() => setWhite(!white)} style={{ 'backgroundColor': '#fffaf0' }}>Бели цветове</li>
                        {white && <ColorNamesList list={getGroup['white']} />}
                        <li onClick={() => setGrey(!grey)} style={{ 'backgroundColor': '#dee2e6' }}>Сиви цветове</li>
                        {grey && <ColorNamesList list={getGroup['grey']} />}
                    </section>
                </>
            )}
        </section>
    );
};

export default ExploreGroups;