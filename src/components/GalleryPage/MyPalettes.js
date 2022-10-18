import { useState, useEffect } from 'react';
import * as colorPaletteService from '../../services/colorPaletteService';
import ColorPaletteCard from './ColorPaletteCard';
import Pagination from './Pagination';
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

    return (
        <section>

            <section className="gallery__info">
                <span>Gallery {'>'} My color palettes</span>
                <span>{myColorPalettes.length} color palettes uploaded by {user.username}</span>
                <Pagination />
            </section>

            {myColorPalettes.length > 0
                ? (
                    <ul className="color-palette-list">
                        {myColorPalettes.map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)}
                    </ul>
                )
                : <p className="no-palettes"><b> No color palettes to show!</b>
                    <br /> Or no connection to database.
                </p>
            }
        </section>
    );
};

export default MyColorPalettes;