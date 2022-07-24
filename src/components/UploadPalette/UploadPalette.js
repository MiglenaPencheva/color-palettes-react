import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import * as colorPaletteService from '../../services/colorPaletteService';
import { hideError, showError } from '../../helpers/notifications';
import { validate, getColorGroup } from '../../helpers/prepareData';

const UploadPalette = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const showImage = async (e) => {
        let uploaded = document.getElementById('uploaded');
        while (uploaded.firstChild) {
            uploaded.removeChild(uploaded.firstChild);
        }

        let imageUrl = e.target.value;

        fetch(imageUrl)
            .then(res => res.blob()) 
            .then(blob => {
                let objectURL = URL.createObjectURL(blob);
                let myImage = new Image();
                myImage.src = objectURL;
                myImage.className = 'miniImage';
                uploaded.appendChild(myImage);
            });
    };

    const onCreateSubmit = async (e) => {
        e.preventDefault();

        try {
            let formData = new FormData(e.currentTarget);

            let title = formData.get('title');
            let category = formData.get('category');
            let colorGroup = getColorGroup(formData);
            let imageUrl = formData.get('imageUrl');

            let data = validate(title, category, colorGroup, imageUrl);
            console.log(data);

            // await colorPaletteService.create(data, user.accessToken);
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
                    <legend>Upload color palette</legend>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input link">
                            <input type="text"
                                name="imageUrl"
                                id="imageUrl"
                                placeholder="Image link"
                                onChange={showImage} />
                        </span>
                        <span id="uploaded"></span>
                    </p>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <textarea maxLength="100" name="title" id="title" placeholder="Title should be less than 100 characters" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Category</label>
                        <span className="input">
                            <select id="type" name="category" className="select">
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
                    <section className="field">
                        <label htmlFor="colorGroup">Color group</label>
                        <span className="checkbox">
                            <span className="checkbox">
                                <input type="checkbox" id="red" name="red" />
                                <label htmlFor="red">red</label>
                                <br />
                                <input type="checkbox" id="yellow" name="yellow" />
                                <label htmlFor="yellow">yellow</label>
                                <br />
                                <input type="checkbox" id="blue" name="blue" />
                                <label htmlFor="blue">blue</label>
                            </span>
                            <span className="checkbox">
                                <input type="checkbox" id="orange" name="orange" />
                                <label htmlFor="orange">orange</label>
                                <br />
                                <input type="checkbox" id="green" name="green" />
                                <label htmlFor="green">green</label>
                                <br />
                                <input type="checkbox" id="purple" name="purple" />
                                <label htmlFor="purple">purple</label>
                            </span>
                            <span className="checkbox">
                                <input type="checkbox" id="brown" name="brown" />
                                <label htmlFor="brown">brown</label>
                                <br />
                                <input type="checkbox" id="grey" name="grey" />
                                <label htmlFor="grey">grey</label>
                                <br />
                                <input type="checkbox" id="pink" name="pink" />
                                <label htmlFor="pink">pink</label>
                            </span>
                        </span>
                    </section>
                    <input className="button submit" type="submit" value="Upload Color Palette" />
                </fieldset>
            </form>
        </section>
    );
};

export default UploadPalette;