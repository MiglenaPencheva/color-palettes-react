import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import * as colorPaletteService from '../../services/colorPaletteService';
import { hideError, showError } from '../../helpers/notifications';
import { validate, getColorGroup } from '../../helpers/prepareData';

import UploadTitle from './common/UploadTitle';
import UploadCategory from './common/UploadCategory';
import UploadColors from './common/UploadColors';
import UploadSubmitButton from './common/UploadSubmitButton';


const SavePalette = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const { src } = location.state;
    console.log(src);

    const onSaveSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);

            // let title = formData.get('title');
            // let category = formData.get('category');
            // let colors = getColorGroup(formData).join(', ');
            // let data = { url, title, category, colors };

            // console.log(data);

            // await colorPaletteService.save(data, user.accessToken);

            let colors = getColorGroup(formData);
            formData.append('colors', colors);
            // formData.append('imageFile', file);

            // await colorPaletteService.create(formData, user.accessToken);

            hideError();
            // navigate('/gallery');

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
                        {/* <label className="button upload__upload-file--input">
                            <input type="file"
                                name="imageFile"
                                id="fileInput"
                                onChange={onFileUpload}
                                accept="image/jpeg, image/png, image/jpg"
                            />
                            Upload file
                        </label> */}

                        <span className="upload__upload-file--image-preview">
                            <img src={src} alt=""/>
                        </span>
                    </section>

                    <UploadTitle />
                    <UploadCategory />
                    <UploadColors />
                    <UploadSubmitButton />

                </fieldset>
            </form>
        </section>
    );
};

export default SavePalette;