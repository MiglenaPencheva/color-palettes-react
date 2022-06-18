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
            canvas.width = 700;
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
                colors.style.width = canvas.width;
                color.setAttribute('data-color', pickedColor);
                color.setAttribute('draggable', true);
                color.style.backgroundColor = pickedColor;
                color.draggable = true;

                let closeBtn = document.createElement('button');
                closeBtn.className = 'close-button';

                colors.addEventListener('ondragover', () => { e.preventDefault(); });
                colors.addEventListener('ondrop', (e) => {
                    e.preventDefault();
                    let data = e.dataTransfer.getData('li');
                    e.target.appendChild(document.getElementById(data));
                });
                color.addEventListener('mouseover', () => { closeBtn.style.display = 'inline-block'; });
                color.addEventListener('mouseleave', () => { closeBtn.style.display = 'none'; });
                color.addEventListener('ondragstart', (e) => { e.dataTransfer.setData('li', e.target.id); });
                closeBtn.addEventListener('click', () => { colors.removeChild(color); });

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
            <h6>Upload image file or link.
                Pick the colors you like.
                <br />
                Choose the best combination of colors
                and create your unique color palette.</h6>

            <input
                className="file-input"
                type="file"
                name="myImage"
                onChange={onFileUpload}
                accept="image/jpeg, image/png, image/jpg"
            />
            <img id="image" alt="no file selected" />

            <section className="container">
                <section className="canvas-section">
                    <canvas className="image-canvas" id="myCanvas"></canvas>
                    <section className="final-colors-vertical"></section>
                    <section className="final-colors-horizontal"></section>
                </section>

                <aside className="aside">
                    <span className="instructions">
                        Move the mouse over the image. Click to pick sample.
                    </span>
                    <span
                        className="preview-box"
                        id="pixelColor"
                        data-label="Preview">
                    </span>
                    <div className="direction">Choose direction</div>
                    <div className="count">Choose count</div>
                    <button className="save-color-palette">Generate color palette</button>
                    <button className="extract-color-card">Extract color card</button>
                </aside>
            </section>
            
            <section className="colors"></section>
        </>
    );
};

export default ColorPickerPage;