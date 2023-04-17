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
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        colorPaletteService.getAll(page)
            .then(result => {
                setColorPalettes(result);
            })
            .catch(error => {
                console.log(error);
            });
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight) {
                setPage(prevPage => prevPage + 1);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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

            <nav className="gallery__nav">
                <span onClick={() => navigate(-1)} id="backArrow" style={{ 'marginRight': 'auto' }}></span>

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

            </nav>

            <Routes>
                <Route path="" element={<ColorPaletteList colorPalettes={colorPalettes} title={'All color palettes'} />} />
                <Route path="all" element={<ColorPaletteList colorPalettes={colorPalettes} title={'All color palettes'} />} />
                <Route path="categories" element={<Categories colorPalettes={colorPalettes} title={'Categories'} />} />
                <Route path="groups" element={<ColorGroups colorPalettes={colorPalettes} title={'Color groups'} />} />
                <Route path="favorites" element={<ColorPaletteList colorPalettes={colorPalettes.filter(x => x.likedBy.includes(user._id))} title={'My favorites'} />} />
                <Route path="mine" element={<ColorPaletteList colorPalettes={colorPalettes.filter(x => x.creator === user._id)} title={'My color palettes'} />} />
                <Route path="upload" element={<UploadPalette />} />
                {/* <Route path="upload" element={user._id ? <UploadPalette /> : navigate('/login')} /> */}
            </Routes>

        </section >

    );
};

export default Gallery;