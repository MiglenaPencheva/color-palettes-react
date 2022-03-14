import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import * as colorPaletteService from '../../services/colorPaletteService';
import { hideError, showError } from '../../helpers/notifications';

const Create = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const onCreateSubmit = async (e) => {
        e.preventDefault();

        try {
            let formData = new FormData(e.currentTarget);

            let title = formData.get('title');
            let type = formData.get('type');
            let imageUrl = formData.get('imageUrl');

            if (title.trim() === '') { throw new Error('Title required'); }
            if (type.trim() === '') { throw new Error('Type required'); }
            if (imageUrl.trim() === '') { throw new Error('Image required'); }
            if (imageUrl.slice(0, 7) !== 'http://' && 
                imageUrl.slice(0, 8) !== 'https://') { throw new Error('Invalid image URL'); }

            let colorPaletteData = {
                title,
                type,
                imageUrl,
                creator: user._id
            };

            await colorPaletteService.create(colorPaletteData, user);
            hideError();
            navigate('/dashboard');
        } catch (error) {
            showError(error.message);
        }
    };

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onCreateSubmit} method="POST">
                <fieldset>
                    <legend>Add new color palette</legend>
                    <p className="field">
                        <label htmlFor="name">Title</label>
                        <span className="input">
                            <input type="text" name="title" id="title" placeholder="Title" />
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