import { Link } from 'react-router-dom';

const ColorPaletteCard = ({
    colorPalette
}) => {
    console.log(colorPalette.imageFile.contentType);
    console.log(colorPalette.imageFile.buffer);
    
    return (
        <li className="color-palette-card">

            <Link className="color-palette-card__link" to={`/details/${colorPalette._id}`}></Link>

            <img className="color-palette-card__image"
                src={`data:${colorPalette.imageFile.contentType};base64,${colorPalette.imageFile.buffer}`}
                alt="color palette" />

            <p className="color-palette-card__title">{colorPalette.title}</p>

            <p className="color-palette-card__category">Category: {colorPalette.category}</p>

            <div className="color-palette-card__likes">
                <span id="total-likes">{colorPalette.likedBy.length}</span>
                <span className="star"></span>
            </div>
        </li >
    );
};

export default ColorPaletteCard;