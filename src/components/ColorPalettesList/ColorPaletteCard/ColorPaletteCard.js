import { Link } from 'react-router-dom';

const ColorPaletteCard = ({
    colorPalette
}) => {
    return (
        <li className="otherPet">
            <h3>{colorPalette.title}</h3>
            <p>Category: {colorPalette.category}</p>
            <p className="img"><img src={colorPalette.imageUrl} alt="color palette" /></p>
            <Link className="button" to={`/details/${colorPalette._id}`}>Details</Link>
        </li>
    );
};

export default ColorPaletteCard;