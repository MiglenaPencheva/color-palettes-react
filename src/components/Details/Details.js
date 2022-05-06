import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as colorPaletteService from '../../services/colorPaletteService';
import { useAuthContext } from '../../contexts/AuthContext';
import { hideError, showError } from '../../helpers/notifications';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { colorPaletteId } = useParams();
    const [colorPalette, setColorPalette] = useState({ colorPaletteId });
    const [colors, setColors] = useState('');
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        colorPaletteService.getOne(colorPaletteId)
            .then(res => {
                setColorPalette(res);
                setColors(res.colorGroup.join(', '));
            });
    }, [colorPaletteId]);


    const deleteHandler = (e) => {
        e.preventDefault();

        colorPaletteService.remove(colorPaletteId, user.accessToken)
            .then(() => navigate('/dashboard'))
            .finally(() => {
                setShowDeleteDialog(false);
            });
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);
    };

    const onLikeClick = async () => {
        try {
            if (user._id === colorPalette.creator) { return; }
            if (colorPalette.likedBy.includes(user._id)) { return; }

            await colorPaletteService.like(colorPaletteId, colorPalette, user._id);

            hideError();
        } catch (error) {
            showError(error.message);
        }
    };

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${colorPalette._id}`}>Edit</Link>
            <a className="button" href="/" onClick={deleteClickHandler}>Delete</a>
        </>
    );

    const userButtons = <button onClick={onLikeClick}
        disabled={colorPalette.likedBy?.includes(user._id)}>Like</button>;

    return (
        <>
            <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />
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
        </>
    );
};

export default Details;