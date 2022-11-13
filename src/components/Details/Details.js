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
            console.log(colorPalette.creator);
            if (user._id === colorPalette.creator) { return; }
            console.log(colorPalette.likedBy);
            if (colorPalette.likedBy.includes(user._id)) {
                console.log('Already liked');
                showInfo('Already liked');
                return;
            }

            let data = {
                title: colorPalette.title,
                category: colorPalette.category,
                colors: colorPalette.colors,
            };
            await colorPaletteService.like(colorPaletteId, data, user.accessToken);

            hideError();
            navigate('/gallery/');
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

    const alreadyLiked = colorPalette.likedBy?.includes(user._id);

    return (
        <>
            <DeleteConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />

            <section id="details" className="details">

                <span className="details__image">
                    <img className="details__image--file" src={colorPalette.imageFile} alt="palette" />
                </span>

                <div className="details__info">

                    <span onClick={() => navigate(-1)} className="details__info--back"></span>

                    <h5 className="details__info--title">{colorPalette.title}</h5>

                    <span>
                        <Link to={'/gallery/categories'} className="details__info--category">Category:</Link>
                        <span><i> {colorPalette.category}</i></span>
                    </span>

                    <span>
                        <Link to={'/gallery/groups'} className="details__info--colors">Colors:</Link>
                        <span><i> {colors}</i> </span>
                    </span>

                    <div className="details__info--buttons">
                        {user._id
                            ? (user._id === colorPalette._ownerId
                                ? ownerButtons
                                : (alreadyLiked
                                    ? <p><i>You like this palette</i></p>
                                    : <button className="button details__info--buttons-edit" onClick={onLikeClick}>Like</button>
                                )
                            )
                            : <p><Link to='/login'><i>Sign in</i></Link> or <Link to='/register'><i>subscribe</i></Link> to like</p>
                        }

                        <div className="details__info--like">
                            <span id="total-likes">{likes}</span>
                            <span className="heart"></span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Details;