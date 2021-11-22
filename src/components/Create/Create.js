import { useNavigate } from 'react-router-dom';
import * as colorPaletteService from '../../services/colorPaletteService';

const Create = () => {
    const navigate = useNavigate();

    const onCreateSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let colorPaletteData = {
            name: formData.get('name'),
            type: formData.get('type'),
            imageUrl: formData.get('imageUrl'),
        };

        await colorPaletteService.create(colorPaletteData);

        navigate('/dashboard');
    };

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onCreateSubmit} method="POST">
                <fieldset>
                    <legend>Add new color palette</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="landscape">Landscape</option>
                                <option value="portrait">Portrait</option>
                                <option value="square">Square</option>
                            </select>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Color Palette" />
                </fieldset>
            </form>
        </section>
    );
};

export default Create;