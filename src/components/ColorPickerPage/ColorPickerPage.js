import { useState, useEffect } from 'react';

// import { useAuthContext } from '../../contexts/AuthContext';
import * as pickerService from '../../services/pickerService';
import { hideError, showError } from '../../helpers/notifications';

const ColorPickerPage = () => {
    // const { user } = useAuthContext();
    
    const onFileUpload = async (e) => {
        try {
            const img = document.getElementById('image');
            img.style.display = 'none';
            let file = e.target.files[0];
            img.src = URL.createObjectURL(file);  // set src to blob url
            
            const imgObj = {
                file,
                src: img.src
            };
            const image = await pickerService.upload(imgObj);
            
            const canvas = document.getElementById('myCanvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 500;
            const newImg = new Image();   // Create new img element
            newImg.src = image.src;
            const nw = newImg.naturalWidth;
            const nh = newImg.naturalHeight;
            const aspect = nw / nh;
            canvas.height = canvas.width / aspect;
            ctx.drawImage(newImg, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            let pickedColor = '';
            
            hideError();
        } catch (error) {
            showError(error.message);
        }
    };

    
    //     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //     const data = imageData.data;


    return (
        <>
            <h1>Color picker</h1>
            <p>Upload image file or link.
                Pick the colors you like.
                Choose the best combination of colors
                and create your unique color palette.</p>

            <section>
                <input
                    type="file"
                    name="myImage"
                    onChange={onFileUpload}
                    accept="image/jpeg, image/png, image/jpg"
                />
                <img id="image" alt="no file selected"/>
                <canvas
                    id="myCanvas" >
                </canvas>
                <span
                    className="box"
                    id="pixelColor"
                    data-label="Current Pixel">
                </span>
            </section>

            <section className="colors">

            </section>
        </>
    );
};

export default ColorPickerPage;