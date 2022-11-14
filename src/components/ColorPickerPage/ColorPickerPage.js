import { useState } from 'react';
import { exportResult } from '../../helpers/exportResult';
import { getPixel } from '../../helpers/getPixel';
import useLocalStorage from '../../hooks/useLocalStorage';

import { getRgbFromString, rgbToHex } from '../ExploreColorPage/exploreHelpers';

const initialHexState = {
    hex: '#94c7db',
    rgb: 'rgb(148, 199, 219)',
};

const ColorPickerPage = (e) => {
    const [data, setData] = useState([]);
    const [pickedColor, setPickedColor] = useState('#ffefe6');
    const [hex, setHex] = useState('#608d9e');
    const [hexToExplore, setHexToExplore] = useLocalStorage('hex', initialHexState);

    const onFileUpload = (e) => {
        // alert -> New uploading will delete your current work.
        // cancel / upload new file  

        const file = e.target.files[0];
        const src = URL.createObjectURL(file);  // set src to blob url

        const img = document.getElementById('image');
        img.src = src;

        img.onload = (e) => {
            const canvasSection = document.getElementById('canvasSection');
            const canvas = document.getElementById('myCanvas');
            const colors = document.getElementById('colors');

            canvas.style.border = 'none';
            canvas.style['border-radius'] = 0;

            let ratio = img.naturalWidth / img.naturalHeight;

            // calculate dimensions of the canvas
            if (ratio > 1) {
                canvas.height = window.innerHeight - 130;
                canvas.width = canvas.height * ratio;
                if (canvas.width > 780) {
                    canvas.width = 780;
                    canvas.height = canvas.width / ratio;
                }
                canvasSection.style['flex-direction'] = 'column';
                colors.style['flex-direction'] = 'row';
            } else {
                canvas.height = window.innerHeight;
                canvas.width = canvas.height * ratio;
                if ((canvas.width + 130) > 780) {
                    canvas.width = 780 - 130;
                    canvas.height = canvas.width / ratio;
                }
                canvasSection.style['flex-direction'] = 'row';
                colors.style['flex-direction'] = 'column';
            }

            while (colors.hasChildNodes()) {
                colors.removeChild(colors.firstChild);
            }

            // get imageData of the canvas
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            setData(imageData.data);
        };
    };

    const definePixel = (e) => {
        const picked = getPixel(e, data);
        setPickedColor(picked);
        let rbgValues = getRgbFromString(picked);
        const hexValues = rgbToHex(rbgValues.r, rbgValues.g, rbgValues.b);
        setHex(hexValues);
    };

    const addColorBox = (e) => {
        if (e.target.src === 'http://localhost:3000/color-picker') {
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

        let info = document.createElement('span');
        info.className = 'info';
        info.textContent = `#${hex}`;
        let valuesToExplore = { hex, rgb: pickedColor };
        info.addEventListener('click', () => {
            setHexToExplore(valuesToExplore);
            window.open('/color-explore', '_blank');
        });

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
        closeBtn.addEventListener('click', () => { colors.removeChild(color); });

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

    // const savePalette = async () => {
    //     document.getElementById('canvasImage').style.display = 'none';

    //     const el = document.getElementById('canvasSection');
    //     const canvas = await html2canvas(el);
    //     const png = canvas.toDataURL('image/png', 1.0);
    //     // console.log(png); // data:image/png;base64,iVBORw0KGgoAAA.....

    //     navigate('/save', { replace: true, state: { png } });

    //     // let image = new Image();
    //     // image.src = src;
    //     // const imageFileName = 'creation_' + (Math.random() * 9999 | 0);
    //     // image.download = imageFileName;
    //     // const fakeLink = document.createElement('a');
    //     // document.body.appendChild(fakeLink);

    //     // fetch(png)
    //     //     .then(res => res.blob())
    //     //     .then(blob => {
    //     //         let src = URL.createObjectURL(blob);
    //     //         console.log(src);
    //     //         navigate('/save', {
    //     //             replace: true,
    //     //             state: { src }
    //     //         });
    //     //     });
    // };

    const exportPalette = async () => {
        const element = document.getElementById('canvasSection');
        exportResult(element);
    };

    const exportScheme = async () => {
        const element = document.getElementById('colors');
        exportResult(element);
    };

    return (
        <section className="picker-section">
            <section className="section-header">
                <h2>Color picker</h2>
                <h6>Upload an image file. Pick the colors you like
                    and compose your desired combination.</h6>
                <h6 className="diffHeading">
                    Be the creator of your unique color palette.
                </h6>
            </section>

            <section id="pickerContainer" className="picker__container">

                <section className="picker__canvas-section" id="canvasSection">
                    <canvas className="picker__image-canvas" id="myCanvas"
                        onMouseMove={definePixel}
                        onClick={addColorBox}>
                    </canvas>

                    <ul className="picker__colors" id="colors"
                        onDrop={dropHandler}
                        onDragOver={(e) => e.preventDefault()}>
                    </ul>
                </section>

                <aside className="picker-aside">
                    <section className="picker__file-input">
                        <label className="button ">
                            <input
                                type="file"
                                onChange={onFileUpload}
                                accept="image/jpeg, image/png, image/jpg"
                            />
                            Upload file
                        </label>
                        <img id="image" alt="" />
                    </section>

                    <span className="picker__instructions">
                        Move the mouse
                        <br /> over the image.
                        <br /> Click to pick sample.
                    </span>

                    <span className="picker__preview-box"
                        id="pixelColor"
                        style={{ backgroundColor: `${pickedColor}` }}>
                    </span>

                    <section className="picker__buttons">
                        <button className="button" onClick={exportPalette}>Export palette</button>
                        <button className="button" onClick={exportScheme}>Export scheme</button>
                        {/* <button className="button" onClick={savePalette}>Save to gallery</button> */}
                    </section>
                </aside>

            </section>
        </section>
    );
};

export default ColorPickerPage;


