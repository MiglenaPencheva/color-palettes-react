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
            
            <h3 className="color-palette-card__title">{colorPalette.title}</h3>

            <p className="color-palette-card__category">
                Category: <Link to={'/gallery/{category}'}>{colorPalette.category}</Link>
            </p>

            

        </li >
    );
};

export default ColorPaletteCard;