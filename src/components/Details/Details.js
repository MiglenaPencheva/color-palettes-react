import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as colorPaletteService from '../../services/colorPaletteService';
import { useAuthContext } from '../../contexts/AuthContext';
import { hideError, showError } from '../../helpers/notifications';

const Details = () => {
    // const navigate = useNavigate();
    const { user } = useAuthContext();
    const { colorPaletteId } = useParams();
    const [colorPalette, setColorPalette] = useState({colorPaletteId});
    const [colors, setColors] = useState('');

    useEffect(() => {
        colorPaletteService.getOne(colorPaletteId)
            .then(res => {
                setColorPalette(res);
                setColors(res.colorGroup.join(', '));
            });
    }, [colorPaletteId]);

    // const deleteHandler = (e) => {
    //     e.preventDefault();

    //     colorPaletteService.remove(colorPaletteId, user.accessToken)
    //         .then(() => navigate('/dashboard'))
    //         .catch(err => console.log(err));
    // };

    const onLikeClick = async () => {
        // e.preventDefault();

        try {
            if (user._id === colorPalette._ownerId) { return; }
            if (colorPalette.likedBy.includes(user._id)) { return; }
            
            // let updated = await colorPaletteService.like(colorPaletteId, user._id);

            // setColorPalette(updated);

            hideError();
        } catch (error) {
            showError(error.message);
        }
    };

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${colorPalette._id}`}>Edit</Link>
            {/* <a className="button" href="/" onClick={deleteHandler}>Delete</a> */}
        </>
    );

    const userButtons = <button onClick={onLikeClick} 
        disabled={colorPalette.likedBy?.includes(user._id)}>Like</button>;

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <p className="img"><img src={colorPalette.imageUrl} alt="palette" /></p>

                <h3>{colorPalette.title}</h3>
                <p className="type">Category: {colorPalette.category}</p>
                <p className="type">Colors: {colors}</p>

                <div className="actions">
                    {user._id &&
                        (user._id === colorPalette._ownerId
                            ? ownerButtons
                            : userButtons
                        )}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" alt="heart" />
                        <span id="total-likes">Likes: {colorPalette.likes?.length || 0}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;