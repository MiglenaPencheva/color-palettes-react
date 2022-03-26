import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as colorPaletteService from '../../services/colorPaletteService';
import { useAuthContext } from '../../contexts/AuthContext';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { colorPaletteId } = useParams();
    const [colorPalette, setColorPalette] = useState({});
    
    useEffect(() => {
        colorPaletteService.getOne(colorPaletteId)
            .then(res => { setColorPalette(res); });
    }, [colorPaletteId]);

    const deleteHandler = (e) => {
        e.preventDefault();

        colorPaletteService.remove(colorPaletteId, user.accessToken)
            .then(() => navigate('/dashboard'))
            .catch(err => console.log(err));
    };

    const onLikeClick = () => {

    };

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${colorPalette._id}`}>Edit</Link>
            <a className="button" href="/" onClick={deleteHandler}>Delete</a>
        </>
    );

    const userButtons = <button onClick={onLikeClick}>Like</button>;

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>{colorPalette.title}</h3>
                <p className="type">Category: {colorPalette.category}</p>
                <p className="img"><img src={colorPalette.imageUrl} alt="palette" /></p>
                
                <div className="actions">
                    {user._id &&
                        (user._id === colorPalette.creator
                            ? ownerButtons
                            : userButtons
                        )}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" alt="heart" />
                        <span id="total-likes">Likes: {colorPalette.likes?.length}</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>......</p>
            </div>
        </section>
    );
};

export default Details;