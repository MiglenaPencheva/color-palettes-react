import { useState, useEffect } from 'react';
import * as colorPaletteService from '../../services/colorPaletteService';
import ColorPaletteCard from './ColorPaletteCard';
import Pagination from './Pagination';

const ColorPaletteList = () => {
    const [colorPalettes, setColorPalettes] = useState([]);

    useEffect(() => {
        colorPaletteService.getAll()
            .then(result => {
                setColorPalettes(result);
            });
    }, []);

    return (
        <section>
            <section className="gallery__info">
                <span>Gallery {'>'} All color palettes</span>
                <span>{colorPalettes.length} color palettes</span>
                <Pagination />
            </section>

            {colorPalettes.length > 0
                ? (
                    <ul className="color-palette-list">
                        {colorPalettes.map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)}
                        {/* {colorPalettes.filter().map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)} */}
                    </ul>
                )
                : <p className="no-palettes"><b> No color palettes to show!</b>
                    <br /> Or no connection to database. 
                    </p>
            }
        </section>
    );
};

export default ColorPaletteList;