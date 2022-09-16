import { useState, useEffect } from 'react';

const WhiteBlackGreySettings = () => {
    const [whiteValue, setWhiteValue] = useState(0);
    const [blackValue, setBlackValue] = useState(0);
    const [greyValue, setGreyValue] = useState(0);
    const [resultBlack, setResultBlack] = useState(0);

    const onWhiteChange = (e) => {
        resetBlack();
        resetGrey();
        const whiteLayer = document.getElementById('whiteLayer');
        whiteLayer.style.display = 'block';
        const w = Number(e.target.value) / 100;
        whiteLayer.style['background-color'] = `rgba(255,255,255,${w})`;
        setWhiteValue(e.target.value);
    };
    const onBlackChange = (e) => {
        resetWhite();
        setGreyValue(0);
        const result = document.getElementById('resultColors');
        const bl = 100 - (Number(e.target.value));
        // for (const li of result.children) {
        result.style.filter = `brightness(${bl}%)`;
        // }
        setBlackValue(e.target.value);
    };
    const onGreyChange = (e) => {
        resetWhite();
        setBlackValue(0);
        const result = document.getElementById('resultColors');
        result.style.filter = `grayscale(${e.target.value}%)`;
        setGreyValue(e.target.value);
    };
    const resetWhite = (e) => {
        const whiteLayer = document.getElementById('whiteLayer');
        whiteLayer.style.display = 'none';
        whiteLayer.style['background-color'] = 'rgba(255,255,255,0)';
        setWhiteValue(0);
    };
    const resetBlack = (e) => {
        const result = document.getElementById('resultColors');
        result.style.filter = 'brightness(100)';
        setBlackValue(0);
    };
    const resetGrey = (e) => {
        const result = document.getElementById('resultColors');
        result.style.filter = 'grayscale(0)';
        setGreyValue(0);
    };
    const resetSettings = (e) => {
        resetWhite();
        resetBlack();
        resetGrey();
    };

    return (
        <section className="ryb__actions--settings">
            <section id="slidersSection" className="ryb__actions--settings-sliders">
                <p>Adjust the quantity of white, black or grey to change
                    the lightness, darkness or saturation of pure colors</p>

                <section>
                    <label htmlFor="whiteRange" className="slider-label">
                        White
                        <input type="range" className="slider" id="whiteRange" min="0" max="100"
                            onChange={onWhiteChange} value={whiteValue} />
                        <span>{whiteValue}%</span>
                    </label>
                    <div>Add white to lighten the color. Tints are pastel, pale, cool versions of the hue.</div>
                {/* </section>
                <section> */}
                    <label htmlFor="blackRange" className="slider-label">
                        Black
                        <input type="range" className="slider" id="blackRange" min="0" max="100"
                            onChange={onBlackChange} value={blackValue} />
                        <span>{blackValue}%</span>
                    </label>
                    <div>Add black to darken the color. Shades are deep, warm and more intensive.</div>
                {/* </section>
                <section> */}
                    <label htmlFor="greyRange" className="slider-label">
                        Grey
                        <input type="range" className="slider" id="greyRange" min="0" max="100"
                            onChange={onGreyChange} value={greyValue} />
                        <span>{greyValue}%</span>
                    </label>
                    <div>Add grey to desaturate the color. Tones are muted and more colorless.</div>
                </section>
            </section>

            <div onClick={resetSettings} className="reset">Reset settings</div>
            {/* <button onClick={resetSettings} className="button">reset settings</button> */}
        </section>
    );

};

export default WhiteBlackGreySettings;
