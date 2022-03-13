import { useNavigate } from 'react-router-dom';
import * as colorPaletteService from '../../services/colorPaletteService';
import { useAuthContext } from '../../contexts/AuthContext';

const Create = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const onCreateSubmit = async (e) => {
        e.preventDefault();

        try {
            let formData = new FormData(e.currentTarget);

            let title = formData.get('title');
            let type = formData.get('type');
            let imageUrl = formData.get('imageUrl');

            let colorPaletteData = {
                title,
                type,
                imageUrl,
                creator: user._id
            };

            await colorPaletteService.create(colorPaletteData, user.accessToken);

            navigate('/dashboard');

        } catch (error) {
            console.log(error);
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