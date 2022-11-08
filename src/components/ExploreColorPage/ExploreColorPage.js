import { Routes, Route, NavLink } from 'react-router-dom';

import RgbMixer from './RgbMixer';
import HslMixer from './HslMixer';
import Neutrals from './Neutrals';
import Convertor from './Convertor';
import Temperature from './Temperature';

const ExploreColor = () => {

    // const [r, setR] = useState(148);
    // const [g, setG] = useState(199);
    // const [b, setB] = useState(219);
    // const [h, setH] = useState(197);
    // const [s, setS] = useState(50);
    // const [l, setL] = useState(72);

    return (
        <section className="explore-page">

            <section className="section-header">
                <h2 className="heading-on-two-lines">Explore</h2>
                <h2 className="heading-on-two-lines"> color</h2>
                <h6> Find the information you need.
                    Convert between hex code, hsl, rgb and cmyk values.</h6>
                <h6 className="diffHeading">Go deep into the color details.</h6>
            </section>

            <nav className="explore__navbar">
                {/* <span className="explore__navbar--info"><i>In this section</i></span> */}
                <NavLink to="convertor" className={({ isActive }) => isActive ? 'active' : ''}>Convertor</NavLink>
                <NavLink to="rgb-mixer" className={({ isActive }) => isActive ? 'active' : ''}>RGB mixer</NavLink>
                <NavLink to="hsl-mixer" className={({ isActive }) => isActive ? 'active' : ''}>HSL mixer</NavLink>
                <NavLink to="neutrals" className={({ isActive }) => isActive ? 'active' : ''}>Neutrals</NavLink>
                <NavLink to="temperature" className={({ isActive }) => isActive ? 'active' : ''}>Temperature</NavLink>
            </nav>


            {/* <section className="explore__rgb">
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
                    <div>Grey unsaturates the color. Tones are muted and more colorless.</div>
                </section>
            </section> */}

            {/* <section className="explore__preview">
                <h5 className="explore__info">Color preview</h5>
                <div id="previewWitheText">White text</div>
                <div id="previewTextOnWithe">White background</div>
                <div id="previewBlackText">Black text</div>
                <div id="previewTextOnBlack">Black background</div>
            </section> */}

            {/* <section className="explore__values">
                <h5 className="explore__info">Color values</h5>
                <li>{name ? name : 'no name'}</li>
                <span>Browsers support 140 color names.</span>
                <li>{rgb}</li>
                <span>RGB value indicates how much of red, green and blue is included.
                    <br /> Each component of the triplet can vary from 0 to 255.</span>
                <li>#{hex}</li>
                <span>A hex triplet is a six-digit, three-byte hexadecimal number, specifying the intensity of red, green and blue.</span>
                <li>hsl({hsl})</li>
                <span>HSL color value is specified with hue, saturation and lightness parameters.
                </span>
                <li>cmyk({cmyk})</li>
                <span>CMYK refers to the four ink plates used in color printing: cyan, magenta, yellow, and key (black).</span>
            </section> */}


            {/* <RgbMixer r={r} g={g} b={b} /> */}
            {/* <HslMixer h={h} s={s} l={l} /> */}

            {/* <HueResult color={color} />
            <SaturationResult color={color} />
            <LightnessResult color={color} /> */}

            {/* <Neutrals /> */}

            <Routes>
                <Route path="" element={<Convertor/>} />
                <Route path="convertor" element={<Convertor  />} />
                <Route path="rgb-mixer" element={<RgbMixer  />} />
                <Route path="hsl-mixer" element={<HslMixer  />} />
                <Route path="neutrals" element={<Neutrals />} />
                <Route path="temperature" element={<Temperature />} />
            </Routes>

        </section>
    );

};

export default ExploreColor;