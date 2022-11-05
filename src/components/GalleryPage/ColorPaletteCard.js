import { Link } from 'react-router-dom';

const ColorPaletteCard = ({
    colorPalette
}) => {
    return (
        <li className="color-palette-card">

            <Link className="color-palette-card__link" to={`/details/${colorPalette._id}`}></Link>

            <img className="color-palette-card__image"
                src={colorPalette.imageFile}
                alt="color palette" />

            <p className="color-palette-card__title">{colorPalette.title}</p>

            <p className="color-palette-card__category">Category: {colorPalette.category}</p>

        </li >
    );
};

export default ColorPaletteCard;