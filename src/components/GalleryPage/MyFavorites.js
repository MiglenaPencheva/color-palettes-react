import { useState, useEffect } from 'react';
import * as colorPaletteService from '../../services/colorPaletteService';
import ColorPaletteCard from './ColorPaletteCard';
import Pagination from './Pagination';
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
        <section>
            <section className="gallery__info">
                <span>Gallery {'>'} My favorite color palettes</span>
                <span>{myFavorites.length} color palettes liked by {user.username}</span>
                <Pagination />
            </section>

            {myFavorites.length > 0
                ? (
                    <ul className="color-palette-list">
                        {myFavorites.map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)}
                    </ul>
                ) 
                : <p className="no-palettes"><b> No color palettes to show!</b>
                    <br /> Or no connection to database. 
                    </p>
            }
        </section>
    );
};

export default MyFavorites;