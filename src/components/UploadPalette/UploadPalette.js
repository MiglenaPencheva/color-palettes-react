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
        myImage.className = 'image-preview';
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

    const onCreateSubmit = async (e) => {
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
            navigate('/dashboard');

        } catch (error) {
            showError(error.message);
        }
    };

    return (
        <section id="create-page" className="create">
            <form id="create-form" 
                onSubmit={onCreateSubmit}
                encType="multipart/form-data"
                method="POST">
                <fieldset>
                    <legend>Upload color palette</legend>


                    <section className="field ">
                        <label htmlFor="image">Image</label>

                        <section className="upload-section">
                            <label className="button upload-file-input">
                                <input type="file"
                                    name="imageFile"
                                    id="fileInput"
                                    onChange={onFileUpload}
                                    accept="image/jpeg, image/png, image/jpg"
                                />
                                Upload file
                            </label>

                            {/* <span className="input link">
                                <input type="text"
                                    name="imageUrl"
                                    id="imageUrl"
                                    placeholder="Enter file link"
                                    onChange={onLinkUpload} />
                            </span> */}

                            <span id="imagePreview"></span>
                        </section>


                    </section>

                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <textarea maxLength="100" 
                                name="title" 
                                id="title" 
                                // onChange={e => setTitle(e.target.value)}
                                placeholder="Title should be less than 100 characters" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Category</label>
                        <span className="input" >
                            <select id="type"  
                                name="category" 
                                // onChange={e => setCategory(e.target.value)}
                                className="select"> 
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
                    <input className="button submit" 
                        type="submit" 
                        value="Upload Color Palette" />
                </fieldset>
            </form>
        </section>
    );
};

export default UploadPalette;