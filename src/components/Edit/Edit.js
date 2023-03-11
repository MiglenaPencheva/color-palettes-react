import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import * as colorPaletteService from '../../services/colorPaletteService';
import { hideError, showError } from '../../helpers/notifications';
import { getColorGroup } from '../../helpers/prepareData';
import UploadColors from '../UploadPalette/common/UploadColors';
import UploadCategory from '../UploadPalette/common/UploadCategory';
import UploadTitle from '../UploadPalette/common/UploadTitle';

const Edit = () => {
    const navigate = useNavigate();
    const { colorPaletteId } = useParams();
    const { user } = useAuthContext();
    const [colorPalette, setColorPalette] = useState({});
    const [owner, setOwner] = useState(false);

    useEffect(() => {
        colorPaletteService.getOne(colorPaletteId)
            .then(result => {
                setColorPalette(result);
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

            const title = formData.get('title');
            if (title.trim() === '') { throw new Error('Title required'); }
            if (formData.get('title').length > 100) { throw new Error('Title should be less than 100 characters'); }
            
            const category = formData.get('category');
            if (category === 'Choose category' || formData.get('category') === '') { throw new Error('Category required'); }
            
            let colors = getColorGroup(formData);
            if (colors === '') { throw new Error('Choose color group'); }

            const data = { title, category, colors };

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
                            <img src={`data:image/jpeg;base64,${colorPalette.imageFile}`} alt="preview of file" />
                        </span>
                    </section>

                    <UploadTitle colorPalette={colorPalette} />
                    <UploadCategory />
                    <UploadColors />

                    <section className="upload__buttons">
                        <Link to={`/details/${colorPaletteId}`} id="backArrow"></Link>
                        <input className="button upload__submit-btn"
                            type="submit" value="Save" />
                    </section>
                </fieldset>
            </form>
        </section >
    );
};

export default Edit;