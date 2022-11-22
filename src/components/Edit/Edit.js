import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import * as colorPaletteService from '../../services/colorPaletteService';
import { hideError, showError } from '../../helpers/notifications';
import { validate, getColorGroup } from '../../helpers/prepareData';
import UploadColors from '../UploadPalette/common/UploadColors';
import UploadCategory from '../UploadPalette/common/UploadCategory';
import UploadTitle from '../UploadPalette/common/UploadTitle';

const Edit = () => {
    const navigate = useNavigate();
    const { colorPaletteId } = useParams();
    const { user } = useAuthContext();
    const [colorPalette, setColorPalette] = useState({});
    const [owner, setOwner] = useState(false);
    const [src, setSrc] = useState('');

    useEffect(() => {
        colorPaletteService.getOne(colorPaletteId)
            .then(result => {
                setColorPalette(result);
                setSrc(result.imageFile);
            });
    }, [colorPaletteId]);

    useEffect(() => {
        setOwner(user._id === colorPalette.creator);
    }, [colorPalette, user._id]);


    const onUpdateSubmit = async (e) => {
        e.preventDefault();

        try {
            if (user._id !== colorPalette.creator) {
                navigate(`/details/${colorPalette._id}`);
                throw new Error('You can not modify this record');
            }

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

                    <UploadTitle colorPalette={colorPalette} />
                    <UploadCategory />
                    <UploadColors />

                    <section className="upload__buttons">
                        <Link to={`/details/${colorPaletteId}`} className="details__info--back"></Link>
                        <input className="button upload__submit-btn"
                            type="submit" value="Save" />
                    </section>
                </fieldset>
            </form>
        </section >
    );
};

export default Edit;