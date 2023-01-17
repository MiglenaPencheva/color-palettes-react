import { useState, useEffect } from 'react';

const RgbMixer = () => {
    const [red, setRed] = useState(148);
    const [green, setGreen] = useState(199);
    const [blue, setBlue] = useState(219);

    useEffect((e) => {
        let rgbMix = document.getElementById('rgbMix');
        rgbMix.style['background-color'] = `rgb(${red}, ${green}, ${blue})`;
    }, [red, green, blue]);

    return (
        <section className="explore__rgb-mixer" id="rgbMixer">

            <h5 className="explore__info">RGB mixer</h5>

            <p>The RGB color model is an additive color model in which
                the <b><i>red</i></b>, <b><i>green</i></b>, and <b><i>blue</i></b> are the primary colors of light.
                <br />When added together in different amounts, they reproduce a wide range of colors.
            </p>

            <section className="explore__red-blue-green">
                <span id="red">red: {red}
                    <label htmlFor="redRange" className="slider-label">
                        <input type="range" value={red}
                            onChange={e => setRed(e.target.value)}
                            className="slider" id="redRange" min="0" max="255" />
                    </label>
                </span>
                <span id="green">green: {green}
                    <label htmlFor="greenRange" className="slider-label">
                        <input type="range" value={green}
                            onChange={e => setGreen(e.target.value)}
                            className="slider" id="greenRange" min="0" max="255" />
                    </label>
                </span>
                <span id="blue">blue: {blue}
                    <label htmlFor="blueRange" className="slider-label">
                        <input type="range" value={blue}
                            onChange={e => setBlue(e.target.value)}
                            className="slider" id="blueRange" min="0" max="255" />
                    </label>
                </span>
            </section>

            <span id="rgbMix">{`rgb(${red}, ${green}, ${blue})`}</span>

            <p>The main purpose of the RGB color model is for representation and display of images in digital and electronic systems.</p>

        </section>
    );
};

export default RgbMixer;