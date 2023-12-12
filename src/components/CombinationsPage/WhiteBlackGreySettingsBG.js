import { useState, useEffect } from 'react';
import * as helpers from './combinationsHelpers';
import { rgbToHsl } from '../ExploreColorPage/exploreHelpers';

const WhiteBlackGreySettingsBG = ({ scheme }) => {
    const [whiteValue, setWhiteValue] = useState(0);
    const [blackValue, setBlackValue] = useState(0);
    const [greyValue, setGreyValue] = useState(0);
    const [rgbArr, setRgbArr] = useState([]);
    let newArr = [];

    useEffect(() => {
        let currentRgb = helpers.getResultRgb(scheme);
        let rgbStringArr = [currentRgb.rgbFirst, currentRgb.rgbSecond, currentRgb.rgbThird, currentRgb.rgbFourth, currentRgb.rgbFifth];
        setRgbArr(rgbStringArr);
        setWhiteValue(0);
        setBlackValue(0);
        setGreyValue(0);
    }, [scheme]);

    const onWhiteChange = async (e) => {
        resetSettings();
        let w = Number(e.target.value) / 100;

        for (const rgbString of rgbArr) {
            let rgbValues = helpers.getRgbValueFromRgbString(rgbString);
            if (rgbValues.r !== 0 && rgbValues.g !== 0 && rgbValues.b !== 0) {
                let r = Math.round(rgbValues.r + ((255 - rgbValues.r) * w));
                let g = Math.round(rgbValues.g + ((255 - rgbValues.g) * w));
                let b = Math.round(rgbValues.b + ((255 - rgbValues.b) * w));
                let newRgbString = `rgb(${r}, ${g}, ${b})`;
                newArr.push(newRgbString);
            }
        }

        helpers.drawColorsInResultCanvas(newArr);
        setWhiteValue(e.target.value);
    };
    const onBlackChange = (e) => {
        resetSettings();
        let bl = Number(e.target.value) / 100;

        for (const rgbString of rgbArr) {
            let rgbValues = helpers.getRgbValueFromRgbString(rgbString);
            if (rgbValues.r !== 0 && rgbValues.g !== 0 && rgbValues.b !== 0) {
                let r = Math.round(rgbValues.r * (1 - bl));
                let g = Math.round(rgbValues.g * (1 - bl));
                let b = Math.round(rgbValues.b * (1 - bl));
                let newRgbString = `rgb(${r}, ${g}, ${b})`;
                newArr.push(newRgbString);
            }
        }

        helpers.drawColorsInResultCanvas(newArr);
        setBlackValue(e.target.value);
    };
    const onGreyChange = async (e) => {
        resetSettings();
        let gr = Number(e.target.value);

        for (const rgbString of rgbArr) {
            let rgbValues = helpers.getRgbValueFromRgbString(rgbString);
            if (rgbValues.r !== 0 && rgbValues.g !== 0 && rgbValues.b !== 0) {
                let hsl = rgbToHsl(rgbValues.r, rgbValues.g, rgbValues.b);
                let sat = hsl.saturation - gr;
                let newHsl = `hsl(${hsl.hue}, ${sat}%, ${hsl.lightness}%)`;
                newArr.push(newHsl);
            }
        }

        helpers.drawColorsInResultCanvas(newArr);
        setGreyValue(e.target.value);
    };

    const resetSettings = (e) => {
        helpers.drawColorsInResultCanvas(rgbArr);
        setWhiteValue(0);
        setBlackValue(0);
        setGreyValue(0);
    };

    return (
        <section className="ryb__actions--settings">
            <section id="slidersSection" className="ryb__actions--settings-sliders">
                <p>Регулирай количеството бяло, черно или сиво за промяна
                    към светли, тъмни или обезцветени оттенъци на чистите цветове</p>

                <section>
                    <label htmlFor="whiteRange" className="slider-label">
                        Бяло
                        <input type="range" className="slider" id="whiteRange" min="0" max="100"
                            onChange={onWhiteChange} value={whiteValue} />
                        <span>{whiteValue}%</span>
                    </label>
                    <div>Добавянето на бяло изсветлява цвета. Нюансите са 
                        <span className="link-on-hover" onClick={() => window.open('/combinations/pastels', '_blank')}> пастелни, </span>
                        бледи, студени оттенъци на чистия цвят.</div>
                    {/* </section>
                <section> */}
                    <label htmlFor="blackRange" className="slider-label">
                        Черно
                        <input type="range" className="slider" id="blackRange" min="0" max="100"
                            onChange={onBlackChange} value={blackValue} />
                        <span>{blackValue}%</span>
                    </label>
                    <div>Добавянето на черно потъмнява цвета. Сенките са наситени, топли и интензивни.</div>
                    {/* </section>
                <section> */}
                    <label htmlFor="greyRange" className="slider-label">
                        Сиво
                        <input type="range" className="slider" id="greyRange" min="0" max="100"
                            onChange={onGreyChange} value={greyValue} />
                        <span>{greyValue}%</span>
                    </label>
                    <div>Добавянето на сиво обезцветява. Тоновете са приглушени и слабо наситени оттенъци.</div>
                </section>
            </section>

            <div onClick={resetSettings} className="reset">Нулиране</div>
        </section>
    );
};

export default WhiteBlackGreySettingsBG;
