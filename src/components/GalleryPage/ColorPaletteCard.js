import { Link } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { translateCategory } from './bgHelper';

const ColorPaletteCard = ({
    colorPalette
}) => {

    const { language } = useLanguageContext();

    let categoryParagraph = '';
    if (language.lang === 'en') {
        categoryParagraph = <p className="color-palette-card__category">Category: {colorPalette.category}</p>;
    } else {
        translateCategory(colorPalette.category);
        categoryParagraph = <p className="color-palette-card__category">Категория: {translateCategory(colorPalette.category)}</p>;
    }

    return (
        <li className="color-palette-card">

            <Link className="color-palette-card__link" to={`/details/${colorPalette._id}`}></Link>

            <img className="color-palette-card__image"
                src={`data:image/jpeg;base64,${colorPalette.imageFile}`}
                alt="color palette" />

            <p className="color-palette-card__title">{colorPalette.title}</p>

            {categoryParagraph}

            <div className="color-palette-card__likes">
                <span id="total-likes">{colorPalette.likedBy.length}</span>
                <span className="star"></span>
            </div>
        </li >
    );
};

export default ColorPaletteCard;