import { Routes, Route, NavLink } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/LanguageContext';

import Language from './../Language/Language';

import PaletteMaker from './PaletteMaker';
import SwatchesCard from './SwatchesCard';

const ColorPickerPage = () => {
    const { language } = useLanguageContext();

    return (
        <section className="picker-page">
            {language.lang === 'en' ? (
                <section className="section-header">
                    <h2>Color picker</h2>
                    <h6>Upload an image file. Pick the colors you like
                        and compose your desired combination.</h6>
                    <h6 className="diffHeading">Be the creator of your unique color palette.</h6>
                </section>
            ) : (
                <section className="section-header">
                    <h2>Избери цветовете</h2>
                    <h6>Подбери цветовете, които те привличат. Съчетавай по свое желание.</h6>
                    <h6 className="diffHeading">Създай неповторимата си цветна палитра.</h6>
                </section>
            )}

            <nav className="picker__navbar">
                <Language />
                <section className="picker__navbar--links">
                    {language.lang === 'en' ? (
                        <>
                            <NavLink to="palette-maker" className={({ isActive }) => isActive ? 'active' : ''}>Palette maker</NavLink>
                            <NavLink to="swatches" className={({ isActive }) => isActive ? 'active' : ''}>Swatches card</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="palette-maker" className={({ isActive }) => isActive ? 'active' : ''}>Създай палитра</NavLink>
                            <NavLink to="swatches" className={({ isActive }) => isActive ? 'active' : ''}>Цветна карта</NavLink>
                        </>
                    )}
                </section>
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