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
                    <ul className="other-pets-list">
                        {colorPalettes.map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)}
                        {/* {colorPalettes.filter().map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)} */}
                    </ul>
                ) 
                : <p className="no-pets">No Color Palettes in database!</p>
            }
        </>
    );
};

export default ColorPaletteList;