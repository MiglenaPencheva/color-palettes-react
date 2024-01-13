import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as colorPaletteService from '../../services/colorPaletteService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { hideError, showError, showInfo } from '../../helpers/notifications';
import { translateCategory, translateColorGroupArr } from '../GalleryPage/bgHelper';
import DeleteConfirmDialog from '../ConfirmDialog/DeleteConfirmDialog';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { language } = useLanguageContext();
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
                setColors(res.colors);
            });
    }, [colorPaletteId]);

    const deleteHandler = (e) => {
        e.preventDefault();

        colorPaletteService.remove(colorPaletteId, user.accessToken)
            .then(() => {
                navigate('/gallery');
                showInfo('Successfully deleted palette');
            })
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
            if (colorPalette.likedBy.includes(user._id)) {
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
            language.lang === 'en' ? showInfo('Successfully liked palette') : showInfo('Харесахте палитрата');

        } catch (error) {
            showError(error.message);
        }
    };

    const ownerButtons = (
        <>
            <Link to={`/edit/${colorPalette._id}`}>
                {language.lang === 'en'
                    ? <button className="button details__info--buttons-edit">Edit</button>
                    : <button className="button details__info--buttons-edit">Промени</button>}
            </Link>
            {language.lang === 'en'
                ? <button className="button details__info--buttons-delete" onClick={deleteClickHandler}>Delete</button>
                : <button className="button details__info--buttons-delete" onClick={deleteClickHandler}>Изтрий</button>}
        </>
    );

    let categorySpan = '';
    if (language.lang === 'en') {
        categorySpan = <span>
            <Link to={'/gallery/categories'} className="details__info--category">Category:</Link>
            <span><i> {colorPalette.category}</i></span>
        </span>;
    } else {
        categorySpan = <span>
            <Link to={'/gallery/categories'} className="details__info--category">Категория:</Link>
            <span><i> {translateCategory(colorPalette.category)}</i></span>
        </span>;
    }

    let colorGroupSpan = '';
    if (language.lang === 'en') {
        colorGroupSpan = <span>
            <Link to={'/gallery/groups'} className="details__info--colors">Colors:</Link>
            <span><i> {colors}</i> </span>
        </span>;
    } else {
        colorGroupSpan = <span>
            <Link to={'/gallery/groups'} className="details__info--colors">Цветове:</Link>
            <span><i> {translateColorGroupArr(colors)}</i> </span>
        </span>;
    }

    let likeParagraph = '';
    if (language.lang === 'en') {
        likeParagraph = <p><i>You liked this palette</i></p>;
    } else {
        likeParagraph = <p><i>Вече харесваш палитрата</i></p>;
    }

    let likeButton = '';
    if (language.lang === 'en') {
        likeButton = <button className="button details__info--buttons-edit" onClick={onLikeClick}>Like</button>;
    } else {
        likeButton = <button className="button details__info--buttons-edit" onClick={onLikeClick}>Харесай</button>;
    }

    let signParagraph = '';
    if (language.lang === 'en') {
        signParagraph = <p><Link to='/login'><i>Sign in</i></Link> or <Link to='/register'><i>subscribe</i></Link> to like</p>;
    } else {
        signParagraph = <p><Link to='/login'><i>Влез</i></Link> или <Link to='/register'><i>се регистрирай</i></Link>, за да харесаш</p>;
    }

    const alreadyLiked = colorPalette.likedBy?.includes(user._id);


    return (
        <>
            <DeleteConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />

            <section id="details" className="details">

                <span className="details__image">
                    <img className="details__image--file" src={`data:image/jpeg;base64,${colorPalette.imageFile}`} alt="palette" />
                </span>

                <div className="details__info">

                    <span onClick={() => navigate(-1)} id="backArrow"></span>

                    <h5 className="details__info--title">{colorPalette.title}</h5>

                    {categorySpan}

                    {colorGroupSpan}

                    <div className="details__info--buttons">
                        {user._id
                            ? (user._id === colorPalette._ownerId
                                ? ownerButtons
                                : (alreadyLiked
                                    ? likeParagraph
                                    : likeButton
                                )
                            )
                            : signParagraph
                        }

                        <div className="details__info--like">
                            <span id="total-likes">{likes}</span>
                            <span className="star"></span>
                        </div>
                    </div>

                </div>
            </section >
        </>
    );
};

export default Details;