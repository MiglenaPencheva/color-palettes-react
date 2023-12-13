import { useState } from 'react';
import { exportResult } from '../../helpers/exportResult';
import { getPixel } from '../../helpers/getPixel';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useLanguageContext } from '../../contexts/LanguageContext';

import { getRgbFromString, rgbToHex } from '../ExploreColorPage/exploreHelpers';

const initialHexState = {
    hex: '#94c7db',
    rgb: 'rgb(148, 199, 219)',
};

const PaletteMaker = (e) => {
    const [data, setData] = useState([]);
    const { language } = useLanguageContext();
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
        if (data.length === 0) {
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

    const exportPalette = async () => {
        if (data.length === 0) {
            return;
        }
        const element = document.getElementById('canvasSection');
        exportResult(element);
    };

    const exportScheme = async () => {
        if (data.length === 0) {
            return;
        }
        const element = document.getElementById('colors');
        exportResult(element);
    };

    return (

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
                    {language.lang === 'en' ? (
                        <label className="button ">
                            <input
                                type="file"
                                onChange={onFileUpload}
                                accept="image/jpeg, image/png, image/jpg"
                            />
                            Upload file
                        </label>
                    ) : (
                        <label className="button ">
                            <input
                                type="file"
                                onChange={onFileUpload}
                                accept="image/jpeg, image/png, image/jpg"
                            />
                            Прикачи файл
                        </label>
                    )}
                    <img id="image" alt="" />
                </section>

                {language.lang === 'en' ? (
                    <span className="picker__instructions">
                        Move the mouse
                        <br /> over the image.
                        <br /> Click to pick sample.
                    </span>
                ) : (
                    <span className="picker__instructions">
                        Движи мишката
                        <br /> върху изображението.
                        <br /> Кликни за избор на цвят.
                    </span>
                )}

                <span className="picker__preview-box"
                    id="pixelColor"
                    style={{ backgroundColor: `${pickedColor}` }}>
                </span>

                {language.lang === 'en' ? (
                    <section className="picker__buttons">
                        <button className="button" onClick={exportPalette}>Export palette</button>
                        <button className="button" onClick={exportScheme}>Export scheme</button>
                    </section>
                ) : (
                    <section className="picker__buttons">
                        <button className="button" onClick={exportPalette}>Запази палитра</button>
                        <button className="button" onClick={exportScheme}>Запази схема</button>
                    </section>
                )}

            </aside>

        </section>
    );
};

export default PaletteMaker;


