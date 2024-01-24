import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { useLanguageContext } from '../../contexts/LanguageContext';
import * as colorPaletteService from '../../services/colorPaletteService';

import Language from './../Language/Language';
import ColorPaletteList from './ColorPalettesList';
import InitialPalettesList from './InitialPalettesList';
import { initialPalettes } from './helpers';
import Categories from './Categories';
import ColorGroups from './ColorGroups';
import UploadPalette from '../UploadPalette/UploadPalette';

const Gallery = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { language } = useLanguageContext();

    const [colorPalettes, setColorPalettes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        colorPaletteService.getAll()
            .then(result => {
                setColorPalettes(result);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (

        <section id="gallery" className="gallery-page">

            {language.lang === 'en' ? (
                <section className="section-header">
                    <h2 className="heading-on-two-lines">Color palettes </h2>
                    <h2 className="heading-on-two-lines">gallery</h2>
                    <h6> World is full of examples. The magic of light is all around. </h6>
                    <h6 className="diffHeading"> Enjoy the variety of color combinations. </h6>
                </section>
            ) : (
                <section className="section-header">
                    <h2 className="heading-on-two-lines">Галерия </h2>
                    <h2 className="heading-on-two-lines">цветни палитри</h2>
                    <h6> Светът е пълен с примери. Магията на светлината е навсякъде край нас.</h6>
                    <h6 className="diffHeading"> Наслади се на многообразието от съчетания.</h6>
                </section>
            )}

            <nav className="gallery__navbar">
                {/* <span onClick={() => navigate(-1)} id="backArrow" style={{ 'marginRight': 'auto' }}></span> */}
                <Language />

                {language.lang === 'en' ? (
                    <section className="gallery__navbar--links">
                        <NavLink to="all" className={({ isActive }) => isActive ? 'active' : ''}>All images</NavLink>
                        <NavLink to="categories" className={({ isActive }) => isActive ? 'active' : ''}>Categories</NavLink>
                        <NavLink to="groups" className={({ isActive }) => isActive ? 'active' : ''}>Color groups</NavLink>
                        {user._id
                            ? <section className="gallery__nav-user">
                                <NavLink to="favorites" className={({ isActive }) => isActive ? 'active' : ''}>My favorites</NavLink>
                                <NavLink to="mine" className={({ isActive }) => isActive ? 'active' : ''}>My palettes</NavLink>
                                <NavLink to="upload" className={({ isActive }) => isActive ? 'active' : ''}>Upload</NavLink>
                            </section>
                            : <section className="gallery__nav-no-user">
                                <span>My favorites</span>
                                <span>My palettes</span>
                                <span>Upload</span>
                            </section>
                        }
                    </section>
                ) : (
                    <section className="gallery__navbar--links">
                        <NavLink to="all" className={({ isActive }) => isActive ? 'active' : ''}>Всички палитри</NavLink>
                        <NavLink to="categories" className={({ isActive }) => isActive ? 'active' : ''}>Категории</NavLink>
                        <NavLink to="groups" className={({ isActive }) => isActive ? 'active' : ''}>Цветни групи</NavLink>
                        {user._id
                            ? <section className="gallery__nav-user">
                                <NavLink to="favorites" className={({ isActive }) => isActive ? 'active' : ''}>Любими</NavLink>
                                <NavLink to="mine" className={({ isActive }) => isActive ? 'active' : ''}>Мои палитри</NavLink>
                                <NavLink to="upload" className={({ isActive }) => isActive ? 'active' : ''}>Прикачи</NavLink>
                            </section>
                            : <section className="gallery__nav-no-user">
                                <span>Любими</span>
                                <span>Мои палитри</span>
                                <span>Прикачи</span>
                            </section>
                        }
                    </section>
                )}
            </nav>


            {loading
                ? <Routes>
                    <Route path="" element={<InitialPalettesList />} />
                    <Route path="all" element={<InitialPalettesList />} />
                    <Route path="categories" element={<Categories colorPalettes={colorPalettes} title={'Categories'} />} />
                    <Route path="groups" element={<ColorGroups colorPalettes={colorPalettes} title={'Color groups'} />} />
                    <Route path="upload" element={<UploadPalette />} />
                </Routes>
                : <Routes>
                    <Route path="" element={<ColorPaletteList colorPalettes={colorPalettes} title={'All color palettes'} />} />
                    <Route path="all" element={<ColorPaletteList colorPalettes={colorPalettes} title={'All color palettes'} />} />
                    <Route path="categories" element={<Categories colorPalettes={colorPalettes} title={'Categories'} />} />
                    <Route path="groups" element={<ColorGroups colorPalettes={colorPalettes} title={'Color groups'} />} />
                    <Route path="favorites" element={<ColorPaletteList colorPalettes={colorPalettes.filter(x => x.likedBy.includes(user._id))} title={'My favorites'} />} />
                    <Route path="mine" element={<ColorPaletteList colorPalettes={colorPalettes.filter(x => x.creator === user._id)} title={'My color palettes'} />} />
                    <Route path="upload" element={<UploadPalette />} />
                    {/* <Route path="upload" element={user._id ? <UploadPalette /> : navigate('/login')} /> */}
                </Routes>
            }
        </section >

    );
};

export default Gallery;