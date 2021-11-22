import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as colorPaletteService from '../../services/colorPaletteService';

const Details = () => {
    const [colorPalette, setColorPalette] = useState({});
    const { id } = useParams();

    useEffect(() => {
        colorPaletteService.getOne(id)
            .then(result => {
                setColorPalette(result);
            });
    });
    
    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>{colorPalette.name}</h3>
                <p className="type">Type: {colorPalette.type}</p>
                <p className="img"><img src={colorPalette.imageUrl} alt="palette" /></p>
                <div className="actions">
                    <a className="button" href="/">Edit</a>
                    <a className="button" href="/">Delete</a>
                    
                    <a className="button" href="/">Like</a>
                    
                    <div className="likes">
						<img className="hearts" src="/images/heart.png" alt="heart" />
						<span id="total-likes">Likes: {colorPalette.likes}</span>
					</div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{colorPalette.description}</p>
            </div>
        </section>
    );
};

export default Details;