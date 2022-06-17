import { useState, useEffect } from 'react';

// import { useAuthContext } from '../../contexts/AuthContext';
import * as pickerService from '../../services/pickerService';
import { hideError, showError } from '../../helpers/notifications';

const ColorPickerPage = () => {
    // const { user } = useAuthContext();
    let pickedColor = '';

    const onFileUpload = async (e) => {
        try {
            const img = document.getElementById('image');
            img.style.display = 'none';
            let file = e.target.files[0];
            img.src = URL.createObjectURL(file);  // set src to blob url

            const imageObj = { file, src: img.src };
            const image = await pickerService.upload(imageObj);

            const canvas = document.getElementById('myCanvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 500;
            const newImg = new Image();
            newImg.src = image.src;
            const nw = newImg.naturalWidth;
            const nh = newImg.naturalHeight;
            const aspect = nw / nh;
            canvas.height = canvas.width / aspect;
            ctx.drawImage(newImg, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            canvas.addEventListener('mousemove', getPixel);
            canvas.addEventListener('click', addColorInfo);

            function getPixel(e) {
                let { offsetX, offsetY } = e;
                const c = getPixelColor(canvas.width, offsetY, offsetX);
                pickedColor = `rgb(${c.red}, ${c.green}, ${c.blue})`;
                document.getElementById('pixelColor').style.backgroundColor = pickedColor;
            };

            const getPixelColor = (cols, x, y) => {
                let pixel = cols * x + y;
                let arrayPos = pixel * 4;
                return {
                    red: data[arrayPos],
                    green: data[arrayPos + 1],
                    blue: data[arrayPos + 2],
                    alpha: data[arrayPos + 3],
                };
            };

            function addColorInfo() {
                let colors = document.querySelector('.colors');

                let color = document.createElement('li');
                color.className = 'box';
                color.setAttribute('data-color', pickedColor);
                color.style.backgroundColor = pickedColor;
                
                let closeBtn = document.createElement('button');
                closeBtn.className = 'close-button';
                
                color.addEventListener('mouseover', () => {closeBtn.style.display = 'inline-block';});
                color.addEventListener('mouseleave', () => {closeBtn.style.display = 'none';});
                closeBtn.addEventListener('click', () => {colors.removeChild(color);});
                
                color.appendChild(closeBtn);
                colors.appendChild(color);
            };


            hideError();
        } catch (error) {
            showError(error.message);
        }
    };

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
                <img id="image" alt="no file selected" />
                <br />

                <canvas id="myCanvas"></canvas>

                <span
                    className="box"
                    id="pixelColor"
                    data-label="Current Pixel">
                </span>
            </section >

            <section className="colors">

            </section>
        </>
    );
};

export default ColorPickerPage;