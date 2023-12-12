import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

import { getPixel } from '../../helpers/getPixel';
import { exportResult } from '../../helpers/exportResult';
import * as helpers from './combinationsHelpers';
import { rgbToHex } from '../ExploreColorPage/exploreHelpers';
import WhiteBlackGreySettingsBG from './WhiteBlackGreySettingsBG';

const initialHexState = {
    hex: '#94c7db',
    rgb: 'rgb(148, 199, 219)',
};

const RybWheelBG = () => {

    const [data, setData] = useState([]);
    const [selectedScheme, setSelectedScheme] = useState('triadic');
    const [mainColor, setMainColor] = useState('yellow');
    const [info, setInfo] = useState('');
    const [hex, setHex] = useState('');
    const [hexToExplore, setHexToExplore] = useLocalStorage('hex', initialHexState);
    const [advantages, setAdvantages] = useState(false);
    const [reedMore, setReedMore] = useState(true);

    const showOnMouseOver = (e) => {
        const targetName = e.currentTarget.id;
        const target = document.getElementById(`${targetName}Image`);
        target.style.display = 'block';
        target.style['z-index'] = 10;
    };
    const hideOnMouseLeave = (e) => {
        const targetName = e.currentTarget.id;
        const target = document.getElementById(`${targetName}Image`);
        target.style.display = 'none';
        target.style['z-index'] = -10;
    };

    const makeRybCanvas = (e) => {
        const canvas = document.getElementById('rybCanvas');
        const ryb = document.getElementById('rybImage');

        const canvasCtx = canvas.getContext('2d');
        canvasCtx.drawImage(ryb, 0, 0, 270, 270);
        const imageData = canvasCtx.getImageData(0, 0, canvas.width, canvas.height);
        setData(imageData.data);
    };

    const rotateWheel = async (e) => {
        resetWheel();

        const rgb = getPixel(e, data);

        if (rgb !== 'rgb(0, 0, 0)') {
            const colorName = helpers.getColorNameFromRgb[rgb];
            const degrees = helpers.getRotationDegrees[colorName];

            const canvas = e.currentTarget;
            canvas.style.transform = `rotate(${degrees}deg)`;
            canvas.style['transition-duration'] = '1s';

            setMainColor(colorName);
        } else {
            setMainColor('yellow');
        }
    };

    const onSelectedScheme = (e) => {
        const scheme = e.target.value;
        setSelectedScheme(scheme);

        document.getElementById('resultSection').style.display = 'flex';

        let resultCanvas = document.getElementById('resultCanvas');
        let resultCanvasCtx = resultCanvas.getContext('2d');

        const colorObject = helpers.colorObjects[mainColor];
        const colorsArr = colorObject[scheme];
        if (colorsArr === undefined) { return; }

        let w = (colorsArr.length * 100);
        let h = 100;
        if (window.innerWidth < 560) { w = colorsArr.length * 80; h = 80; }
        if (window.innerWidth < 480) { w = colorsArr.length * 50; h = 50; }
        resultCanvas.width = w;
        resultCanvas.height = h;

        resultCanvasCtx.clearRect(0, 0, w, h);

        if (colorsArr && colorsArr.length > 0) {
            // draw scheme
            const schemeCanvas = document.getElementById('schemeCanvas');
            const schemeCanvasCtx = schemeCanvas.getContext('2d');
            schemeCanvasCtx.clearRect(10, 10, 140, 140);
            helpers.drawScheme[scheme](schemeCanvasCtx);

            // draw colors
            let rgbArr = [];
            for (let i = 0; i < colorsArr.length; i++) {
                let color = colorsArr[i];
                let rgb = helpers.getRgbFromColorName[color];
                rgbArr.push(rgb);
            }
            helpers.drawColorsInResultCanvas(rgbArr);
        }

        setAdvantages(true);
        const text = helpers.getInfoCombinationsBG[scheme];
        setInfo(text);
        setReedMore(false);

        document.getElementById('rybContainer').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    };

    const showHexValueResult = (e) => {
        let { hex } = getRgbAndHex(e);
        let resultHex = document.getElementById('resultHex');
        resultHex.style.display = 'block';
        setHex(hex);
        resultHex.style.top = Number(e.clientY + 10) + 'px';
        resultHex.style.left = Number(e.clientX) + 'px';
    };
    const hideHexValueResult = (e) => {
        let resultHex = document.getElementById('resultHex');
        resultHex.style.display = 'none';
    };
    const openResultInExplorePage = (e) => {
        let resultValues = getRgbAndHex(e);
        setHexToExplore(resultValues);
        window.open('/color-explore/convertor', '_blank');
    };
    function getRgbAndHex(e) {
        let canvas = e.currentTarget;
        let ctx = canvas.getContext('2d');
        let colData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

        let rgb = getPixel(e, colData);
        let rgbValues = helpers.getRgbValueFromRgbString(rgb);
        let hex = rgbToHex(rgbValues.r, rgbValues.g, rgbValues.b);
        let resultValues = { rgb, hex };
        return resultValues;
    }

    const resetWheel = (e) => {
        const wheel = document.getElementById('rybCanvas');
        wheel.style.transform = 'rotate(0deg)';
        setMainColor('yellow');
        document.getElementById('scheme').value = 'Choose scheme';
        const schemeCanvas = document.getElementById('schemeCanvas');
        const schemeCanvasCtx = schemeCanvas.getContext('2d');
        schemeCanvasCtx.clearRect(10, 10, 140, 140);
        document.getElementById('resultSection').style.display = 'none';
        setAdvantages(false);
        setReedMore(true);
    };

    const exportScheme = async (e) => {
        const element = document.getElementById('resultCanvas');
        exportResult(element);
    };

    return (
        <section>
            <section className="ryb__details">
                <article> Традиционната теория на цветовете използва субстрактивния цветови модел и <b>RYB колелото</b> (Red Yellow Blue).</article>
                <article> Червено, жълто и синьо са
                    <strong id="primary" onMouseOver={showOnMouseOver} onMouseLeave={hideOnMouseLeave} className="strong"> основните цветове</strong>.
                    <strong id="secondary" onMouseOver={showOnMouseOver} onMouseLeave={hideOnMouseLeave} className="strong"> Второстепенните </strong >
                    (вторичните) оранжево, зелено и лилаво са образувани от смесването на основните.
                    Червено-оранжево, жълто-оранжево, жълто-зелено, синьо-зелено, сино-лилаво, червено-лилаво са
                    <strong id="tertiary" onMouseOver={showOnMouseOver} onMouseLeave={hideOnMouseLeave} className="strong"> спомагателните</strong> -
                    комбинация от основни и вторични цветове.</article>
                <article>Цветовият модел RYB се използва от художници, модни стилисти, 
                    интериорни, графични и уеб дизайнери.</article>
            </section>


            <section className="ryb__container">
                <section className="ryb__wheel" id="rybContainer">
                    <h6>Цветно колело
                        <div className="ryb__wheel--arrow">^</div>
                    </h6>

                    <img id="primaryImage" src="/images/primary.png" alt="primary" />
                    <img id="secondaryImage" src="/images/secondary.png" alt="secondary" />
                    <img id="tertiaryImage" src="/images/tertiary.png" alt="tertiary" />
                    <canvas id="rybCanvas" onClick={rotateWheel} width="270" height="270">
                        <img id="rybImage" src='/images/ryb.png' alt="ryb" onLoad={makeRybCanvas} />
                    </canvas>
                    <canvas id="schemeCanvas" width="160" height="160"></canvas>
                    <span>Избери цвят от колелото</span>
                    <div onClick={resetWheel} className="reset">Нулиране</div>
                </section>

                <section className="ryb__scheme" id="rybSchemeSection">
                    <section className="select-container">
                        <label htmlFor="scheme" className="select-container__label">Цветова схема</label>
                        <select id="scheme" name="scheme" defaultValue=""
                            onChange={onSelectedScheme}
                            className="select">
                            <option value="" disabled className="disabled-option">Избери схема</option>
                            <option value="complementary">Допълваща</option>
                            <option value="splitComplementary">Разделно допълваща</option>
                            <option value="monochromatic">Монохромна</option>
                            <option value="analogous3">Аналогична 3 цвята</option>
                            <option value="analogous5">Аналогична 5 цвята</option>
                            <option value="triadic">Триадична</option>
                            <option value="tetradic1">Тетрадична 1 вариант</option>
                            <option value="tetradic2">Тетрадична 2 вариант</option>
                            <option value="square">Квадратна</option>
                        </select>
                    </section>
                    {reedMore &&
                        <p id="pScheme" className="ryb__scheme-p">
                            Когато се избират с подходяща схема,
                            цветовете изглеждат привлекателни заедно, създават стилно и естетическо усещане.
                            <span onClick={() => window.open('/combinations/schemes', '_blank')}> Прочети повече...</span>
                        </p>
                    }

                    <section id="resultSection" className="ryb__result">
                        <canvas id="resultCanvas"
                            onMouseMove={showHexValueResult}
                            onClick={openResultInExplorePage}
                            onMouseLeave={hideHexValueResult}>
                        </canvas>
                        <span id="resultHex"> #{hex} <br /><i>Опознай цветa в детайли...</i></span>
                        <button className="button" onClick={exportScheme}>Запази схемата</button>
                        <link rel="stylesheet" href="" value="reed more..." />
                    </section>

                    <WhiteBlackGreySettingsBG scheme={selectedScheme} />

                </section>
            </section>

            {advantages &&
                <section className="ryb__advantages" id="advantagesSection">
                    <h6>Предимства на цветовата схема</h6>
                    {info}
                </section>
            }

        </section>

    );
};

export default RybWheelBG;