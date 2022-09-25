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
        const schemeCanvas = document.getElementById('schemeCanvas');
        document.getElementById('resultSection').style.display = 'flex';
        // const advantagesSection = document.getElementById('advantagesSection');
        // advantagesSection.style.display = 'block';

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
            for (let color of colorsArr) {
                let li = document.createElement('li');
                li.className = 'ryb__result--li';
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

    const resetWheel = (e) => {
        const wheel = document.getElementById('rybCanvas');
        wheel.style.transform = 'rotate(0deg)';
        setMainColor('yellow');
        resetScheme();
        const advantagesSection = document.getElementById('advantagesSection');
        advantagesSection.style.display = 'none';
    };
    const resetScheme = (e) => {
        document.getElementById('scheme').value = 'Choose scheme';
        const schemeCanvas = document.getElementById('schemeCanvas');
        const schemeCanvasCtx = schemeCanvas.getContext('2d');
        schemeCanvasCtx.clearRect(10, 10, 140, 140);
        document.getElementById('resultSection').style.display = 'none';
        document.getElementById('pScheme').style.display = 'block';

    };

    const exportScheme = async (e) => {
        const element = document.getElementById('resultColors');
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
                <p id="pScheme" className="ryb__scheme-p">
                    When arranged in appropriate schemes,
                    colors look appealing together, create stylish and aesthetic feeling.
                    <span onClick={showSchemesInfo}> Reed more...</span>
                </p>

                <section id="resultSection" className="ryb__result">
                    <div id="resultColorsContainer" className="ryb__result--colors">
                        <ul id="resultColors" className="ryb__result--ul">
                        </ul>
                        <div id="whiteLayer"></div>
                    </div>
                    <button className="button" onClick={exportScheme}>Export scheme</button>
                    {/* <div onClick={resetScheme} className="reset">Reset scheme</div> */}
                    <link rel="stylesheet" href="" value="reed more..." />
                </section>

                <WhiteBlackGreySettings />

            </section>

            <section id="advantagesSection" className="ryb__advantages">
                <h6>Scheme advantages</h6>
                {info}
            </section>
 
            <div id="reedMore" onClick={showSchemesInfo}>Reed more about color schemes...</div>
            
            <section id="infoSection" className="ryb__scheme-info-section">
                <h6>Color schemes details</h6>
                <article><b><i>Color wheel</i></b>...</article>
                <article><b><i>Color scheme </i></b> is used to create style and appeal. Colors and color combinations cause psychological effect, evoke certain feelings and emotions. They are widely used in various artistic, styling and design contexts, marketing and branding. Basic combinations join two colors that look appealing together. More advanced schemes combine several related colors for adding contrast and accents. Color schemes are logical combinations of colors on the color wheel. Different choices of a color harmony gives a variety in terms of contrast, dynamics, elegance and influence.</article>
                <article><b><i>Complementary scheme</i></b> takes colors from opposite side of the color wheel. This is the most contrasting of all color schemes. It attracts the most attention. One of the hues is the dominant color of the pair. The other one enhances or emphasizes the primary one and is used for accents. Both warm and cold colors take part in this most dynamic harmony. The design looks warm or cold according to the chosen dominant color. Attractive and hard for balancing, complementary scheme gives sharp contrast, brighter and prominent vision.</article>
                <article><b><i>Split-complementary scheme</i></b> is a variation of complementary scheme. Takes a base color and the two colors on both sides of the opposite one on the color wheel. It has the same sharp visual contrast and still gives the balance between warm or cold color temperatures. Cold base color should stand opposite of two variations of warm hues, for example. 3-color harmony offers less pressure, less tension and is not so vibrant. It is hard to harmonize and difficult for balancing. But still gives the best contrast, beautiful nuances and a pleasant feeling.</article>
                <article><b><i>Monochromatic scheme</i></b> uses a single base color and various tints, tones and shades of the same hue, that are derived by adding white, grey or black. It is easy to create and easy to apply and perceive. This color scheme gives a soft and pleasant feeling. The lack of contrast makes more subtle and peaceful vision. Dynamics can be achieved combining dark shades and light tints or even black and white. Using one base color with its variations gives bold and dramatic effect, as well as stylish and elegant look.</article>
                <article><b><i>Analogous scheme</i></b> uses colors that are next to each other on the color wheel. It is easy to create and gives a pleasant and elegant appearance. One dominant color and the others as supporting or accents make this blend harmonious and calming. The lack of contrast keeps it less vibrant. This kind of combination occurs in nature and colors never clash one another. Neighboring hues fits better if they are either in the warm or the cold gamma.</article>
                <article><b><i>Triadic scheme</i></b> ...</article>
                <article><b><i>Tetradic scheme</i></b> ...</article>
                <article><b><i>Square scheme</i></b> ...</article>
                <article><b><i>Other schemes</i></b> are used in maps, charts, data visualization and data science. The color is used as a graphical tool due to its aesthetic appeal and intuitive contrast. The richness and variety of meaning can represent quantitative variation and different kinds of ranges. 
                    <br /><b><i>Sequential schemes</i></b> are use to order data from low to high. Commonly its a monochrome scheme and the darkest shade intuitively represents the largest value. 
                    <br /><b><i>Divergent (diverging) schemes</i></b> uses two sequential schemes and share a common (usually the lightest) color in the center as the darkest stands at both of the ends. This combination emphasizes the extreme values at the ends and the mid-range critical values. Usually this schemes are asymetrical when there is a middle value.</article>
            </section>

        </section>
    );

};

export default Combinations;