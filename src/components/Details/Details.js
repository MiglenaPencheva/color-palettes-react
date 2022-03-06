import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as colorPaletteService from '../../services/colorPaletteService';
import { AuthContext } from '../../contexts/AuthContext';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [colorPalette, setColorPalette] = useState({});
    const { colorPaletteId } = useParams();

    useEffect(() => {
        colorPaletteService.getOne(colorPaletteId)
            .then(result => {
                setColorPalette(result);
            });
    }, [colorPaletteId]);

    const deleteHandler = (e) => {
        e.preventDefault();

        colorPaletteService.remove(colorPaletteId, user.accessToken)
            .then(() => navigate('/dashboard'))
            .catch(err => console.log(err));
    };

    const ownerButtons = (
        <>
            <Link className="button" to="edit">Edit</Link>
            <a className="button" href="/" onClick={deleteHandler}>Delete</a>
        </>
    );

    const userButtons = <a className="button" href="/">Like</a>;

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>{colorPalette.name}</h3>
                <p className="type">Type: {colorPalette.type}</p>
                <p className="img"><img src={colorPalette.imageUrl} alt="palette" /></p>
                
                <div className="actions">
                    {user._id &&
                        (user._id === colorPalette._ownerId
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
                <p>{colorPalette.description}</p>
            </div>
        </section>
    );
};

export default Details;