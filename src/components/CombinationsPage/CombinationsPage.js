import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

import { getPixel } from '../../helpers/getPixel';
import { exportResult } from '../../helpers/exportResult';
import * as helpers from './combinationsHelpers';
import { rgbToHex } from '../ExploreColorPage/exploreHelpers';
import WhiteBlackGreySettings from './WhiteBlackGreySettings';
import SchemesDetails from './SchemesDetails';

const initialHexState = {
    hex: '#94c7db',
    rgb: 'rgb(148, 199, 219)',
};

const Combinations = () => {
    // const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [selectedScheme, setSelectedScheme] = useState('complementary');
    const [mainColor, setMainColor] = useState('yellow');
    const [info, setInfo] = useState('');
    const [hex, setHex] = useState('');
    const [hexToExplore, setHexToExplore] = useLocalStorage('hex', initialHexState);

    
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
        resetScheme();

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

        // const rotated = e.currentTarget.firstChild;
        // drawRotated(degrees);
        // function drawRotated(degrees) {
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     ctx.save();
        //     ctx.translate(canvas.width / 2, canvas.height / 2);
        //     ctx.rotate(degrees * Math.PI / 180);
        //     ctx.drawImage(rotated, -rotated.width / 2, -rotated.hight / 2);
        //     ctx.restore();
        // }
    };

    const showSchemesInfo = (e) => {
        let infoSection = document.getElementById('infoSection');
        infoSection.style.display = 'flex';
        infoSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });

        let reedMore = document.getElementById('reedMore');
        reedMore.style.display = 'none';
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

        //   show info
        const advantagesSection = document.getElementById('advantagesSection');
        advantagesSection.style.display = 'block';
        const text = helpers.getInfoCombinations[scheme];
        setInfo(text);
        const p = document.getElementById('pScheme');
        p.style.display = 'none';
        let infoSection = document.getElementById('infoSection');
        infoSection.style.display = 'none';

        const rybSchemeSection = document.getElementById('rybSchemeSection');
        rybSchemeSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });

        let reedMore = document.getElementById('reedMore');
        reedMore.style.display = 'block';
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
        window.open('/color-explore', '_blank');
        // navigate('/color-explore', { replace: false, state: resultValues });
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
        resetScheme();
        const advantagesSection = document.getElementById('advantagesSection');
        advantagesSection.style.display = 'none';
        const infoSection = document.getElementById('infoSection');
        infoSection.style.display = 'none';
    };
    const resetScheme = (e) => {
        document.getElementById('scheme').value = 'Choose scheme';
        const schemeCanvas = document.getElementById('schemeCanvas');
        const schemeCanvasCtx = schemeCanvas.getContext('2d');
        schemeCanvasCtx.clearRect(10, 10, 140, 140);
        document.getElementById('resultSection').style.display = 'none';
        document.getElementById('pScheme').style.display = 'block';
        const advantagesSection = document.getElementById('advantagesSection');
        advantagesSection.style.display = 'none';

    };

    const exportScheme = async (e) => {
        const element = document.getElementById('resultCanvas');
        // const rgb = await getRgbColor(element);
        exportResult(element);
    };

    return (
        <section className="ryb-page" >

            <section className="section-header">
                <h2>Color combinations</h2>
                <h6> Find the colors that go well together.
                    Combine vibes in nice and accurate color schemes.</h6>
                <h6 className="diffHeading"> Be the designer of your colorful life.</h6>
            </section>

            <section className="ryb__info">
                <p> The traditional color theory is based on subtractive primary colors and the RYB color model.</p>
                <p> Red, Yellow and Blue are the
                    <strong id="primary" onMouseOver={showOnMouseOver} onMouseLeave={hideOnMouseLeave} className="strong"> primary colors</strong>.
                    The <strong id="secondary" onMouseOver={showOnMouseOver} onMouseLeave={hideOnMouseLeave} className="strong"> secondary colors </strong >
                    Orange, Green and Purple are created by mixing primary colors.
                    Red-Orange, Yellow-Orange, Yellow-Green, Blue-Green, Blue-Purple, Red-Purple are the
                    <strong id="tertiary" onMouseOver={showOnMouseOver} onMouseLeave={hideOnMouseLeave} className="strong"> tertiary colors</strong>,
                    made by mixing two secondary colors.</p>
                <p> RYB color model is used by artists, fashion stylists,
                    interior, graphic and web designers.</p>
            </section>

            <section className="ryb__wheel">
                <h6>RYB color wheel</h6>
                <img id="primaryImage" src="/images/primary.png" alt="primary" />
                <img id="secondaryImage" src="/images/secondary.png" alt="secondary" />
                <img id="tertiaryImage" src="/images/tertiary.png" alt="tertiary" />
                <canvas id="rybCanvas" onClick={rotateWheel} width="270" height="270">
                    <img id="rybImage" src='/images/ryb.png' alt="ryb" onLoad={makeRybCanvas} />
                </canvas>
                <canvas id="schemeCanvas" width="160" height="160"></canvas>
                <span>Pick a color from the wheel</span>
                <div onClick={resetWheel} className="reset">Reset wheel</div>
            </section>

            <section className="ryb__scheme" id="rybSchemeSection">
                <section className="select-container">
                    <label htmlFor="scheme" className="select-container__label">Color scheme</label>
                    <select id="scheme" name="scheme" defaultValue=""
                        onChange={onSelectedScheme}
                        className="select">
                        <option value="" disabled className="disabled-option">Choose scheme</option>
                        <option value="complementary">Complementary</option>
                        <option value="splitComplementary">Split-complementary</option>
                        <option value="monochromatic">Monochromatic</option>
                        <option value="analogous3">Analogous 3 colors</option>
                        <option value="analogous5">Analogous 5 colors</option>
                        <option value="triadic">Triadic</option>
                        <option value="tetradic1">Tetradic 1 variant</option>
                        <option value="tetradic2">Tetradic 2 variant</option>
                        <option value="square">Square</option>
                    </select>
                </section>
                <p id="pScheme" className="ryb__scheme-p">
                    When arranged in appropriate schemes,
                    colors look appealing together, create stylish and aesthetic feeling.
                    <span onClick={showSchemesInfo}> Reed more...</span>
                </p>

                <section id="resultSection" className="ryb__result">
                    <canvas id="resultCanvas"
                        onMouseMove={showHexValueResult}
                        onClick={openResultInExplorePage}
                        onMouseLeave={hideHexValueResult}>
                    </canvas>
                    <span id="resultHex"> #{hex} <br /><i>Explore color details...</i></span>
                    <button className="button" onClick={exportScheme}>Export scheme</button>
                    <link rel="stylesheet" href="" value="reed more..." />
                </section>

                <WhiteBlackGreySettings scheme={selectedScheme} />

            </section>

            <section className="ryb__advantages" id="advantagesSection">
                <h6>Scheme advantages</h6>
                {info}
            </section>

            <div id="reedMore" onClick={showSchemesInfo}>Reed more about color schemes...</div>
            <SchemesDetails />

        </section>
    );
};

export default Combinations;