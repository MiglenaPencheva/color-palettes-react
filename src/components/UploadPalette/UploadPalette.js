import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import * as colorPaletteService from '../../services/colorPaletteService';
import { hideError, showError } from '../../helpers/notifications';
import { validate, getColorGroup } from '../../helpers/prepareData';

import UploadTitle from './common/UploadTitle';
import UploadCategory from './common/UploadCategory';
import UploadColors from './common/UploadColors';
import UploadSubmitButton from './common/UploadSubmitButton';

const UploadPalette = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const onFileUpload = (e) => {
        const file = e.target.files[0];
        const src = URL.createObjectURL(file);
        console.log(src);

        let imagePreview = document.getElementById('imagePreview');
        while (imagePreview.firstChild) {
            imagePreview.removeChild(imagePreview.firstChild);
        }

        let myImage = new Image();
        myImage.src = src;
        myImage.className = 'upload__upload-file--image-preview';
        imagePreview.appendChild(myImage);
    };

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

            let colors = getColorGroup(formData);
            formData.append('colors', colors);

            for (const key of formData.keys()) {
                console.log(key, formData.get(key));
            }

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
                    </section>

                    <UploadTitle />
                    <UploadCategory />
                    <UploadColors />

                    <section className="upload__buttons">
                        <Link to={'/gallery'} className="details__info--back"></Link>
                        <UploadSubmitButton />
                    </section>

                </fieldset>
            </form>
        </section>
    );
};

export default UploadPalette;