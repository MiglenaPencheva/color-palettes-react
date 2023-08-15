import { Routes, Route, NavLink } from 'react-router-dom';

import PaletteMaker from './PaletteMaker';
import SwatchesCard from './SwatchesCard';

const ColorPickerPage = () => {

    return (
        <section className="picker-page">

            <section className="section-header">
                <h2>Color picker</h2>
                <h6>Upload an image file. Pick the colors you like
                    and compose your desired combination.</h6>
                <h6 className="diffHeading">Be the creator of your unique color palette.</h6>
            </section>

            <nav className="picker__navbar">
                <NavLink to="palette-maker" className={({ isActive }) => isActive ? 'active' : ''}>Palette maker</NavLink>
                <NavLink to="swatches" className={({ isActive }) => isActive ? 'active' : ''}>Swatches card</NavLink>
            </nav>

            <Routes>
                <Route path="" element={<PaletteMaker />} />
                <Route path="palette-maker" element={<PaletteMaker />} />
                <Route path="swatches" element={<SwatchesCard />} />
            </Routes>
        </section>
    );
};

export default ColorPickerPage;