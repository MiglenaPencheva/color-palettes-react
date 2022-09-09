import { Routes, Route } from 'react-router-dom';

import ColorPaletteList from '../ColorPalettesList/ColorPalettesList';

const Gallery = () => {
    return (

        <section id="gallery" className="gallery-page">

            <section className="section-header">
                <h2> Color palettes gallery </h2>
                <h6> World is full of examples. The magic of light is all around. </h6>
                <h6 className="diffHeading"> Enjoy the variety of color combinations. </h6>
            </section>

            <Routes>
                <Route path="/" element={<ColorPaletteList />} />
                {/* <Route path="/gallery/my-color-palettes" element={<ColorPaletteList />} />
                    <Route path="/gallery/my-favorites" element={<ColorPaletteList />} /> */}
            </Routes>
        </section>

    );
};

export default Gallery;