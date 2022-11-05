import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import * as colorPaletteService from '../../services/colorPaletteService';

import ColorPaletteList from './ColorPalettesList';
import Categories from './Categories';
import ColorGroups from './ColorGroups';
import UploadPalette from '../UploadPalette/UploadPalette';

const Gallery = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const [colorPalettes, setColorPalettes] = useState([]);

    useEffect(() => {
        colorPaletteService.getAll()
            .then(result => {
                setColorPalettes(result);
            });
    }, []);

    return (

        <section id="gallery" className="gallery-page">

            <section className="section-header">
                <h2 className="heading-on-two-lines">Color</h2>
                <h2 className="heading-on-two-lines"> palettes</h2>
                <h2 className="heading-on-two-lines"> gallery </h2>
                <h6> World is full of examples. The magic of light is all around. </h6>
                <h6 className="diffHeading"> Enjoy the variety of color combinations. </h6>
            </section>

            <section className="gallery__search-panel">
                <div className="gallery__search">
                    <input className="gallery__search--input" type="text" name="" placeholder="search..." />
                    <button className="gallery__search--button" href="#">
                        <span className="gallery__search--circle"></span>
                        <span className="gallery__search--rectangle"></span>
                    </button>
                </div>

                <section className="gallery__search--sort">
                    <label htmlFor="type">Sort by</label>
                    <select id="type" name="sort" className="">
                        <option value="fresh">Fresh content</option>
                        <option value="liked">Most liked</option>
                    </select>
                </section>
            </section>

            <section className="gallery__filters">
                <nav className="gallery__filters-left">
                    <NavLink to="all" className={({ isActive }) => isActive ? 'active' : ''}>All images</NavLink>
                    <NavLink to="categories" className={({ isActive }) => isActive ? 'active' : ''}>Categories</NavLink>
                    <NavLink to="groups" className={({ isActive }) => isActive ? 'active' : ''}>Color groups</NavLink>
                </nav>
                <nav className="gallery__filters-right" >
                    <NavLink to="favorites" className={({ isActive }) => isActive ? 'active' : ''}>My favorites</NavLink>
                    <NavLink to="mine" className={({ isActive }) => isActive ? 'active' : ''}>My palettes</NavLink>
                    <NavLink to="upload" className={({ isActive }) => isActive ? 'active' : ''}>Upload</NavLink>
                </nav>
            </section>

            <Routes>
                <Route path="" element={<ColorPaletteList colorPalettes={colorPalettes} title={'All color palettes'}/>} />
                <Route path="all" element={<ColorPaletteList colorPalettes={colorPalettes} title={'All color palettes'}/>} />
                <Route path="categories" element={<Categories colorPalettes={colorPalettes} title={'Categories'}/>} />
                <Route path="groups" element={<ColorGroups colorPalettes={colorPalettes} title={'Color groups'}/>} />
                <Route path="favorites" element={user ? <ColorPaletteList colorPalettes={colorPalettes.filter(x => x.likedBy.includes(user._id))} title={'My favorites'}/> : navigate('/login')} />
                <Route path="mine" element={user ? <ColorPaletteList colorPalettes={colorPalettes.filter(x => x.creator === user._id)} title={'My color palettes'}/> : navigate('/login')} />
                <Route path="upload" element={user ? <UploadPalette /> : navigate('/login')} />
            </Routes>
        </section>

    );
};

export default Gallery;