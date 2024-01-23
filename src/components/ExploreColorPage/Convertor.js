import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/LanguageContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import * as helpers from '../ExploreColorPage/exploreHelpers';
import { getPixel } from '../../helpers/getPixel';
import { hideError, showError } from '../../helpers/notifications';


const initialHexState = {
    hex: '#94c7db',
    rgb: 'rgb(148, 199, 219)',
};

const Convertor = () => {
    const { language } = useLanguageContext();

    const [selectedColor, setSelectedColor] = useState('#94c7db');
    const [currentColor, setCurrentColor] = useState('#94c7db');
    const [color, setColor] = useState({});
    const [name, setName] = useState('no name');
    const [rgb, setRgb] = useState('');
    const [hex, setHex] = useState('');
    const [hsl, setHsl] = useState('');
    const [cmyk, setCmyk] = useState('');
    const [hexToExplore, setHexToExplore] = useLocalStorage('hex', initialHexState);


    // Load gradient rgb canvas
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

    // Load white, black and grey canvases
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

    // Load color if hexToExplore from Combinations page or Color-picker page
    useEffect(() => {
        setSelectedColor(hexToExplore.rgb);
        setCurrentColor(hexToExplore.rgb);
        let color = helpers.fillColorObject(hexToExplore.rgb);
        setName(color.name);
        setRgb(color.rgb);
        setHex(color.hex);
        setHsl(color.hsl);
        setCmyk(color.cmyk);
        preview(hexToExplore.rgb);
    }, [hexToExplore]);

    // Load color from input value
    const submitColorHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let colorValue = formData.get('colorValue');

        const color = helpers.getColorObject(colorValue);

        if (colorValue === '') {
            return;
        } else if (color.name || color.rgb || color.hex || color.hsl) {
            setSelectedColor(colorValue);
            preview(colorValue);
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
                color.rgb = `rgb(${color.red}, ${color.green}, ${color.blue})`;
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
                color.rgb = `rgb(${color.red}, ${color.green}, ${color.blue})`;
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
                color.rgb = `rgb(${color.red}, ${color.green}, ${color.blue})`;
                color.hex = helpers.rgbToHex(color.red, color.green, color.blue);
                color.name = helpers.rgbToName(color.red, color.green, color.blue);
                let cmykResult = helpers.rgbToCmyk(color.red, color.green, color.blue);
                color.cmyk = cmykResult.cmykString;
                color.cyan = cmykResult.cyan;
                color.magenta = cmykResult.magenta;
                color.yellow = cmykResult.yellow;
                color.black = cmykResult.black;
                color.saturation *= 100;
                color.lightness *= 100;
            }

            setColor(color);
            setName(color.name);
            setRgb(color.rgb);
            setHex(color.hex);
            setHsl(color.hsl);
            setCmyk(color.cmyk);
            // setR(color.red);
            // setG(color.green);
            // setB(color.blue);
            // setH(color.hue);
            // setS(color.saturation);
            // setL(color.lightness);

            hideError();
        } else {
            showError('Invalid color value');
        }
    };

    // Load color, picked from gradient rgb canvas
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
        setColor(color);
        setName(color.name);
        setRgb(color.rgb);
        setHex(color.hex);
        setHsl(color.hsl);
        setCmyk(color.cmyk);
        preview(rgb);
    };

    const selectColor = (e) => {
        document.getElementById('colorValue').value = '';
        let rgb = getRgbFromSelectedColor(e);
        setSelectedColor(rgb);
        fillColorValues(rgb);
    };
    const modifyColor = (e) => {
        let rgb = getRgbFromSelectedColor(e);
        setCurrentColor(rgb);
        fillColorValues(rgb);
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
        <section className="convertor">
            {language.lang === 'en' ? (
                <>
                    <section className="convertor__input-section">
                        <form id="color-form" className="convertor__input--form" onSubmit={submitColorHandler}>
                            <h5 className="explore__info">Type color value</h5>
                            <p className="convertor__input--info">Enter name, rgb, hex or hsl value</p>
                            <section className="convertor__input--container">
                                <input type="text" name="colorValue" id="colorValue" className="convertor__input--input" placeholder="color value" />
                                <input className="button convertor__input--submit" type="submit" value="ok" />
                            </section>
                        </form>
                        <section className="convertor__pick-color">
                            <h5 className="explore__info">or pick a color</h5>
                            <canvas id="rgbCanvas" width="270" height="40" onClick={selectColor}></canvas>
                            <div>Quantity of white, black or grey changes the lightness, darkness or saturation of pure colors.</div>
                            <canvas id="whiteCanvas" width="270" height="40" onClick={modifyColor}></canvas>
                            <div>White lightens the color. Tints are <Link to="/combinations/pastels" target="_blank"><i>pastel</i></Link>, pale, cool versions of the hue.</div>
                            <canvas id="blackCanvas" width="270" height="40" onClick={modifyColor}></canvas>
                            <div>Black darkens the color. Shades are deep, warm and more intensive.</div>
                            <canvas id="greyCanvas" width="270" height="40" onClick={modifyColor}></canvas>
                            <div>Grey unsaturates the color. Tones are muted and more colorless.</div>
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
                        <span>Browsers support 140 <Link target="_blank" to="/color-explore/color-names"><i>color names.</i></Link></span>
                        <li>{rgb}</li>
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
                </>
            ) : (
                <>
                    <section className="convertor__input-section">
                        <form id="color-form" className="convertor__input--form" onSubmit={submitColorHandler}>
                            <h5 className="explore__info">Въведи стойност</h5>
                            <p className="convertor__input--info">Въведи име, rgb, hex или hsl стойност</p>
                            <section className="convertor__input--container">
                                <input type="text" name="colorValue" id="colorValue" className="convertor__input--input" placeholder="стойност" />
                                <input className="button convertor__input--submit" type="submit" value="ок" />
                            </section>
                        </form>
                        <section className="convertor__pick-color">
                            <h5 className="explore__info">или избери цвят</h5>
                            <canvas id="rgbCanvas" width="270" height="40" onClick={selectColor}></canvas>
                            <div>Количеството бяло, черно или сиво променя яркостта или наситеността на чистите цветове.</div>
                            <canvas id="whiteCanvas" width="270" height="40" onClick={modifyColor}></canvas>
                            <div>Бялото изсветлява цвета. Светлите нюанси са <Link to="/combinations/pastels" target="_blank"><i>пастелни</i></Link>, бледи, студени оттенъци на чистия цвят.</div>
                            <canvas id="blackCanvas" width="270" height="40" onClick={modifyColor}></canvas>
                            <div>Черното потъмнява цвета. Сенките са дълбоки, топли и по-интензивни оттенъци.</div>
                            <canvas id="greyCanvas" width="270" height="40" onClick={modifyColor}></canvas>
                            <div>Сивото обезцветява. Тоновете са приглушени и слабо наситени оттенъци.</div>
                        </section>
                    </section>

                    <section className="explore__preview">
                        <h5 className="explore__info">Преглед на цвета</h5>
                        <div id="previewWitheText">Бял текст</div>
                        <div id="previewTextOnWithe">Бял фон</div>
                        <div id="previewBlackText">Черен текст</div>
                        <div id="previewTextOnBlack">Черен фон</div>
                    </section>

                    <section className="explore__values">
                        <h5 className="explore__info">Цветни стойности</h5>
                        <li>{name ? name : 'няма име'}</li>
                        <span>Браузърите поддържат 140 <Link target="_blank" to="/color-explore/color-names"><i>стандартни имена на цветовете.</i></Link></span>
                        <li>{rgb}</li>
                        <span>RGB стойностите показват какво количество червено, зелено и синьо се съдържа в цвета. 
                            Всеки един от тройката цветове може да е от 0 до 255.</span>
                        <li>#{hex}</li>
                        <span>Хекс кодът е шест-цифрено шестнадесетично число и определя интензитета на червеното, зеленото и синьото.</span>
                        <li>hsl({hsl})</li>
                        <span>HSL стойността се представя с параметрите цвят, наситеност и яркост.</span>
                        <li>cmyk({cmyk})</li>
                        <span>CMYK стойността дава количеството на четирите мастила, използвани в цветния печат: циан, маджента, жълто и черно.</span>
                    </section>
                </>
            )}
        </section>
    );
};

export default Convertor;