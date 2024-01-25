import { Link } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/LanguageContext';

import Language from './../Language/Language';

const Header = () => {
    const { language } = useLanguageContext();

    const showMore = (e) => {
        if (e.target.tagName.toLowerCase() === 'a') {
            e.target.children[0].style.opacity = '1';
            e.target.children[1].style.opacity = '1';
        }
    };
    const hideMore = (e) => {
        if (e.target.tagName.toLowerCase() === 'a') {
            e.target.children[0].style.opacity = '0';
            e.target.children[1].style.opacity = '0';
        }
    };

    return (
        <section className="home__section">

            <Language />

            {language.lang === 'en' ? (
                <section className="home__headings">

                    <h1>Color combinations</h1>
                    <h3>Colors you like</h3>
                    <h4>Feel the colors</h4>
                    <h3>Dream in colors</h3>
                    <h4>Be colorful</h4>

                    <h3>Just color it</h3>
                    <h4>Mix with style</h4>
                    <h1>World of million colors</h1>

                    <h3>Color sensation</h3>
                    <h4>The colors of the sun</h4>
                    <h3>Inspired by natural beauty</h3>
                    <h4>Colors cause certain emotions</h4>
                    <h1>The color tool</h1>

                    <h3>Somewhere between black and white</h3>
                    <h4>RGB color model</h4>
                    <h3>The world is ful of colorful examples</h3>
                    <h4>Design your colorful world</h4>
                    <h3>Colorization</h3>

                    <h4>The nature of colors</h4>
                    <h3>Your choice, your colors</h3>
                    <h4>The harmony of nature</h4>
                    <h3>The colors of light</h3>
                    <h4>Rules of mixing colors</h4>
                    <h3>Compose a harmony</h3>

                    <h4>Pastel color palettes</h4>
                    <h3>Select colors by scheme</h3>
                    <h4>Neutral colors</h4>
                    <h3>The language of colors</h3>
                    <h4>Landscapes, sea and sky, flora and fauna</h4>

                    <h3>Understand the colors</h3>
                    <h4>RYB color wheel</h4>
                    <h3>Colorize yor dreams</h3>
                    <h4>The visible spectrum of light</h4>
                    <h3>Pick the right color</h3>

                    <h4>Extract the colors you wish</h4>
                    <h3>The wheel of colors</h3>
                    <h4>Colors influence</h4>
                    <h3>Complementary color scheme</h3>
                    <h4>Millions of colors</h4>
                    <h3>Inspiration</h3>

                    <h3>Analogous scheme</h3>
                    <h4>Sequential and divergent schemes</h4>
                    <h3>White means 100% lightness</h3>
                    <h4>Monochromatic scheme</h4>
                    <h3>Color details</h3>

                    <h4>Subtractive and additive color mixing</h4>
                    <h3>Compose your desired combination</h3>
                    <h4>Saturation and lightness</h4>
                    <h3>Color values convertor</h3>
                    <h4>tints, shades, tones</h4>

                    <h3>Color palettes</h3>
                    <h4>Primary colors</h4>
                    <h3>The magic of light</h3>
                    <h4>Color picker</h4>
                </section>
            ) : (
                <section className="home__headings">

                    <h1>Цветни комбинации</h1>
                    <h3>Цветовете, които обичаш</h3>
                    <h4>Почувствай цветовете</h4>
                    <h3>Мечтай цветно</h3>
                    <h4>Бъди цветен</h4>

                    <h3>Оцвети го!</h3>
                    <h4>Комбинирай със стил</h4>
                    <h1>Свят с милион цветове</h1>

                    <h3>Цветно усещане</h3>
                    <h4>Цветовете на слънцето</h4>
                    <h3>Вдъхновени от природата</h3>
                    <h4>Цветовете предизвикват емоции</h4>
                    <h1>Цветен инструмент</h1>

                    <h3>Някъде между черното и бялото</h3>
                    <h4>RGB цветен модел</h4>
                    <h3>Светът е пълен с цветни примери</h3>
                    <h4>Създай своя цветен свят</h4>
                    <h3>Оцветяване</h3>

                    <h4>Природата на цветовете</h4>
                    <h3>Твоят избор, твоите цветове</h3>
                    <h4>Хармонията на природата</h4>
                    <h3>Цветовете на светлината</h3>
                    <h4>Правила за цветови съчетания</h4>
                    <h3>Комозирай хармония</h3>

                    <h4>Пастелни цветни палитри</h4>
                    <h3>Подбери цветовете чрез схема</h3>
                    <h4>Неутрални цветове</h4>
                    <h3>Езикът на цветовете</h3>
                    <h4>Пейзажи, море и небе, флора и фауна</h4>

                    <h3>Разбери цветовете</h3>
                    <h4>RYB цветен модел</h4>
                    <h3>Оцвети мечтите си</h3>
                    <h4>Видимият сектър на светлината</h4>
                    <h3>Избери правилния цвят</h3>

                    <h4>Извлечи цветовете, които желаеш</h4>
                    <h3>Колелото на цветовете</h3>
                    <h4>Цветно въздействие</h4>
                    <h3>Допълваща цветова схема</h3>
                    <h4>Милиони цветове</h4>
                    <h3>Вдъхновение</h3>

                    <h3>Аналогична цветова схема</h3>
                    <h4>Последователна и дивергентната схема</h4>
                    <h3>Бяло означава 100% светлина</h3>
                    <h4>Монохромна цветова схема </h4>
                    <h3>Цветни детайли</h3>

                    <h4>субстрактивно и адитивно смесване</h4>
                    <h3>Създай желаната комбинация</h3>
                    <h4>Наситеност и яркост</h4>
                    <h3>Конвертор на цветни стойности</h3>
                    <h4>Нюанси, сенки, тонове</h4>

                    <h3>Цветни палитри</h3>
                    <h4>Основни цветове</h4>
                    <h3>Магията на светлината</h3>
                    <h4>Избери си цвят</h4>
                </section>
            )}


            {language.lang === 'en' ? (
                <nav className="home__navbar--ul">
                    <Link className="home__navbar--link gallery"
                        to="/gallery" onMouseOver={showMore} onMouseOut={hideMore}>
                        <span>photo</span>
                        Gallery
                        <span>color palettes</span>
                    </Link>
                    <Link className="home__navbar--link picker"
                        to="/color-picker" onMouseOver={showMore} onMouseOut={hideMore}>
                        <span>palette maker</span>
                        Color picker
                        <span>swatches card</span>
                    </Link>
                    <Link className="home__navbar--link wheel"
                        to="/combinations" onMouseOver={showMore} onMouseOut={hideMore}>
                        <span>color wheel</span>
                        Combinations
                        <span>color schemes</span>
                    </Link>
                    <Link className="home__navbar--link explore"
                        to="/color-explore" onMouseOver={showMore} onMouseOut={hideMore}>
                        <span>details</span>
                        Explore color
                        <span>convertor</span>
                    </Link>
                </nav>
            ) : (
                <nav className="home__navbar--ul">
                    <Link className="home__navbar--link gallery"
                        to="/gallery" onMouseOver={showMore} onMouseOut={hideMore}>
                        <span>снимки</span>
                        Галерия
                        <span>цветни палитри</span>
                    </Link>
                    <Link className="home__navbar--link picker"
                        to="/color-picker" onMouseOver={showMore} onMouseOut={hideMore}>
                        <span>създай палитра</span>
                        Избери цветовеq
                        <span>цветна карта</span>
                    </Link>
                    <Link className="home__navbar--link wheel"
                        to="/combinations" onMouseOver={showMore} onMouseOut={hideMore}>
                        <span>цветно колело</span>
                        Комбинации
                        <span>цветови схеми</span>
                    </Link>
                    <Link className="home__navbar--link explore"
                        to="/color-explore" onMouseOver={showMore} onMouseOut={hideMore}>
                        <span>детайли</span>
                        Опознай цвета
                        <span>конвертор</span>
                    </Link>
                </nav>
            )}

        </section >
    );
};

export default Header;
