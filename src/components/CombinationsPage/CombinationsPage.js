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
                    <img id="rybImage" src="/images/wheel.png" alt="ryb wheel" width="300" height="300" />
                    <span>Pick a color from the wheel</span>
                </section>

                <section className="ryb__actions--settings">
                    <h6>Settings of colors</h6>
                    <div className="ryb__actions--settings-sliders">
                        <p>Set the quantity of white, black or grey to change the lightness, darkness or saturation of the pure color</p>

                        <label htmlFor="whiteRange">
                            White
                            <input type="range" className="slider" id="whiteRange" min="0" max="100"
                                onChange={(e) => setWhiteValue(e.target.value)} value={whiteValue} />
                            <span>{whiteValue}%</span>
                        </label>
                        <div>Add white to lighten the color.
                            <br /> Tints are pastel, pale, cool versions of the hue.</div>

                        <label htmlFor="blackRange">
                            Black
                            <input type="range" className="slider" id="blackRange" min="0" max="100"
                                onChange={(e) => setBlackValue(e.target.value)} value={blackValue} />
                            <span>{blackValue}%</span>
                        </label>
                        <div>Add black to darken the color.
                            <br />Shades are deep, warm and more intensive.</div>

                        <label htmlFor="greyRange">
                            Grey
                            <input type="range" className="slider" id="greyRange" min="0" max="100"
                                onChange={(e) => setGreyValue(e.target.value)} value={greyValue} />
                            <span>{greyValue}%</span>
                        </label>
                        <div>Add grey to desaturate the color.
                            <br />Tones are muted and more colorless.</div>

                    </div>
                </section>
            </section>

        </section>
    );

};

export default Combinations;