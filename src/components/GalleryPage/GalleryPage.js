import { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

import ColorPaletteList from './ColorPalettesList';
import Categories from './Categories';
import ColorGroups from './ColorGroups';
import MyFavorites from './MyFavorites';
import MyPalettes from './MyPalettes';

const Gallery = () => {

    const [all, setAll] = useState(true);
    const [categories, setCategories] = useState(false);
    const [groups, setGroups] = useState(false);
    const [favorites, setFavorites] = useState(false);
    const [mine, setMine] = useState(false);

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
                    <input type="submit" value="All images" onClick={() => [setAll(true), setCategories(false), setGroups(false), setFavorites(false), setMine(false)]}/>
                    <input type="submit" value="Categories" onClick={() => [setCategories(true), setAll(false), setGroups(false), setFavorites(false), setMine(false)]}/>
                    <input type="submit" value="Color groups" onClick={() => [setGroups(true), setAll(false), setCategories(false), setFavorites(false), setMine(false)]}/>
                </div>
                <div className="gallery__filters-right" >
                    <input type="submit" value="My favorites" onClick={() => [setFavorites(true), setAll(false), setCategories(false), setGroups(false), setMine(false)]}/>
                    <input type="submit" value="My palettes" onClick={() => [setMine(true), setFavorites(false), setAll(false), setCategories(false), setGroups(false)]}/>
                </div>
            </section>

            {all && <ColorPaletteList />}
            {categories && <Categories />}
            {groups && <ColorGroups />}
            {favorites && <MyFavorites />}
            {mine && <MyPalettes />}

            {/* <Routes> */}
                {/* <Route path="/gallery" element={<ColorPaletteList />} /> */}
            {/* </Routes> */}
        </section>

    );
};

export default Gallery;