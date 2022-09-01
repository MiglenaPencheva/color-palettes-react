import { useState, useEffect } from 'react';
import { getPixel } from '../helpers';
import * as helpers from './combinationsHelpers';

const Combinations = () => {

    const [data, setData] = useState([]);
    const [ctx, setCtx] = useState({});
    const [mainColor, setMainColor] = useState('yellow');
    const [whiteValue, setWhiteValue] = useState(0);
    const [blackValue, setBlackValue] = useState(0);
    const [greyValue, setGreyValue] = useState(0);

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
        setCtx(canvasCtx);
    };

    const rotateWheel = (e) => {
        resetWhite();
        resetBlack();
        resetGrey();

        const picked = getPixel(e, data);
        const pickedName = helpers.getColorName[picked];
        const degrees = helpers.calculateRotationDegrees(pickedName);
        const wheel = e.currentTarget;
        wheel.style.transform = `rotate(${degrees}deg)`;
        wheel.style['transition-duration'] = '1s';

        setMainColor(pickedName);
    };

    const onSelectedScheme = (e) => {
        const scheme = e.target.value;
        const schemeCanvas = document.getElementById('schemeCanvas');
        const schemeCanvasCtx = schemeCanvas.getContext('2d');
        schemeCanvasCtx.clearRect(10, 10, 140, 140);
        helpers.drawScheme[scheme](schemeCanvasCtx);
    };

    const onWhiteChange = (e) => {
        const whiteLayer = document.getElementById('whiteLayer');
        whiteLayer.style.display = 'block';
        const w = Number(e.target.value) / 100;
        whiteLayer.style['background-color'] = `rgba(255,255,255,${w})`;
        resetBlack();
        resetGrey();
        setWhiteValue(e.target.value);
    };
    const onBlackChange = (e) => {
        const canvas = document.getElementById('rybCanvas');
        const bl = 100 - (Number(e.target.value));
        canvas.style.filter = `brightness(${bl}%)`;
        resetWhite();
        setGreyValue(0);
        setBlackValue(e.target.value);
    };
    const onGreyChange = (e) => {
        const canvas = document.getElementById('rybCanvas');
        canvas.style.filter = `grayscale(${e.target.value}%)`;
        resetWhite();
        setBlackValue(0);
        setGreyValue(e.target.value);
    };

    const resetWhite = (e) => {
        const whiteLayer = document.getElementById('whiteLayer');
        whiteLayer.style.display = 'none';
        whiteLayer.style['background-color'] = 'rgba(255,255,255,0)';
        setWhiteValue(0);
    };
    const resetBlack = (e) => {
        const canvas = document.getElementById('rybCanvas');
        canvas.style.filter = 'brightness(0)';
        setBlackValue(0);
    };
    const resetGrey = (e) => {
        const canvas = document.getElementById('rybCanvas');
        canvas.style.filter = 'grayscale(0)';
        setGreyValue(0);
    };
    const resetWheel = (e) => {
        const wheel = document.getElementById('rybCanvas');
        wheel.style.transform = 'rotate(0deg)';
    };
    const resetScheme = (e) => {
        document.getElementById('scheme').value = 'Choose scheme';
        const schemeCanvas = document.getElementById('schemeCanvas');
        const schemeCanvasCtx = schemeCanvas.getContext('2d');
        schemeCanvasCtx.clearRect(10, 10, 140, 140);
    };
    const resetSettings = (e) => {
        resetWheel();
        resetScheme();
        resetWhite();
        resetBlack();
        resetGrey();
    };

    return (
        <section className="ryb" >
            <h2 className="ryb__header">Color combinations</h2>
            <h6> Find the colors that go well together.
                Combine vibes in nice and accurate color schemes.</h6>
            <h6 className="diffHeading"> Be the designer of your colorful life.</h6>

            <p> The traditional color theory is based on subtractive primary colors and the RYB color model.</p>
            <p> Red, Yellow and Blue are the
                <strong id="primary" onMouseOver={showOnMouseOver} onMouseLeave={hideOnMouseLeave} className="strong"> primary colors</strong>.
                The <strong id="secondary" onMouseOver={showOnMouseOver} onMouseLeave={hideOnMouseLeave} className="strong"> secondary colors </strong >
                Orange, Green and Purple are created by mixing primary colors.
                Red-Orange, Yellow-Orange, Yellow-Green, Blue-Green, Blue-Purple, Red-Purple are the
                <strong id="tertiary" onMouseOver={showOnMouseOver} onMouseLeave={hideOnMouseLeave} className="strong"> tertiary colors</strong>.
                They are made by mixing two secondary colors.
            </p>
            <p>
                RYB color model is used by artists, fashion stylists,
                interior, graphic and web designers.
            </p>

            <section className="ryb__actions">

                <section className="ryb__actions--wheel">
                    <h6>RYB color wheel</h6>

                    <img id="primaryImage" src="/images/primary.png" alt="primary" />
                    <img id="secondaryImage" src="/images/secondary.png" alt="secondary" />
                    <img id="tertiaryImage" src="/images/tertiary.png" alt="tertiary" />

                    <div className="white-layer" onClick={resetWhite} id="whiteLayer"></div>

                    <canvas id="rybCanvas" onClick={rotateWheel} width="300" height="300">
                        <img id="rybImage" src='/images/ryb.png' alt="ryb" onLoad={makeRybCanvas} />
                    </canvas>

                    <canvas id="schemeCanvas" width="160" height="160"></canvas>

                    <span>Pick a color from the wheel</span>
                </section>

                <section className="ryb__actions--settings">
                    <h6>Settings</h6>

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

                    <section className="ryb__actions--settings-sliders">
                        <p>Set the quantity of white, black or grey to change
                            the lightness, darkness or saturation of pure colors</p>

                        <label htmlFor="whiteRange" className="slider-label">
                            White
                            <input type="range" className="slider" id="whiteRange" min="0" max="100"
                                onChange={onWhiteChange} value={whiteValue} />
                            <span>{whiteValue}%</span>
                        </label>
                        <div>Add white to lighten the color.
                            <br /> Tints are pastel, pale, cool versions of the hue.</div>

                        <label htmlFor="blackRange" className="slider-label">
                            Black
                            {/* <span>{brightnessValue}%</span> */}
                            <input type="range" className="slider" id="blackRange" min="0" max="100"
                                onChange={onBlackChange} value={blackValue} />
                            <span>{blackValue}%</span>
                        </label>
                        <div>Add black to darken the color.
                            <br />Shades are deep, warm and more intensive.</div>

                        <label htmlFor="greyRange" className="slider-label">
                            Grey
                            <input type="range" className="slider" id="greyRange" min="0" max="100"
                                onChange={onGreyChange} value={greyValue} />
                            <span>{greyValue}%</span>
                        </label>
                        <div>Add grey to desaturate the color.
                            <br />Tones are muted and more colorless.</div>
                    </section>

                    <button onClick={resetSettings} className="button">reset</button>
                </section>

            </section>

            <section className="ryb__result">
                <ul>

                </ul>
            </section>


        </section>
    );

};

export default Combinations;