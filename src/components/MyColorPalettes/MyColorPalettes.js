import { useState, useEffect } from 'react';
import * as colorPaletteService from '../../services/colorPaletteService';
import ColorPaletteCard from '../ColorPalettesList/ColorPaletteCard/ColorPaletteCard';
import { useAuthContext } from '../../contexts/AuthContext';

const MyColorPalettes = () => {
    const [myColorPalettes, setMyColorPalettes] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        colorPaletteService.getMine(user.accessToken)
            .then(result => {
                setMyColorPalettes(result);
            });
    }, [user.accessToken]);

    console.log(myColorPalettes);

    return (
        <section className="my-pets">
            <h1>My color palettes</h1>

            {myColorPalettes.length > 0
                ? (
                    <ul className="other-pets-list">
                        {myColorPalettes.map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)}
                    </ul>
                ) 
                : <p className="no-pets">No Color Palettes in database!</p>
            }
        </section>
    );
};

export default MyColorPalettes;