import { useState, useEffect } from 'react';

import * as pickerService from '../../../services/pickerService';
import { hideError, showError } from '../../../helpers/notifications';

const UploadImage = () => {
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     colorPaletteService.upload(image)
    //         .then(res => setImage(res));
    // }, [image]);

    const onFileUpload = (e) => {
        try {
            setLoading(true);

            setFile(e.target.files[0]);
            console.log(file);

            pickerService.upload(file)
                .then(res => setImage(res));

            console.log(image);

            setLoading(false);
            hideError();
        } catch (error) {
            showError(error.message);
        }
    };

    return (
        <>
            <input
                type="file"
                name="myImage"
                onChange={onFileUpload}
                accept="image/jpeg, image/png, image/jpg"
            />

            {loading && <h3> Loading...</h3>}
        </>

        // {
        //     image && (
        //         <section>
        //             <img alt="no file uploaded" src={URL.createObjectURL(image)}></img>
        //             <span className="box" id="pixelColor" data-label="Current Pixel"></span>
        //         </section>
        //     )
        // }
    );
};

export default UploadImage;