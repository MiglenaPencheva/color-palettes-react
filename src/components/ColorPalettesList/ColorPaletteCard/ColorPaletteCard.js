import { Link } from 'react-router-dom';

const ColorPaletteCard = ({
    colorPalette
}) => {
    return (
        <li className="otherPet">
            <h3>Name: {colorPalette.name}</h3>
            <p>Type: {colorPalette.type}</p>
            <p className="img"><img src={colorPalette.imageUrl} alt="color palette" /></p>
            <Link className="button" to={`/details/${colorPalette._id}`}>Details</Link>
        </li>
    );
};

export default ColorPaletteCard;