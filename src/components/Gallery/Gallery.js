import { Routes, Route } from 'react-router-dom';

import ColorPaletteList from '../ColorPalettesList/ColorPalettesList';

const Gallery = () => {
    return (

        <section id="gallery" className="gallery">
            <Routes>
                <Route path="/" element={<ColorPaletteList />} />
                {/* <Route path="/gallery/my-color-palettes" element={<ColorPaletteList />} />
                    <Route path="/gallery/my-favorites" element={<ColorPaletteList />} /> */}
            </Routes>
        </section>

    );
};

export default Gallery;