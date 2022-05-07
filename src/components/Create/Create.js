import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import * as colorPaletteService from '../../services/colorPaletteService';
import { hideError, showError } from '../../helpers/notifications';
import { validate, getColorGroup } from '../../helpers/prepareData';

const Create = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const onCreateSubmit = async (e) => {
        e.preventDefault();

        try {
            let formData = new FormData(e.currentTarget);

            let title = formData.get('title');
            let category = formData.get('category');
            let colorGroup = getColorGroup(formData);
            let imageUrl = formData.get('imageUrl');

            let data = validate(title, category, colorGroup, imageUrl);
            
            await colorPaletteService.create(data, user.accessToken);
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
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <textarea maxLength="100" name="title" id="title" placeholder="Title should be less than 100 characters" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Category</label>
                        <span className="input">
                            <select id="type" name="category">
                                <option value="Choose category">Choose category</option>
                                <option value="landscape">Landscape</option>
                                <option value="sea">Sea</option>
                                <option value="sky">Sky</option>
                                <option value="plants">Plants</option>
                                <option value="animals">Animals</option>
                                <option value="foodAndDrinks">Food & Drinks</option>
                                <option value="others">Others</option>
                            </select>
                        </span>
                    </p>
                    <p>
                        Color group
                        <input type="checkbox" id="red" name="red" />
                        <label htmlFor="red">red</label>
                        <input type="checkbox" id="green" name="green" />
                        <label htmlFor="green">green</label>
                        <input type="checkbox" id="blue" name="blue" />
                        <label htmlFor="blue">blue</label>
                        <input type="checkbox" id="yellow" name="yellow" />
                        <label htmlFor="yellow">yellow</label>
                        <input type="checkbox" id="cyan" name="cyan" />
                        <label htmlFor="cyan">cyan</label>
                        <input type="checkbox" id="purple" name="purple" />
                        <label htmlFor="purple">purple</label>
                        <input type="checkbox" id="orange" name="orange" />
                        <label htmlFor="orange">orange</label>
                        <input type="checkbox" id="brown" name="brown" />
                        <label htmlFor="brown">brown</label>
                        <input type="checkbox" id="pink" name="pink" />
                        <label htmlFor="pink">pink</label>
                        <input type="checkbox" id="grey" name="grey" />
                        <label htmlFor="grey">grey</label>
                        <input type="checkbox" id="white" name="white" />
                        <label htmlFor="white">white</label>
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