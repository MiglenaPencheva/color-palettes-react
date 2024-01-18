import { useState, useEffect } from 'react';
import { useLanguageContext } from '../../contexts/LanguageContext';

const HslMixer = () => {
    const { language } = useLanguageContext();

    const [hue, setHue] = useState(197);
    const [saturation, setSaturation] = useState(50);
    const [lightness, setLightness] = useState(72);

    useEffect((e) => {
        let hslMix = document.getElementById('hslMix');
        hslMix.style['background-color'] = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }, [hue, saturation, lightness]);

    return (
        <section className="explore__rgb-mixer">

            <h5 className="explore__info">{language.lang === 'en' ? 'HSL mixer' : 'HSL модел'}</h5>

            {language.lang === 'en'
                ? <p>In HSL representation model <b><i>hue</i></b> is a degree on the color wheel from 0 to 360.
                    <br />0% <b><i>saturation</i></b> means a shade of gray.
                    Tones are unsaturated hues with some quantity of grey.
                    While 100% saturation means the pure color.
                    <br />Adding black makes hues darker, 0% <b><i>lightness</i></b> means black.
                    Tints (pastels) are lighter versions of the color and 100% lightness means white.
                </p>
                : <p>В модела HSL <b><i>цветът</i></b> съответства на градус от цветното колело - от 0 до 360.
                    <br />С 0% <b><i>наситеност</i></b> той е обезцветен. Слабо наситеният оттенък е тон, в гамата на сивото.  
                    Докато 100% наситеност представляват чистият цвят.
                    <br />Затъмняването на цвета, го прави негова сянка, тъмен оттенък и 0% <b><i>яркост</i></b> означава черно.
                    Нюансите (пастелите) са светли оттенъци на цвета и 100% осветеност означава бяло.
                </p>
            }

            <section className="explore__red-blue-green">
                <span id="hue">{language.lang === 'en' ? 'hue:' : 'цвят: '} {hue}
                    <label htmlFor="hueRange" className="slider-label">
                        <input type="range" value={hue}
                            onChange={e => setHue(e.target.value)}
                            className="slider" id="hueRange" min="0" max="300" />
                    </label>
                </span>
                <span id="saturation">{language.lang === 'en' ? 'saturation:' : 'наситеност: '} {saturation}%
                    <label htmlFor="saturationRange" className="slider-label">
                        <input type="range" value={saturation}
                            onChange={e => setSaturation(e.target.value)}
                            className="slider" id="saturationRange" min="0" max="100" />
                    </label>
                </span>
                <span id="lightness">{language.lang === 'en' ? 'lightness:' : 'яркост: '} {lightness}%
                    <label htmlFor="lightnessRange" className="slider-label">
                        <input type="range" value={lightness}
                            onChange={e => setLightness(e.target.value)}
                            className="slider" id="lightnessRange" min="0" max="100" />
                    </label>
                </span>
            </section>
            <span id="hslMix">{`hsl(${hue}, ${saturation}%, ${lightness}%)`}</span>
        </section>
    );
};

export default HslMixer;