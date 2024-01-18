import { useState, useEffect } from 'react';
import { useLanguageContext } from '../../contexts/LanguageContext';

const RgbMixer = () => {
    const { language } = useLanguageContext();

    const [red, setRed] = useState(148);
    const [green, setGreen] = useState(199);
    const [blue, setBlue] = useState(219);

    useEffect((e) => {
        let rgbMix = document.getElementById('rgbMix');
        rgbMix.style['background-color'] = `rgb(${red}, ${green}, ${blue})`;
    }, [red, green, blue]);

    return (
        <section className="explore__rgb-mixer" id="rgbMixer">

            <h5 className="explore__info">{language.lang === 'en' ? 'RGB mixer' : 'RGB модел'}</h5>

            {language.lang === 'en'
                ? <p>The RGB color model is an additive color model in which
                    the <b><i>red</i></b>, <b><i>green</i></b> and <b><i>blue</i></b> are the primary colors of light.
                    <br />When added together in different amounts, they reproduce a wide range of colors.</p>
                : <p>Моделът RGB е адитивен цветови модел, в който основните цветове
                    са <b><i>червено</i></b>, <b><i>зелено</i></b> и <b><i>синьо</i></b>.
                    <br />Съчетани заедно в различни количества, образуват широка гама от цветове.</p>
            }

            <section className="explore__red-blue-green">
                <span id="red">{language.lang === 'en' ? 'red:' : 'червено: '} {red}
                    <label htmlFor="redRange" className="slider-label">
                        <input type="range" value={red}
                            onChange={e => setRed(e.target.value)}
                            className="slider" id="redRange" min="0" max="255" />
                    </label>
                </span>
                <span id="green">{language.lang === 'en' ? 'green:' : 'зелено: '} {green}
                    <label htmlFor="greenRange" className="slider-label">
                        <input type="range" value={green}
                            onChange={e => setGreen(e.target.value)}
                            className="slider" id="greenRange" min="0" max="255" />
                    </label>
                </span>
                <span id="blue">{language.lang === 'en' ? 'blue:' : 'синьо: '} {blue}
                    <label htmlFor="blueRange" className="slider-label">
                        <input type="range" value={blue}
                            onChange={e => setBlue(e.target.value)}
                            className="slider" id="blueRange" min="0" max="255" />
                    </label>
                </span>
            </section>

            <span id="rgbMix">{`rgb(${red}, ${green}, ${blue})`}</span>

            {language.lang === 'en'
                ? <p>The main purpose of the RGB color model is for representation and display of images in digital and electronic systems.</p>
                : <p>Основното приложение на RGB модела е в изобразяването на цветове в цифрови и електронни системи, компютърните и телевизионни технологии.</p>
            }

        </section>
    );
};

export default RgbMixer;