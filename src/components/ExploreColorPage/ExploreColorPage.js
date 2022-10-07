import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as helpers from '../ExploreColorPage/exploreHelpers';
import { getPixel } from '../../helpers/getPixel';
import { hideError, showError } from '../../helpers/notifications';

// import HueResult from './HueResult';
// import SaturationResult from './SaturationResult';
// import LightnessResult from './LightnessResult';
import RgbMixer from './RgbMixer';
import HslMixer from './HslMixer';

const ExploreColor = () => {
    const location = useLocation();

    const [name, setName] = useState('no name');
    const [rgb, setRgb] = useState('');
    const [hex, setHex] = useState('');
    const [hsl, setHsl] = useState('');
    const [cmyk, setCmyk] = useState('');
    const [color, setColor] = useState({});
    const [selectedColor, setSelectedColor] = useState('#94c7db');
    const [currentColor, setCurrentColor] = useState('#94c7db');
    const [r, setR] = useState(148);
    const [g, setG] = useState(199);
    const [b, setB] = useState(219);
    const [h, setH] = useState(197);
    const [s, setS] = useState(50);
    const [l, setL] = useState(72);

    useEffect(() => {
        let rgbCanvas = document.getElementById('rgbCanvas');
        let rgbCanvasCtx = rgbCanvas.getContext('2d');
        let rgbGradient = rgbCanvasCtx.createLinearGradient(0, 0, rgbCanvas.width, 0);
        rgbGradient.addColorStop(0, 'red');
        rgbGradient.addColorStop(.08, '#FF8000');
        rgbGradient.addColorStop(.16, 'yellow');
        rgbGradient.addColorStop(.24, '#80FF00');
        rgbGradient.addColorStop(.32, '#00FF00');
        rgbGradient.addColorStop(.40, '#00FF80');
        rgbGradient.addColorStop(.48, 'cyan');
        rgbGradient.addColorStop(.56, '#0080FF');
        rgbGradient.addColorStop(.64, 'blue');
        rgbGradient.addColorStop(.72, '#8000FF');
        rgbGradient.addColorStop(.80, 'magenta');
        rgbGradient.addColorStop(.88, '#FF0080');
        rgbGradient.addColorStop(.96, 'red');
        rgbCanvasCtx.fillStyle = rgbGradient;
        rgbCanvasCtx.fillRect(0, 0, rgbCanvas.width, rgbCanvas.height);
    }, []);

    useEffect(() => {
        if (location.state !== null) {
            let rgbResult = location.state;
            setSelectedColor(rgbResult.rgb);
            setCurrentColor(rgbResult.rgb);
            preview(rgbResult.rgb);
            let color = helpers.fillColorObject(rgbResult.rgb);
            setName(color.name);
            setRgb(color.rgb);
            setHex(color.hex);
            setHsl(color.hsl);
            setCmyk(color.cmyk);
            color.rgb = rgbResult.rgb.replace('rgb', '').replace('(', '').replace(')', '');
            let arr = color.rgb.split(', ');
            setR(Number(arr[0]));
            setG(Number(arr[1]));
            setB(Number(arr[2]));
            let hslResult = helpers.rgbToHsl(color.red, color.green, color.blue);
            setH(hslResult.hue);
            setS(hslResult.saturation);
            setL(hslResult.lightness);
        }
    }, [location.state]);

    useEffect(() => {
        function makeGradient(el, result) {
            let ctx = el.getContext('2d');
            let grad = ctx.createLinearGradient(0, 0, el.width, 0);
            grad.addColorStop(0, selectedColor);
            grad.addColorStop(1, result);
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, el.width, el.height);
        }
        let whiteCanvas = document.getElementById('whiteCanvas');
        makeGradient(whiteCanvas, 'white');
        let blackCanvas = document.getElementById('blackCanvas');
        makeGradient(blackCanvas, 'black');
        let greyCanvas = document.getElementById('greyCanvas');
        makeGradient(greyCanvas, 'grey');
    }, [selectedColor]);

    const getRgbFromSelectedColor = (e) => {
        let rgbCanvas = e.target;
        let rgbCanvasCtx = rgbCanvas.getContext('2d');
        let imageData = rgbCanvasCtx.getImageData(0, 0, rgbCanvas.width, rgbCanvas.height);
        let colorData = imageData.data;
        let rgb = getPixel(e, colorData);
        return rgb;
    };

    const fillColorValues = (rgb) => {
        let color = helpers.fillColorObject(rgb);
        preview(rgb);
        setColor(color);
        setName(color.name);
        setRgb(color.rgb);
        setHex(color.hex);
        setHsl(color.hsl);
        setCmyk(color.cmyk);
        color.rgb = rgb.replace('rgb', '').replace('(', '').replace(')', '');
        let arr = color.rgb.split(', ');
        setR(Number(arr[0]));
        setG(Number(arr[1]));
        setB(Number(arr[2]));
        let hslResult = helpers.rgbToHsl(color.red, color.green, color.blue);
        setH(hslResult.hue);
        setS(hslResult.saturation);
        setL(hslResult.lightness);
    };

    const selectColor = (e) => {
        document.getElementById('colorValue').value = '';

        let rgb = getRgbFromSelectedColor(e);
        fillColorValues(rgb);
        setSelectedColor(rgb);
    };
    const modifyColor = (e) => {
        let rgb = getRgbFromSelectedColor(e);
        fillColorValues(rgb);
        setCurrentColor(rgb);
    };

    const submitColorHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let colorValue = formData.get('colorValue');

        const color = helpers.getColorObject(colorValue);

        if (colorValue === '') {
            return;
        } else if (color.name || color.rgb || color.hex || color.hsl) {
            preview(colorValue);
            setSelectedColor(colorValue);
            if (color.rgb) {
                color.hex = helpers.rgbToHex(color.red, color.green, color.blue);
                color.name = helpers.rgbToName(color.red, color.green, color.blue);
                let hslResult = helpers.rgbToHsl(color.red, color.green, color.blue);
                color.hsl = hslResult.hslString;
                color.hue = hslResult.hue;
                color.saturation = hslResult.saturation;
                color.lightness = hslResult.lightness;
                let cmykResult = helpers.rgbToCmyk(color.red, color.green, color.blue);
                color.cmyk = cmykResult.cmykString;
                color.cyan = cmykResult.cyan;
                color.magenta = cmykResult.magenta;
                color.yellow = cmykResult.yellow;
                color.black = cmykResult.black;
            } else if (color.name) {
                let result = helpers.nameToRgb(color.name);
                color.red = result.r;
                color.green = result.g;
                color.blue = result.b;
                color.rgb = `${color.red}, ${color.green}, ${color.blue}`;
                color.hex = result.hex;
                let hslResult = helpers.rgbToHsl(color.red, color.green, color.blue);
                color.hsl = hslResult.hslString;
                color.hue = hslResult.hue;
                color.saturation = hslResult.saturation;
                color.lightness = hslResult.lightness;
                let cmykResult = helpers.rgbToCmyk(color.red, color.green, color.blue);
                color.cmyk = cmykResult.cmykString;
                color.cyan = cmykResult.cyan;
                color.magenta = cmykResult.magenta;
                color.yellow = cmykResult.yellow;
                color.black = cmykResult.black;
            } else if (color.hex) {
                let result = helpers.hexToRgb(color.hex);
                color.red = result.r;
                color.green = result.g;
                color.blue = result.b;
                color.rgb = `${color.red}, ${color.green}, ${color.blue}`;
                color.name = helpers.rgbToName(color.red, color.green, color.blue);
                let hslResult = helpers.rgbToHsl(color.red, color.green, color.blue);
                color.hsl = hslResult.hslString;
                color.hue = hslResult.hue;
                color.saturation = hslResult.saturation;
                color.lightness = hslResult.lightness;
                let cmykResult = helpers.rgbToCmyk(color.red, color.green, color.blue);
                color.cmyk = cmykResult.cmykString;
                color.cyan = cmykResult.cyan;
                color.magenta = cmykResult.magenta;
                color.yellow = cmykResult.yellow;
                color.black = cmykResult.black;
            } else if (color.hsl) {
                let result = helpers.hslToRgb(color.hue, color.saturation, color.lightness);
                color.red = result.r;
                color.green = result.g;
                color.blue = result.b;
                color.rgb = `${color.red}, ${color.green}, ${color.blue}`;
                color.hex = helpers.rgbToHex(color.red, color.green, color.blue);
                color.name = helpers.rgbToName(color.red, color.green, color.blue);
                let cmykResult = helpers.rgbToCmyk(color.red, color.green, color.blue);
                color.cmyk = cmykResult.cmykString;
                color.cyan = cmykResult.cyan;
                color.magenta = cmykResult.magenta;
                color.yellow = cmykResult.yellow;
                color.black = cmykResult.black;
            }

            setColor(color);
            setName(color.name);
            setRgb(color.rgb);
            setHex(color.hex);
            setHsl(color.hsl);
            setCmyk(color.cmyk);

            setR(color.red);
            setG(color.green);
            setB(color.blue);
            setH(color.hue);
            setS(color.saturation);
            setL(color.lightness);

            hideError();
        } else {
            showError('Invalid color value');
        }
    };

    function preview(color) {
        let previewWitheText = document.getElementById('previewWitheText');
        let previewTextOnWithe = document.getElementById('previewTextOnWithe');
        let previewBlackText = document.getElementById('previewBlackText');
        let previewTextOnBlack = document.getElementById('previewTextOnBlack');
        previewWitheText.style.backgroundColor = color;
        previewTextOnWithe.style.color = color;
        previewTextOnWithe.style.border = `1px solid ${color}`;
        previewBlackText.style.backgroundColor = color;
        previewTextOnBlack.style.color = color;
    }

    return (
        <section className="explore-page">

            <section className="section-header">
                <h2 >Explore colors</h2>
                <h6> Find the information you need.
                    Convert between hex code, hsl, rgb and cmyk values.</h6>
                <h6 className="diffHeading">Go deep into the color details.</h6>
            </section>

            <section className="explore__rgb">
                <form id="color-form" className="explore__input" onSubmit={submitColorHandler}>
                    <h5 className="explore__info">Type color value</h5>
                    <p className="explore__input--info">Enter name, rgb, hex or hsl value</p>
                    <section className="explore__input--container">
                        <input type="text" name="colorValue" id="colorValue" className="explore__input--input" placeholder="color value" />
                        <input className="button explore__input--submit" type="submit" value="ok" />
                    </section>
                </form>
                <section className="explore__pick-color">
                    <h5 className="explore__info">or pick a color</h5>
                    <canvas id="rgbCanvas" width="270" height="40" onClick={selectColor}></canvas>
                    <div>Quantity of white, black or grey changes the lightness, darkness or saturation of pure colors</div>
                    <canvas id="whiteCanvas" width="270" height="40" onClick={modifyColor}></canvas>
                    <div>White lightens the color. Tints are pastel, pale, cool versions of the hue.</div>
                    <canvas id="blackCanvas" width="270" height="40" onClick={modifyColor}></canvas>
                    <div>Black darkens the color. Shades are deep, warm and more intensive.</div>
                    <canvas id="greyCanvas" width="270" height="40" onClick={modifyColor}></canvas>
                    <div>Grey desaturates the color. Tones are muted and more colorless.</div>
                </section>
            </section>

            <section className="explore__preview">
                <h5 className="explore__info">Color preview</h5>
                <div id="previewWitheText">White text</div>
                <div id="previewTextOnWithe">White background</div>
                <div id="previewBlackText">Black text</div>
                <div id="previewTextOnBlack">Black background</div>
            </section>

            <section className="explore__values">
                <h5 className="explore__info">Color values</h5>
                <li>{name ? name : 'no name'}</li>
                <span>Browsers support 140 color names.</span>
                <li>rgb({rgb})</li>
                <span>RGB value indicates how much of red, green and blue is included.
                    <br /> Each component of the triplet can vary from 0 to 255.</span>
                <li>#{hex}</li>
                <span>A hex triplet is a six-digit, three-byte hexadecimal number, specifying the intensity of red, green and blue.</span>
                <li>hsl({hsl})</li>
                <span>HSL color value is specified with hue, saturation and lightness parameters.
                    {/* <br />Saturation and lightness are a percentage value from 0% to 100%. */}
                </span>
                <li>cmyk({cmyk})</li>
                <span>CMYK refers to the four ink plates used in color printing: cyan, magenta, yellow, and key (black).</span>
            </section>

            <RgbMixer r={r} g={g} b={b} />
            <HslMixer h={h} s={s} l={l} />

            {/* <HueResult color={color} />
            <SaturationResult color={color} />
            <LightnessResult color={color} /> */}

        </section>
    );

};

export default ExploreColor;