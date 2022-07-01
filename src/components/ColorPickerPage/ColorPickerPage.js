import { useState, useEffect } from 'react';

// import { useAuthContext } from '../../contexts/AuthContext';
import * as pickerService from '../../services/pickerService';
import { hideError, showError } from '../../helpers/notifications';

const ColorPickerPage = () => {
    // const { user } = useAuthContext();
    const [imageObj, setImageObj] = useState({});
    const [src, setSrc] = useState('');
    const [data, setData] = useState([]);
    const [pickedColor, setPickedColor] = useState('rgb(0, 0, 0)');
    const [direction, setDirection] = useState('horizontal');

    const onFileUpload = (e) => {
        // alert -> Do you want to save your work?
        //          New upload will delete any changes.
        // save color palette / upload new file  

        const file = e.target.files[0];
        const src = URL.createObjectURL(file);  // set src to blob url
        setSrc(src);
        setImageObj({ src });

        const img = document.getElementById('image');

        img.onload = (e) => {
            const canvas = document.getElementById('myCanvas');
            const colors = document.getElementById('colors');

            canvas.style.border = 'none';
            canvas.style['border-radius'] = 0;
            let ratio = img.naturalWidth / img.naturalHeight;

            if (ratio > 1) {
                setDirection('horizontal');
                canvas.width = 800;
                canvas.height = 800 / ratio;
                colors.width = 800;
                colors.height = 100;
                colors.style['flex-direction'] = 'row';
                colors.style['flex-grow'] = 1;
            } else {
                setDirection('vertical');
                canvas.width = 650 * ratio;
                canvas.height = 650;
                colors.width = 100;
                colors.height = 650;
                colors.style['flex-direction'] = 'column';
            }

            while (colors.hasChildNodes()) {
                colors.removeChild(colors.firstChild);
            }

            const ctx = canvas.getContext('2d');
            const canvasImage = document.getElementById('canvasImage');
            ctx.drawImage(canvasImage, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            setData(imageData.data);
        };
    };

    const getPixel = (e) => {
        let { offsetX, offsetY } = e.nativeEvent;
        let pixel = e.target.width * offsetY + offsetX;
        let arrayPos = pixel * 4;
        const c = {
            red: data[arrayPos],
            green: data[arrayPos + 1],
            blue: data[arrayPos + 2],
            alpha: data[arrayPos + 3],
        };
        setPickedColor(`rgb(${c.red}, ${c.green}, ${c.blue})`);
    };

    const addColorBox = (e) => {
        if (e.target.childNodes[0].src === 'http://localhost:3000/color-picker') {
            return;
        }

        let colors = document.getElementById('colors');

        let color = document.createElement('li');
        color.id = 'asdf' + (Math.random() * 9999 | 0);
        color.className = 'color-box';
        color.style.backgroundColor = pickedColor;

        let closeBtn = document.createElement('button');
        closeBtn.className = 'close-button';
        closeBtn.innerHTML = 'x';

        let info = document.createElement('a');
        info.className = 'info';
        info.textContent = 'info';

        // drag and drop
        color.setAttribute('draggable', true);
        color.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/html', e.target.id);
        });

        // hover and delete
        color.addEventListener('mouseover', () => {
            closeBtn.style.display = 'inline-block';
            info.style.display = 'inline-block';
        });
        color.addEventListener('mouseleave', () => {
                closeBtn.style.display = 'none';
            info.style.display = 'none';
        });
        closeBtn.addEventListener('click', () => {colors.removeChild(color); });

        color.appendChild(closeBtn);
        color.appendChild(info);
        colors.appendChild(color);
    };

    const dropHandler = (e) => {
        e.preventDefault();
        let data = e.dataTransfer.getData('text/html');
        if (e.target.className === 'color-box') {
            e.target.before(document.getElementById(data));
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

            <label className="button file-input">
                <input
                    type="file"
                    onChange={onFileUpload}
                    accept="image/jpeg, image/png, image/jpg"
                />
                Upload file
            </label>
            <img id="image" src={src} alt="" />

            <section id="pickerContainer">

                <section className="canvas-section" id="canvasSection">
                    <canvas className="image-canvas" id="myCanvas"
                        onMouseMove={getPixel}
                        onClick={addColorBox}>
                        <img id="canvasImage" src={src} alt="" />
                    </canvas>
                            
                    <ul className="colors" id="colors"
                        onDrop={dropHandler}
                        onDragOver = {(e) => e.preventDefault()}>
                    </ul>
            </section>

            <aside className="aside">
                <span className="instructions">
                    Move the mouse
                    <br /> over the image.
                    <br /> Click to pick sample.
                </span>
                <span className="preview-box"
                    id="pixelColor"
                    style={{ backgroundColor: `${pickedColor}` }}>
                </span>
                <section className="buttons">
                    <button className="button save-color-palette">Save</button>
                    <button className="button save-color-palette">Download and save</button>
                    <button className="button save-color-palette">Download without saving</button>
                </section>

                {/* <section className="direction">
                        Choose direction <br />
                        <input type="radio"
                            checked={direction === 'horizontal'}
                            value="horizontal"
                            onChange={(e) => { setDirection(e.target.value); }} />
                        <label>horizontal</label>
                        <input type="radio"
                            checked={direction === 'vertical'}
                            value="vertical"
                            onChange={(e) => { setDirection(e.target.value); }} />
                        <label>vertical</label>
                    </section> */}
            </aside>

        </section>
        </>
    );
};

export default ColorPickerPage;