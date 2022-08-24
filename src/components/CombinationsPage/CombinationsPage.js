import { useState, useEffect } from 'react';

const Combinations = () => {

    const [whiteValue, setWhiteValue] = useState(0);
    const [blackValue, setBlackValue] = useState(0);
    const [greyValue, setGreyValue] = useState(0);

    // const image = document.getElementById('rybImage');
    // const canvas = document.getElementById('rybCanvas');
    // const ctx = canvas.getContext('2d');
    // ctx.drawImage(image, 10, 10);

    // const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const onWhiteChange = (e) => {
        const whiteLayer = document.getElementById('whiteLayer');
        const w = Number(e.target.value) / 100;
        whiteLayer.style['background-color'] = `rgba(255,255,255,${w})`;
        setWhiteValue(e.target.value);
    };
    const onBlackChange = (e) => {
        const wheel = document.getElementById('rybImage');
        const bl = 100 - (Number(e.target.value));
        wheel.style.filter = `brightness(${bl}%)`;
        setBlackValue(e.target.value);
    };
    const onGreyChange = (e) => {
        const wheel = document.getElementById('rybImage');
        wheel.style.filter = `grayscale(${e.target.value}%)`;
        setGreyValue(e.target.value);
    };

    return (
        <section className="ryb">
            <h2 className="ryb__header">Color combinations</h2>
            <h6> Find the colors that go well together.</h6>
            <h6> Combine vibes in nice and accurate color schemes.</h6>
            <h6> Be the designer of your colorful life.</h6>

            <p> The traditional color theory is based on subtractive primary colors and the RYB color model.</p>
            <p> Red, Yellow and Blue are the<strong className="strong"> primary colors</strong>.
                The <strong className="strong"> secondary colors</strong > Orange, Green and Purple are created by mixing primary colors.
                Red-Orange, Yellow-Orange, Yellow-Green, Blue-Green, Blue-Purple, Red-Purple are the <strong className="strong"> tertiary colors</strong>.
                They are made by mixing two secondary colors.
            </p>
            <p>
                RYB color model is used by artists, fashion stylists,
                interior, graphic and web designers.

            </p>

            <section className="ryb__actions">

                <section className="ryb__actions--wheel">
                    <h6>RYB color wheel</h6>
                    <img id="rybImage" src="/images/ryb.png" alt="ryb wheel" width="300" height="300" />
                    <div className="white-layer" id="whiteLayer"></div>
                    <span>Pick a color from the wheel</span>
                </section>

                <section className="ryb__actions--settings">
                    <h6>Settings of colors</h6>
                    <div className="ryb__actions--settings-sliders">
                        <p>Set the quantity of white, black or grey to change the lightness, darkness or saturation of the pure color</p>

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

                        

                        <section className="select-container">
                            <label htmlFor="scheme" className="select-container__label">Color scheme</label>
                            <select id="scheme" name="scheme"
                                // onChange={e => setScheme(e.target.value)}
                                className="select">
                                <option value="Choose scheme" className="default-scheme">Choose scheme</option>
                                <option value="complementary">Complementary</option>
                                <option value="splitComplementary">Split-complementary</option>
                                <option value="monochromatic">Monochromatic</option>
                                <option value="analogous">Analogous</option>
                                <option value="triadic">Triadic</option>
                                <option value="tetradic">Tetradic</option>
                                <option value="square">Square</option>
                            </select>
                        </section>

                    </div>
                </section>
            </section>

        </section>
    );

};

export default Combinations;