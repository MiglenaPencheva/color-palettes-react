import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import * as colorPaletteService from '../../services/colorPaletteService';
import { hideError, showError } from '../../helpers/notifications';

const Create = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    console.log(user);

    const onCreateSubmit = async (e) => {
        e.preventDefault();

        try {
            let formData = new FormData(e.currentTarget);

            let title = formData.get('title');
            let category = formData.get('category');
            let colorGroup = getColorGroup(formData);
            let imageUrl = formData.get('imageUrl');

            if (title.trim() === '') { throw new Error('Title required'); }
            if (category === 'Choose category') { throw new Error('Category required'); }
            if (colorGroup.length === 0) { throw new Error('Choose color group'); }
            if (imageUrl.trim() === '') { throw new Error('Image required'); }
            if (imageUrl.slice(0, 7) !== 'http://' &&
                imageUrl.slice(0, 8) !== 'https://') { throw new Error('Invalid image URL'); }

            let colorPaletteData = {
                title,
                category,
                colorGroup,
                imageUrl,
                creator: user._id
            };

            await colorPaletteService.create(colorPaletteData, user.accessToken);
            hideError();
            navigate('/dashboard');
        } catch (error) {
            showError(error.message);
        }

        function getColorGroup(formData) {
            let colorGroup = [];

            let red = formData.get('red');
            let green = formData.get('green');
            let blue = formData.get('blue');
            let yellow = formData.get('yellow');
            let cyan = formData.get('cyan');
            let purple = formData.get('purple');
            let orange = formData.get('orange');
            let brown = formData.get('brown');
            let pink = formData.get('pink');
            let grey = formData.get('grey');
            let white = formData.get('white');

            if (red) { colorGroup.push('red'); }
            if (green) { colorGroup.push('green'); }
            if (blue) { colorGroup.push('blue'); }
            if (yellow) { colorGroup.push('yellow'); }
            if (cyan) { colorGroup.push('cyan'); }
            if (purple) { colorGroup.push('purple'); }
            if (orange) { colorGroup.push('orange'); }
            if (brown) { colorGroup.push('brown'); }
            if (pink) { colorGroup.push('pink'); }
            if (grey) { colorGroup.push('grey'); }
            if (white) { colorGroup.push('white'); }

            return colorGroup;
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