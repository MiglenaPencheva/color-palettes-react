import { useState, useEffect } from 'react';

const HslMixer = ({ h, s, l }) => {
    const [hue, setHue] = useState(197);
    const [saturation, setSaturation] = useState(50);
    const [lightness, setLightness] = useState(72);

    useEffect((e) => {
        let hslMix = document.getElementById('hslMix');
        hslMix.style['background-color'] = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }, [hue, saturation, lightness]);

    useEffect(() => {
        setHue(h);
        setSaturation(s);
        setLightness(l);
    }, [h, s, l]);

    return (
        <section className="explore__rgb-mixer">
            <h5 className="explore__info">HSL mixer</h5>
            <p className="explore__rgb-mixer--info">In HSL representation model hue is a degree on the color wheel from 0 to 360. 
                <br /> Saturation 0% means a shade of gray, tones are unsaturated hues with some quantity of grey, while 100% is the pure color.
                <br /> Adding black makes hues darker, 0% lightness means black. 
                Tints (pastels) are lighter versions of the color, 100% lightness means white.</p>
            <section className="explore__red-blue-green">
                <span id="hue">hue: {hue}
                    <label htmlFor="hueRange" className="slider-label">
                        <input type="range" value={hue}
                            onChange={e => setHue(e.target.value)}
                            className="slider" id="hueRange" min="0" max="300" />
                    </label>
                </span>
                <span id="saturation">saturation: {saturation}%
                    <label htmlFor="saturationRange" className="slider-label">
                        <input type="range" value={saturation}
                            onChange={e => setSaturation(e.target.value)}
                            className="slider" id="saturationRange" min="0" max="100" />
                    </label>
                </span>
                <span id="lightness">lightness: {lightness}%
                    <label htmlFor="lightnessRange" className="slider-label">
                        <input type="range" value={lightness}
                            onChange={e => setLightness(e.target.value)}
                            className="slider" id="lightnessRange" min="0" max="100" />
                    </label>
                </span>
            </section>
            <span id="hslMix">{`hsl(${hue}, ${saturation}%, ${lightness}%)`}</span>
        </section>
    );
};

export default HslMixer;