import { Routes, Route, NavLink } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/LanguageContext';

import Language from './../Language/Language';
import RybWheel from './RybWheel';
import RybWheelBG from './RybWheelBG';
import Wheels from './Wheels';
import WheelsBG from './WheelsBG';
import Schemes from './Schemes';
import SchemesBG from './SchemesBG';
import Neutrals from './Neutrals';
import NeutralsBG from './NeutralsBG';
import Pastels from './Pastels';
import PastelsBG from './PastelsBG';

const Combinations = () => {
    const { language } = useLanguageContext();

    return (
        <section className="combinations-page" >

            <section className="section-header">
                {language.lang === 'en' ? (
                    <>
                        <h2>Color combinations</h2>
                        <h6> Find the colors that go well together.
                            Combine vibes in nice and accurate color schemes.</h6>
                        <h6 className="diffHeading"> Be the designer of your colorful life.</h6>
                    </>
                ) : (
                    <><h2>Цветови комбинации</h2>
                        <h6> Открий цветовете, които си подхождат.
                            Комбинирай в хармонични и подходящи цветови схеми.</h6>
                        <h6 className="diffHeading"> Сътвори своя цветен свят.</h6>
                    </>
                )}
            </section>

            <nav className="combinations__navbar">
                <Language />

                <section className="combinations__navbar--links">
                    {language.lang === 'en' ? (
                        <>
                            <NavLink to="color-wheel" className={({ isActive }) => isActive ? 'active' : ''}>Color Wheel</NavLink>
                            <NavLink to="wheels" className={({ isActive }) => isActive ? 'active' : ''}>Wheels</NavLink>
                            <NavLink to="schemes" className={({ isActive }) => isActive ? 'active' : ''}>Schemes</NavLink>
                            <NavLink to="neutrals" className={({ isActive }) => isActive ? 'active' : ''}>Neutrals</NavLink>
                            <NavLink to="pastels" className={({ isActive }) => isActive ? 'active' : ''}>Pastels</NavLink>
                        </>
                    ) : (
                        <><NavLink to="color-wheel" className={({ isActive }) => isActive ? 'active' : ''}>Цветно колело</NavLink>
                            <NavLink to="wheels" className={({ isActive }) => isActive ? 'active' : ''}>Колела</NavLink>
                            <NavLink to="schemes" className={({ isActive }) => isActive ? 'active' : ''}>Схеми</NavLink>
                            <NavLink to="neutrals" className={({ isActive }) => isActive ? 'active' : ''}>Неутрали</NavLink>
                            <NavLink to="pastels" className={({ isActive }) => isActive ? 'active' : ''}>Пастели</NavLink>
                        </>
                    )}
                </section>
            </nav>

            <Routes>
                {/* {language.lang === 'en'
                    ? <Route path="" element={<RybWheel />} />
                    : <Route path="" element={<RybWheelBG />} />
                }
                {language.lang === 'en'
                    ? <Route path="color-wheel" element={<RybWheel />} />
                    : <Route path="color-wheel" element={<RybWheelBG />} />
                }
                {language.lang === 'en'
                    ? <Route path="wheels" element={<Wheels />} />
                    : <Route path="wheels" element={<WheelsBG />} />
                }
                {language.lang === 'en'
                    ? <Route path="schemes" element={<Schemes />} />
                    : <Route path="schemes" element={<SchemesBG />} />
                }
                {language.lang === 'en'
                    ? <Route path="neutrals" element={<Neutrals />} />
                    : <Route path="neutrals" element={<NeutralsBG />} />
                }
                {language.lang === 'en'
                    ? <Route path="pastels" element={<Pastels />} />
                    : <Route path="pastels" element={<PastelsBG />} />
                } */}

                {language.lang === 'en' ? (
                    <>
                        <Route path="" element={<RybWheel />} />
                        <Route path="color-wheel" element={<RybWheel />} />
                        <Route path="wheels" element={<Wheels />} />
                        <Route path="schemes" element={<Schemes />} />
                        <Route path="neutrals" element={<Neutrals />} />
                        <Route path="pastels" element={<Pastels />} />
                    </>
                ) : (
                    <>
                        <Route path="" element={<RybWheelBG />} />
                        <Route path="color-wheel" element={<RybWheelBG />} />
                        <Route path="wheels" element={<WheelsBG />} />
                        <Route path="schemes" element={<SchemesBG />} />
                        <Route path="neutrals" element={<NeutralsBG />} />
                        <Route path="pastels" element={<PastelsBG />} />
                    </>
                )}

            </Routes>



        </section>
    );
};

export default Combinations;