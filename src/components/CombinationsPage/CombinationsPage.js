import { useState, useEffect } from 'react';
import { getPixel } from '../../helpers/getPixel';
import { exportResult, getRgbColor } from '../../helpers/exportResult';
// import Logo from '../Logo/Logo';
import * as helpers from './combinationsHelpers';
import WhiteBlackGreySettings from './WhiteBlackGreySettings';

const Combinations = () => {

    const [data, setData] = useState([]);
    const [mainRgb, setMainRgb] = useState('rgb(254, 254, 51)');
    const [mainColor, setMainColor] = useState('yellow');
    const [info, setInfo] = useState('');

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
        canvasCtx.drawImage(ryb, 0, 0, 300, 300);
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

    const onSelectedScheme = (e) => {
        const scheme = e.target.value;
        const schemeCanvas = document.getElementById('schemeCanvas');
        document.getElementById('resultSection').style.display = 'flex';

        let ul = document.getElementById('resultColors');
        const colorObject = helpers.colorObjects[mainColor];
        const colorsArr = colorObject[scheme];

        while (ul.hasChildNodes()) {
            ul.removeChild(ul.firstChild);
        }

        if (colorsArr && colorsArr.length > 0) {
            // draw scheme in schemeCanvas
            const schemeCanvasCtx = schemeCanvas.getContext('2d');
            schemeCanvasCtx.clearRect(10, 10, 140, 140);
            helpers.drawScheme[scheme](schemeCanvasCtx);
            // show li in colors ul
            for (const color of colorsArr) {
                let li = document.createElement('li');
                li.className = 'ryb__actions--result-li';
                const rgb = helpers.getRgbFromColorName[color];
                li.style.backgroundColor = rgb;
                // let info = document.createElement('a');
                // info.className = 'ryb__actions--result-li-link';
                // info.style.whiteSpace = 'pre';
                // info.textContent = color + '\r\n' + rgb;

                // li.addEventListener('mouseover', { showRgb });
                // li.addEventListener('mouseleave', () => { info.style.display = 'none'; });

                // li.appendChild(info);
                ul.appendChild(li);
            }
        }

        //   show info
        const text = helpers.getInfoCombinations[scheme];
        setInfo(text);
        const p = document.getElementById('pScheme');
        p.style.display = 'none';
    };

    const resetWheel = (e) => {
        const wheel = document.getElementById('rybCanvas');
        wheel.style.transform = 'rotate(0deg)';
        setMainColor('yellow');
        resetScheme();
    };
    const resetScheme = (e) => {
        document.getElementById('scheme').value = 'Choose scheme';
        const schemeCanvas = document.getElementById('schemeCanvas');
        const schemeCanvasCtx = schemeCanvas.getContext('2d');
        schemeCanvasCtx.clearRect(10, 10, 140, 140);
        document.getElementById('resultSection').style.display = 'none';
    };
    
    const exportScheme = async (e) => {
        const element = document.getElementById('resultColorsContainer');
        const rgb = await getRgbColor(element);
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

            <section className="ryb__actions">
                <section className="ryb__actions--wheel">
                    <h6>RYB color wheel</h6>

                    <img id="primaryImage" src="/images/primary.png" alt="primary" />
                    <img id="secondaryImage" src="/images/secondary.png" alt="secondary" />
                    <img id="tertiaryImage" src="/images/tertiary.png" alt="tertiary" />

                    <canvas id="rybCanvas" onClick={rotateWheel} width="300" height="300">
                        <img id="rybImage" src='/images/ryb.png' alt="ryb" onLoad={makeRybCanvas} />
                    </canvas>

                    <canvas id="schemeCanvas" width="160" height="160"></canvas>

                    <span>Pick a color from the wheel</span>
                    <div onClick={resetWheel} className="reset">Reset wheel</div>
                </section>


                <section className="ryb__actions--scheme">
                    <section className="select-container">
                        <label htmlFor="scheme" className="select-container__label">Color scheme</label>
                        <select id="scheme" name="scheme"
                            onChange={onSelectedScheme}
                            className="select">
                            <option value="Choose scheme" className="default-scheme">Choose scheme</option>
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
                    <p id="pScheme" className="ryb__actions--scheme-p"> Colors that create an aesthetic feeling when used together will commonly accompany each other in color schemes.
                    </p>
                    {/* In color theory, a color scheme is the choice of colors used in various artistic and design contexts. 
                    Color schemes are used to create style and appeal. */}

                    <section id="resultSection" className="ryb__actions--result">
                        <div id="resultColorsContainer" className="ryb__actions--result-colors">
                            <ul id="resultColors" className="ryb__actions--result-ul"></ul>
                            <div id="whiteLayer"></div>
                            <div id="blackLayer"></div>
                        </div>
                        {/* <span className="ryb__actions--result-info">{info}</span> */}
                        <button className="button" onClick={exportScheme}>Export scheme</button>
                        {/* <div onClick={resetScheme} className="reset">Reset scheme</div> */}
                        <link rel="stylesheet" href="" value="reed more..." />
                    </section>

                    <WhiteBlackGreySettings />

                </section>
            </section>
        </section>
    );

};

export default Combinations;