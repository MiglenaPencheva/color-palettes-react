import { useState, useEffect, useCallback } from 'react';
import { getRgbFromString, rgbToHex, rgbToHsl, rgbToCmyk } from '../ExploreColorPage/exploreHelpers';
import { getPixel } from '../../helpers/getPixel';
import { useLanguageContext } from '../../contexts/LanguageContext';

const SwatchesCard = () => {
    const { language } = useLanguageContext();
    const [originalImageData, setOriginalImageData] = useState(null);
    const [pixelatedImageData, setPixelatedImageData] = useState(null);
    const [pixelation, setPixelation] = useState(24);
    const [pickedColor, setPickedColor] = useState('#ffefe6');
    const [r, setR] = useState(148);
    const [g, setG] = useState(199);
    const [b, setB] = useState(219);

    const applyPixelation = useCallback((canvas, pixelation) => {
        canvas = document.getElementById('pixelatedImageCanvas');
        const context = canvas.getContext('2d');
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        if (data.length === 0) { return; }

        let blockSize = Number(pixelation);
        if (blockSize > 0) {
            for (let y = 0; y < canvas.height; y += blockSize) {
                for (let x = 0; x < canvas.width; x += blockSize) {
                    const baseIndex = (y * canvas.width + x) * 4;
                    const pixel = getAverageColor(data, baseIndex, canvas.width, blockSize);
                    fillBlock(data, pixel, baseIndex, canvas.width, blockSize);
                }
            }
        }

        function getAverageColor(data, baseIndex, width, blockSize) {
            let totalR = 0;
            let totalG = 0;
            let totalB = 0;

            for (let y = 0; y < blockSize; y++) {
                for (let x = 0; x < blockSize; x++) {
                    const index = baseIndex + (y * width + x) * 4;
                    totalR += data[index];
                    totalG += data[index + 1];
                    totalB += data[index + 2];
                }
            }

            const pixelCount = blockSize * blockSize;
            return [
                Math.floor(totalR / pixelCount),
                Math.floor(totalG / pixelCount),
                Math.floor(totalB / pixelCount),
            ];
        }
        function fillBlock(data, pixel, baseIndex, width, blockSize) {
            for (let y = 0; y < blockSize; y++) {
                for (let x = 0; x < blockSize; x++) {
                    const index = baseIndex + (y * width + x) * 4;
                    data[index] = pixel[0];
                    data[index + 1] = pixel[1];
                    data[index + 2] = pixel[2];
                }
            }
        }
        // draw pixelated image in canvas
        context.putImageData(imageData, 0, 0);
        setPixelatedImageData(imageData);
    }, []);

    const uploadImage = (e) => {
        const img = document.getElementById('img');
        document.getElementById('cardSection').style.display = 'flex';
        const colors = document.getElementById('swatchesColors');
        while (colors.firstChild) {
            colors.removeChild(colors.firstChild);
        }

        const file = e.target.files[0];
        const src = URL.createObjectURL(file);
        img.src = src;
        img.style.display = 'block';

        img.onload = () => {
            const canvas = document.getElementById('pixelatedImageCanvas');
            canvas.style.border = 'none';
            canvas.style['border-radius'] = 0;
            const ratio = img.naturalWidth / img.naturalHeight;
            if (ratio > 1) {
                canvas.width = 600;
                canvas.height = canvas.width / ratio;
            } else {
                canvas.height = 400;
                canvas.width = canvas.height * ratio;
            }
            const context = canvas.getContext('2d');
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            setOriginalImageData(imageData);

            applyPixelation(canvas, pixelation);
        };
    };

    const redrawPixelatedImage = useCallback((newPixelation, imageData) => {
        const canvas = document.getElementById('pixelatedImageCanvas');
        const context = canvas.getContext('2d');
        if (imageData) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.putImageData(imageData, 0, 0);
            applyPixelation(canvas, newPixelation);
        }
    }, [applyPixelation]);

    useEffect(() => {
        if (originalImageData !== null) {
            redrawPixelatedImage(pixelation, originalImageData);
        }
    }, [originalImageData, pixelation, redrawPixelatedImage]);

    function definePixel(e) {
        if (pixelatedImageData === null) { return; }
        let data = pixelatedImageData.data;
        if (data.length !== 0) {
            const picked = getPixel(e, data);
            setPickedColor(picked);
            let rbgValues = getRgbFromString(picked);
            setR(rbgValues.r);
            setG(rbgValues.g);
            setB(rbgValues.b);
        }
    };

    function addColors() {
        const colors = document.getElementById('swatchesColors');

        // color
        let colorLi = document.createElement('li');
        colorLi.className = 'colorLi';
        colorLi.style.backgroundColor = pickedColor;

        let closeBtn = document.createElement('button');
        closeBtn.className = 'close-button';
        closeBtn.textContent = 'x';

        colorLi.addEventListener('mouseover', () => {
            closeBtn.style.display = 'inline-block';
        });
        colorLi.addEventListener('mouseleave', () => {
            closeBtn.style.display = 'none';
        });
        closeBtn.addEventListener('click', (element) => {
            colors.removeChild(element.target.parentElement.nextSibling);
            colors.removeChild(element.target.parentElement);
        });

        // values
        let textLi = document.createElement('li');
        let hex = rgbToHex(r, g, b);
        let hsl = rgbToHsl(r, g, b).hslString;
        let cmyk = rgbToCmyk(r, g, b).cmykString;
        textLi.textContent = `#${hex} || ${pickedColor} || hsl(${hsl}) || cmyk(${cmyk})`;
        textLi.classList.add('textLi');

        colorLi.appendChild(closeBtn);
        colors.appendChild(colorLi);
        colors.appendChild(textLi);
    };

    function exportColorCard() {
        const colors = document.getElementById('swatchesColors');
        if (!colors.firstChild) { return; }

        const cnv = document.createElement('canvas');
        const exportCtx = cnv.getContext('2d');
        cnv.width = 600;
        cnv.height = colors.offsetHeight + 20;

        exportCtx.fillStyle = '#608d9e';

        language.lang === 'en'
            ? exportCtx.fillText('COLOR SWATCHES', 0, 10)
            : exportCtx.fillText('ЦВЕТНИ МОСТРИ', 0, 10);
        language.lang === 'en'
            ? exportCtx.fillText('Card of color samples with values', 0, 20)
            : exportCtx.fillText('Карта с цветове и стойности', 0, 20);

        const items = colors.getElementsByTagName('li');
        let y = 30;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const computedStyles = window.getComputedStyle(item);

            const itemHeight = parseFloat(computedStyles.height);

            exportCtx.fillStyle = computedStyles.backgroundColor;
            exportCtx.fillRect(0, y, cnv.width, itemHeight);

            if (item.textContent !== 'x') {
                exportCtx.fillStyle = computedStyles.color;
                exportCtx.fillText(item.textContent, 0, y + 15); // Adjust the position as needed
            }

            y += itemHeight;
        }

        const dataURL = cnv.toDataURL('image/png', 1.0);
        const downloadLink = document.createElement('a');
        downloadLink.href = dataURL;
        downloadLink.download = 'card_' + (Math.random() * 9999 | 0);
        downloadLink.click();
    };

    return (
        <section className="swatches__container">

            <section className="picker__file-input">
                {language.lang === 'en' ? (
                    <label className="button">
                        <input type="file"
                            onChange={uploadImage}
                            accept="image/jpeg, image/png, image/jpg"
                        />
                        Upload file
                    </label>
                ) : (
                    <label className="button">
                        <input type="file"
                            onChange={uploadImage}
                            accept="image/jpeg, image/png, image/jpg"
                        />
                        Прикачи файл
                    </label>
                )}
                <img id="img" alt="imagePreview" />
                <section id="pixelRangeSection">
                    {language.lang === 'en' ? (
                        <span>set pixelation</span>
                    ) : (
                        <span>задай ниво на пикселизация</span>
                    )}

                    <input type="range" id="pixelRangeSlider" name="pixelRange"
                        min="0" step="5" max="100" value={pixelation}
                        onChange={(e) => {
                            setPixelation(e.target.value);
                            redrawPixelatedImage(e.target.value);
                        }}
                    />
                </section>
            </section>

            <canvas id="pixelatedImageCanvas" width="200" height="320"
                onMouseMove={(e) => definePixel(e)} onClick={addColors}>
            </canvas>

            <section className="picker-aside">
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

                <section className="picker__buttons">
                    {language.lang === 'en' ? (
                        <button className="button" onClick={exportColorCard}>Export color card</button>
                    ) : (
                        <button className="button" onClick={exportColorCard}>Запази цветна карта</button>
                    )}
                </section>
            </section>

            <section id="cardSection">

                {language.lang === 'en' ? (
                    <>
                        <p className="swatches__h1">COLOR SWATCHES</p>
                        <p className="swatches__h2">Card of color samples with values</p>
                    </>
                ) : (
                    <>
                        <p className="swatches__h1">ЦВЕТНИ МОСТРИ</p>
                        <p className="swatches__h2">Карта с цветове и стойности</p>
                    </>
                )}

                <ul id="swatchesColors"></ul>
            </section>

        </section>
    );
};

export default SwatchesCard;


