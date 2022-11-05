import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as colorPaletteService from '../../services/colorPaletteService';
import { useAuthContext } from '../../contexts/AuthContext';
import { hideError, showError, showInfo } from '../../helpers/notifications';
import DeleteConfirmDialog from '../ConfirmDialog/DeleteConfirmDialog';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { colorPaletteId } = useParams();
    const [colorPalette, setColorPalette] = useState({ colorPaletteId });
    const [colors, setColors] = useState('');
    const [likes, setLikes] = useState(0);
    const [category, setCategory] = useState(0);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        colorPaletteService.getOne(colorPaletteId)
            .then(res => {
                setColorPalette(res);
                setCategory(res.category);
                setLikes(res.likedBy.length);
                setColors(res.colors.split(',').join(', '));
            });
    }, [colorPaletteId]);

    const onCategoryClick = async (e) => {
        try {
            let res = await colorPaletteService.getAll();
            let filtered = await res.filter(x => x.category === e.target.textContent);
            hideError();
            navigate('/gallery/category', { colorPalettes: filtered });
        } catch (error) {
            showError(error.message);
        }
    };

    const deleteHandler = (e) => {
        e.preventDefault();

        colorPaletteService.remove(colorPaletteId, user.accessToken)
            .then(() => navigate('/gallery'))
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

            await colorPaletteService.like(colorPaletteId, user.accessToken);

            hideError();
            navigate('/gallery');
            showInfo('Successfully liked palette');
        } catch (error) {
            showError(error.message);
        }
    };

    const ownerButtons = (
        <>
            <Link to={`/edit/${colorPalette._id}`}>
                <button className="button details__info--buttons-edit">Edit</button>
            </Link>
            <button className="button details__info--buttons-delete"
                onClick={deleteClickHandler}>Delete
            </button>
        </>
    );

    const userButtons = <button onClick={onLikeClick}
        disabled={colorPalette.likedBy?.includes(user._id)}>Like</button>;

    return (
        <>
            <DeleteConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />

            <section id="details" className="details">

                <span className="details__image">
                    <img className="details__image--file" src={colorPalette.imageFile} alt="palette" />
                </span>

                <div className="details__info">

                    <Link to={'/gallery'} className="details__info--back"></Link>

                    <h5 className="details__info--title">{colorPalette.title}</h5>

                    <Link to={'/gallery/categories'} className="details__info--category">Category: {colorPalette.category}</Link>

                    <Link to={'gallery/groups'} className="details__info--colors">Colors: {colors}</Link>

                    <div className="details__info--buttons">
                        {user._id &&
                            (user._id === colorPalette._ownerId
                                ? ownerButtons
                                : userButtons
                            )}

                        <div className="details__info--like">
                            <span id="total-likes">Likes: {likes}</span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Details;