import { useState, useEffect } from 'react';
import * as colorPaletteService from '../../services/colorPaletteService';
import ColorPaletteCard from '../ColorPalettesList/ColorPaletteCard/ColorPaletteCard';
import { useAuthContext } from '../../contexts/AuthContext';

const MyFavorites = () => {
    const [myFavorites, setMyFavorites] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        colorPaletteService.getFavorites(user.accessToken)
            .then(result => {
                setMyFavorites(result);
            });
    }, [user.accessToken]);

    return (
        <section className="my-pets">
            <h1>My favorites</h1>

            {myFavorites.length > 0
                ? (
                    <ul className="other-pets-list">
                        {myFavorites.map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)}
                    </ul>
                ) 
                : <p className="no-pets">No Color Palettes in database!</p>
            }
        </section>
    );
};

export default MyFavorites;