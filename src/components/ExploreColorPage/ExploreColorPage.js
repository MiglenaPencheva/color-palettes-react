import { useState, useEffect } from 'react';
import * as helpers from './exploreHelpers';
import { hideError, showError } from '../../helpers/notifications';

const ExploreColor = () => {
    const [name, setName] = useState('no name');
    const [rgb, setRgb] = useState('');
    const [hex, setHex] = useState('');
    const [hsl, setHsl] = useState('');
    const [cmyk, setCmyk] = useState('');
    const [color, setColor] = useState({});

    const submitColorHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let colorValue = formData.get('colorValue');
        preview(colorValue);

        const color = helpers.getColorObject(colorValue);

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
        } else if (color.cmyk) {
            let result = helpers.cmykToRgb(color.cyan, color.magenta, color.yellow, color.black);
            color.red = result.r;
            color.green = result.g;
            color.blue = result.b;
            color.rgb = `${color.red}, ${color.green}, ${color.blue}`;
            color.hex = helpers.rgbToHex(color.red, color.green, color.blue);
            color.name = helpers.rgbToName(color.red, color.green, color.blue);
            let hslResult = helpers.rgbToHsl(color.red, color.green, color.blue);
            color.hsl = hslResult.hslString;
            color.hue = hslResult.hue;
            color.saturation = hslResult.saturation;
            color.lightness = hslResult.lightness;
        }

        console.log(color);

        setColor(color);
        setName(color.name);
        setRgb(color.rgb);
        setHex(color.hex);
        setHsl(color.hsl);
        setCmyk(color.cmyk);
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

            <section >
                {/* <div className="explore__rgb-wheel"></div> */}
            </section>

            <section className="section-header">
                <h2 >Explore colors</h2>
                <h6> Find the information you need.
                    Convert between hex code, hsl, rgb and cmyk values.</h6>
                <h6 className="diffHeading">Go deep into the color details.</h6>
            </section>

            <form id="color-form" className="explore__input" onSubmit={submitColorHandler}>
                <p className="explore__info">Type color value</p>
                <p className="explore__input--info">Enter hex, rgb, hsl or name</p>
                <section className="explore__input--container">
                    <input type="text" name="colorValue" id="colorValue" className="explore__input--input" placeholder="color value" />
                    <input className="button explore__input--submit" type="submit" value="ok" />
                </section>
            </form>

            <section className="explore__preview">
                <p className="explore__info">Color preview</p>
                <div id="previewWitheText">White text</div>
                <div id="previewTextOnWithe">White background</div>
                <div id="previewBlackText">Black text</div>
                <div id="previewTextOnBlack">Black background</div>
            </section>

            <section className="explore__values">
                <p className="explore__info">Color values</p>
                <li>{name ? name : 'no name'}</li>
                <span>Browsers support 140 color names.</span>
                <li>rgb({rgb})</li>
                <span>RGB value indicates how much of red, green and blue is included. Each component of the triplet can vary from 0 to 255.</span>
                <li>#{hex}</li>
                <span>A hex triplet is a six-digit, three-byte hexadecimal number, specifying the intensity of red, green and blue.</span>
                <li>hsl({hsl})</li>
                <span>HSL color value is specified with hue, saturation and lightness parameters. Hue is a degree on the color wheel from 0 to 360. Saturation and lightness are a percentage value from 0% to 100%.</span>
                <li>cmyk({cmyk})</li>
                <span>CMYK refers to the four ink plates used in some color printing: cyan, magenta, yellow, and key (black).</span>
            </section>

        </section>
    );

};

export default ExploreColor;