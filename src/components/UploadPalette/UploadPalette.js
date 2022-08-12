import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import * as colorPaletteService from '../../services/colorPaletteService';
import { hideError, showError } from '../../helpers/notifications';
import { validate, getColorGroup } from '../../helpers/prepareData';

const UploadPalette = () => {
    const navigate = useNavigate();
    const [previewUrl, setPreviewUrl] = useState('');
    // const [title, setTitle] = useState('');
    // const [category, setCategory] = useState('');
    // const [colorGroup, setColorGroup] = useState('');
    const [imageFile, setImageFile] = useState({});
    // const [data, setData] = useState({});
    const { user } = useAuthContext();

    const onFileUpload = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImageFile(file);
        const src = URL.createObjectURL(file);
        showImagePreview(src);
    };

    function showImagePreview(src) {
        let imagePreview = document.getElementById('imagePreview');
        while (imagePreview.firstChild) {
            imagePreview.removeChild(imagePreview.firstChild);
        }
        let myImage = new Image();
        myImage.src = src;
        myImage.className = 'upload__upload-file--image-preview';
        imagePreview.appendChild(myImage);
        setPreviewUrl(myImage.src);
    }

    // const onLinkUpload = async (e) => {
    //     let imageUrl = e.target.value;
    //     fetch(imageUrl)
    //         .then(res => res.blob())
    //         .then(blob => {
    //             let objectURL = URL.createObjectURL(blob);
    //             showImagePreview(objectURL);
    //         });
    // };

    const onUploadSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);

            // let title = formData.get('title');
            // let category = formData.get('category');
            // let colorGroup = getColorGroup(formData);

            // const formData = new FormData();
            // formData.append('title', title);
            // formData.append('category', category);
            // formData.append('imageFile', imageFile);

            let colors = getColorGroup(formData);
            console.log(colors);
            formData.append('colors', colors);

            for (const key of formData.keys()) {
                console.log(key, formData.get(key));
            }

            // let data = {};
            // for (const key of formData.keys()) {
            //     data[key] = formData.get(key);
            // }
            // let data = validate(title, category, colorGroup, imageFile);

            await colorPaletteService.create(formData, user.accessToken);

            hideError();
            navigate('/gallery');

        } catch (error) {
            showError(error.message);
        }
    };

    return (
        <section id="upload-page" className="upload-page">
            <form id="upload-form"
                onSubmit={onUploadSubmit}
                encType="multipart/form-data"
                method="POST">
                <fieldset className="upload-fieldset">
                    <legend>Upload color palette</legend>

                    <section className="upload__upload-file">
                        {/* <label htmlFor="image">Image</label> */}
                        {/* <section className="upload-section"> */}
                        <label className="button upload__upload-file--input">
                            <input type="file"
                                name="imageFile"
                                id="fileInput"
                                onChange={onFileUpload}
                                accept="image/jpeg, image/png, image/jpg"
                            />
                            Upload file
                        </label>

                        {/* <span className="input link">
                                <input type="text" name="imageUrl" id="imageUrl" 
                                placeholder="Enter file link" onChange={onLinkUpload} />
                            </span> */}

                        <span id="imagePreview" className="upload__upload-file--image-preview"></span>
                        {/* </section> */}
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
                        value="Upload Color Palette" />
                </fieldset>
            </form>
        </section>
    );
};

export default UploadPalette;