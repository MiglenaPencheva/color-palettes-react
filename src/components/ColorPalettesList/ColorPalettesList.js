import { useState, useEffect } from 'react';
import * as colorPaletteService from '../../services/colorPaletteService';
import ColorPaletteCard from './ColorPaletteCard/ColorPaletteCard';

const ColorPaletteList = () => {
    const [colorPalettes, setColorPalettes] = useState([]);
    
    useEffect(() => {
        colorPaletteService.getAll()
            .then(result => {
                setColorPalettes(result);
            });
    }, []);

    return (
        <>
            {colorPalettes.length > 0
                ? (
                    <ul className="color-palette-list">
                        {colorPalettes.map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)}
                        {/* {colorPalettes.filter().map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)} */}
                    </ul>
                ) 
                : <p className="no-palettes">No Color Palettes in database!</p>
            }
        </>
    );
};

export default ColorPaletteList;