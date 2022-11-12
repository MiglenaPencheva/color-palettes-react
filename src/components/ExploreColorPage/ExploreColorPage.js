import { Routes, Route, NavLink } from 'react-router-dom';

import RgbMixer from './RgbMixer';
import HslMixer from './HslMixer';
import Neutrals from './Neutrals';
import Convertor from './Convertor';
import Temperature from './Temperature';
import ColorNames from './ColorNames';

const ExploreColor = () => {

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
                <NavLink to="convertor" className={({ isActive }) => isActive ? 'active' : ''}>Convertor</NavLink>
                <NavLink to="rgb-mixer" className={({ isActive }) => isActive ? 'active' : ''}>RGB mixer</NavLink>
                <NavLink to="hsl-mixer" className={({ isActive }) => isActive ? 'active' : ''}>HSL mixer</NavLink>
                <NavLink to="color-names" className={({ isActive }) => isActive ? 'active' : ''}>Color names</NavLink>
                <NavLink to="neutrals" className={({ isActive }) => isActive ? 'active' : ''}>Neutrals</NavLink>
                <NavLink to="temperature" className={({ isActive }) => isActive ? 'active' : ''}>Temperature</NavLink>
            </nav>

            <Routes>
                <Route path="" element={<Convertor/>} />
                <Route path="convertor" element={<Convertor  />} />
                <Route path="rgb-mixer" element={<RgbMixer  />} />
                <Route path="hsl-mixer" element={<HslMixer  />} />
                <Route path="color-names" element={<ColorNames  />} />
                <Route path="neutrals" element={<Neutrals />} />
                <Route path="temperature" element={<Temperature />} />
            </Routes>

        </section>
    );

};

export default ExploreColor;