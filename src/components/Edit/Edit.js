import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import * as colorPaletteService from '../../services/colorPaletteService';
import { hideError, showError } from '../../helpers/notifications';
import { validate, getColorGroup } from '../../helpers/prepareData';

const Edit = () => {
    const navigate = useNavigate();
    const { colorPaletteId } = useParams();
    const { user } = useAuthContext();
    const [colorPalette, setColorPalette] = useState({});
    const [src, setSrc] = useState('');

    useEffect(() => {
        colorPaletteService.getOne(colorPaletteId)
            .then(result => {
                setColorPalette(result);
                setSrc(result.imageFile);
            });
    }, [colorPaletteId]);

    const onUpdateSubmit = async (e) => {
        e.preventDefault();

        try {
            let formData = new FormData(e.currentTarget);

            let title = formData.get('title');
            let category = formData.get('category');
            let colors = getColorGroup(formData).join(', ');
 
            let data = { title, category, colors };

            await colorPaletteService.update(colorPaletteId, data, user.accessToken);
            
            hideError();
            navigate(`/details/${colorPalette._id}`);

        } catch (error) {
            showError(error.message);
        }
    };

    return (
        <section id="edit-page" className="upload-page">
            <form id="edit-form" 
                onSubmit={onUpdateSubmit}
                method="PUT">
                <fieldset className="upload-fieldset">
                    <legend>Update color palette</legend>
                    
                    <section className="upload__upload-file">
                        <span id="imagePreview" className="upload__upload-file--image-preview">
                            <img src={src} alt="preview of file" />
                        </span>
                    </section>    

                    <section className="upload__title">
                        <label htmlFor="title" className="upload__title--label">Title</label>
                        <span className="input">
                        <textarea className="upload__title--textarea"
                            maxLength="100"
                            name="title"
                            id="title"
                            cols="30" 
                            defaultValue={colorPalette.title} />
                        </span>
                    </section>

                    <section className="upload__category">
                        <label htmlFor="type">Category</label>
                            <select id="type" name="category" className="upload__category--select">
                                <option value="Choose category">Choose category</option>
                                <option value="landscapes">Landscapes</option>
                                <option value="sea">Sea</option>
                                <option value="sky">Sky</option>
                                <option value="plants">Plants</option>
                                <option value="animals">Animals</option>
                                <option value="foodAndDrinks">Food & Drinks</option>
                                <option value="others">Others</option>
                            </select>
                    </section>

                    <section className="upload__colors">
                        <label htmlFor="colorGroup">Color group</label>
                        <span className="upload__colors--checkbox">
                            <span>
                                <input type="checkbox" id="red" name="red" />
                                <label htmlFor="red">red</label>
                                <br />
                                <input type="checkbox" id="yellow" name="yellow" />
                                <label htmlFor="yellow">yellow</label>
                                <br />
                                <input type="checkbox" id="blue" name="blue" />
                                <label htmlFor="blue">blue</label>
                            </span>
                            <span>
                                <input type="checkbox" id="orange" name="orange" />
                                <label htmlFor="orange">orange</label>
                                <br />
                                <input type="checkbox" id="green" name="green" />
                                <label htmlFor="green">green</label>
                                <br />
                                <input type="checkbox" id="purple" name="purple" />
                                <label htmlFor="purple">purple</label>
                            </span>
                            <span>
                                <input type="checkbox" id="brown" name="brown" />
                                <label htmlFor="brown">brown</label>
                                <br />
                                <input type="checkbox" id="beige" name="beige" />
                                <label htmlFor="beige">beige</label>  
                            </span>
                            <span>
                                <input type="checkbox" id="grey" name="grey" />
                                <label htmlFor="grey">grey</label>
                                <br />
                                <input type="checkbox" id="pink" name="pink" />
                                <label htmlFor="pink">pink</label>
                            </span>
                        </span>
                    </section>

                <input className="button upload__submit-btn" 
                    type="submit" value="Save" />
            </fieldset>
        </form>
        </section >
    );
};

export default Edit;