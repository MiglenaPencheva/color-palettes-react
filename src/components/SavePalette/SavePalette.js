import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import * as colorPaletteService from '../../services/colorPaletteService';
import { hideError, showError } from '../../helpers/notifications';
import { validate, getColorGroup } from '../../helpers/prepareData';


const SavePalette = ({
    urlToSave
}) => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    // const [src, setSrc] = useState('');
    // const [imageFile, setImageFile] = useState({});

    // const file = {};
    // const fileSrc = URL.createObjectURL(file);
    // setSrc(fileSrc);

    const onSaveSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);

            let colors = getColorGroup(formData);
            formData.append('colors', colors);

            await colorPaletteService.create(formData, user.accessToken);

            hideError();
            navigate('/gallery');

        } catch (error) {
            showError(error.message);
        }
    };

    return (
        <section id="save-page" className="upload-page">
            <form id="save-form" 
                onSubmit={onSaveSubmit}
                encType="multipart/form-data"
                method="POST">
                <fieldset className="upload-fieldset">
                    <legend>Save color palette</legend>

                    <section className="upload__upload-file">
                        <span id="imagePreview" className="upload__upload-file--image-preview">
                            <img src={urlToSave} alt="preview of file" />
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
                                // onChange={e => setTitle(e.target.value)}
                                placeholder="Title should be less than 100 characters" />
                        </span>
                    </section>

                    <section className="upload__category">
                        <label htmlFor="type">Category</label>
                        <select id="type" name="category"
                            // onChange={e => setCategory(e.target.value)}
                            className="upload__category--select">
                            <option value="Choose category">Choose category</option>
                            <option value="landscape">Landscape</option>
                            <option value="sea">Sea</option>
                            <option value="sky">Sky</option>
                            <option value="plants">Plants</option>
                            <option value="animals">Animals</option>
                            <option value="foodAndDrinks">Food & Drinks</option>
                            <option value="others">Others</option>
                        </select>
                    </section>

                    <section className="upload__colors">
                        <label htmlFor="colorGroup">Colors</label>
                        <span className="upload__colors--checkbox">
                            <span>
                                <input type="checkbox" id="red" name="red" />
                                <label htmlFor="red" className="upload__colors--checkbox-label">red</label>
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
                        type="submit"
                        value="Save Color Palette" />
                </fieldset>
            </form>
        </section>
    );
};

export default SavePalette;