import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import ColorPaletteList from './ColorPalettesList';
import Categories from './Categories';
import ColorGroups from './ColorGroups';
import MyFavorites from './MyFavorites';
import MyPalettes from './MyPalettes';
import UploadPalette from '../UploadPalette/UploadPalette';

const Gallery = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();

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
                <div className="gallery__filters-left">
                    <Link to="">All images</Link>
                    <Link to="categories">Categories</Link>
                    <Link to="groups">Color groups</Link>
                </div>
                <div className="gallery__filters-right" >
                    <Link to="favorites">My favorites</Link>
                    <Link to="mine">My palettes</Link>
                    <Link to="upload">Upload</Link>
                </div>
            </section>

            <Routes>
                <Route path="" element={<ColorPaletteList />} />
                <Route path="categories" element={<Categories />} />
                <Route path="groups" element={<ColorGroups />} />
                <Route path="favorites" element={user ? <MyFavorites /> : navigate('/login')} />
                <Route path="mine" element={user ? <MyPalettes /> : navigate('/login')} />
                <Route path="upload" element={user ? <UploadPalette /> : navigate('/login')} />
            </Routes>
        </section>

    );
};

export default Gallery;