import { Routes, Route, NavLink } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/LanguageContext';

import Language from './../Language/Language';
import RgbMixer from './RgbMixer';
import HslMixer from './HslMixer';
import Convertor from './Convertor';
import ColorNames from './ColorNames';
import ExploreGroups from './ExploreGroups';

const ExploreColor = () => {
    const { language } = useLanguageContext();

    return (
        <section className="explore-page">
            {language.lang === 'en' ? (
                <>
                    <section className="section-header">
                        <h2 className="heading-on-two-lines">Explore</h2>
                        <h2 className="heading-on-two-lines"> color</h2>
                        <h6> Find the information you need.
                            Convert between hex code, hsl, rgb and cmyk values.</h6>
                        <h6 className="diffHeading">Go deep into the color details.</h6>
                    </section>

                    <nav className="explore__navbar">
                        <Language />
                        <section className="explore__navbar--links">
                            <NavLink to="convertor" className={({ isActive }) => isActive ? 'active' : ''}>Convertor</NavLink>
                            <NavLink to="rgb-mixer" className={({ isActive }) => isActive ? 'active' : ''}>RGB mixer</NavLink>
                            <NavLink to="hsl-mixer" className={({ isActive }) => isActive ? 'active' : ''}>HSL mixer</NavLink>
                            <NavLink to="color-names" className={({ isActive }) => isActive ? 'active' : ''}>Color names</NavLink>
                            <NavLink to="groups" className={({ isActive }) => isActive ? 'active' : ''}>Color groups</NavLink>
                        </section>
                    </nav>
                </>
            ) : (
                <>
                    <section className="section-header">
                        <h2 className="heading-on-two-lines">Цветът </h2>
                        <h2 className="heading-on-two-lines">в детайли</h2>
                        <h6> Открий подробна информация.
                            Конвертирай в различни цветови стойности.</h6>
                        <h6 className="diffHeading">Опознай цвета в дълбочина.</h6>
                    </section>

                    <nav className="explore__navbar">
                        <Language />
                        <section className="explore__navbar--links">
                            <NavLink to="convertor" className={({ isActive }) => isActive ? 'active' : ''}>Конвертор</NavLink>
                            <NavLink to="rgb-mixer" className={({ isActive }) => isActive ? 'active' : ''}>RGB модел</NavLink>
                            <NavLink to="hsl-mixer" className={({ isActive }) => isActive ? 'active' : ''}>HSL модел</NavLink>
                            <NavLink to="color-names" className={({ isActive }) => isActive ? 'active' : ''}>Имена на цветовете</NavLink>
                            <NavLink to="groups" className={({ isActive }) => isActive ? 'active' : ''}>Цветни групи</NavLink>
                        </section>
                    </nav>
                </>
            )}

            <Routes>
                <Route path="" element={<Convertor />} />
                <Route path="convertor" element={<Convertor />} />
                <Route path="rgb-mixer" element={<RgbMixer />} />
                <Route path="hsl-mixer" element={<HslMixer />} />
                <Route path="color-names" element={<ColorNames />} />
                <Route path="groups" element={<ExploreGroups />} />
            </Routes>

        </section>
    );

};

export default ExploreColor;