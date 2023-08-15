import { useState } from 'react';
import { rgbToHex, rgbToHsl, rgbToCmyk } from '../ExploreColorPage/exploreHelpers';

const SwatchesCard = () => {
    const [data, setData] = useState([]);
    const [pickedColor, setPickedColor] = useState('#ffefe6');
    let [r, setR] = useState(148);
    let [g, setG] = useState(199);
    let [b, setB] = useState(219);

    const onFileUpload = (e) => {
        const file = e.target.files[0];
        const src = URL.createObjectURL(file);

        const img = document.getElementById('img ');
        img.src = src;
        img.style.display = 'block';

        const resultSection = document.getElementById('resultSection');
        resultSection.style.display = 'none';

        img.onLoad = () => {
            const rangeSection = document.getElementById('pixelRangeSection');
            rangeSection.style.display = 'flex';

            const ratio = img.naturalWidth / img.naturalHeight;

            const canvas = document.getElementById('pixelatedImageCanvas');
            if (ratio > 1) {
                canvas.width = 600;
                canvas.height = canvas.width / ratio;
            } else {
                canvas.height = 400;
                canvas.width = canvas.height * ratio;
            }

            const colors = document.getElementById('colors');
            while (colors.firstChild) { colors.removeChild(colors.firstChild); };

            let context = canvas.getContext('2d');
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            setData(imageData.data);
        };
    };

    function pixelateImage(e) {
        const canvas = document.getElementById('pixelatedImageCanvas');
        const range = document.getElementById('pixelRangeSlider');
        const blockSize = Number(range.value);

        // calculate average color for every square
        if (blockSize > 0) {
            for (let y = 0; y < canvas.height; y += blockSize) {
                for (let x = 0; x < canvas.width; x += blockSize) {
                    const baseIndex = (y * canvas.width + x) * 4;
                    const pixel = getAverageColor(data, baseIndex, canvas.width, blockSize);
                    fillBlock(data, pixel, baseIndex, canvas.width, blockSize);
                }
            }
            const resultSection = document.getElementById('resultSection');
            resultSection.style.display = 'flex';
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
        let ctx = canvas.getContext('2d');
        ctx.putImageData(data, 0, 0);
    };

    function definePixel(e) {
        const canvas = document.getElementById('pixelatedImageCanvas');
        const bounding = canvas.getBoundingClientRect();
        const x = e.clientX - bounding.left;
        const y = e.clientY - bounding.top;
        const context = canvas.getContext('2d');
        const pixelData = context.getImageData(x, y, 1, 1).data;
        const rgbArr = Array.from(pixelData);
        let pixelRgb = `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`;
        const pixelColorPreview = document.getElementById('pixelColor');
        pixelColorPreview.style['background-color'] = pixelRgb;
        setPickedColor(pixelRgb);
        setR(rgbArr[0]);
        setG(rgbArr[1]);
        setB(rgbArr[2]);
    };

    function addColors() {
        const colors = document.getElementById('colors');

        // color
        let colorLi = document.createElement('li');
        colorLi.className = 'color-box';
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
        textLi.textContent = `${hex} || ${pickedColor} || ${hsl} || ${cmyk}`;
        textLi.classList.add('textLi');

        colorLi.appendChild(closeBtn);
        colors.appendChild(colorLi);
        colors.appendChild(textLi);
    };

    function exportColorCard() {
        const colors = document.getElementById('colors');
        if (!colors.firstChild) { return; }

        const cnv = document.createElement('canvas');
        const exportCtx = cnv.getContext('2d');
        cnv.width = 600;
        cnv.height = colors.offsetHeight + 20;

        exportCtx.fillStyle = '#608d9e';
        exportCtx.fillText('COLOR SWATCHES', 0, 10);
        exportCtx.fillText('Card of color samples with values', 0, 20);

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

            <section id="uploadSection">
                <label className="swatches__fileInputLabel">
                    <input type="file" name="imageFile" id="fileInput"
                        onChange={onFileUpload}
                        accept="image/jpeg, image/png, image/jpg" />
                    Upload image
                </label>
                <img id="img" alt="imagePreview" />
                <section id="pixelRangeSection">
                    <span>set pixelation</span>
                    <input type="range" id="pixelRangeSlider" name="pixelRange"
                        min="0" step="5" max="100" defaultValue="24"
                        onMouseMove={pixelateImage} />
                </section>
            </section>

            <section id="resultSection">
                <canvas id="pixelatedImageCanvas" width="600" height="400"
                    onMouseOver={(e) => definePixel(e)} onClick={addColors}>
                </canvas>

                <div className="swatches__asideResult">
                    <span>Move the mouse <br /> over the image.</span>
                    <span id="pixelColor"></span>
                    <span>Click <br /> to pick sample.</span>
                    <button id="exportButton" onClick={exportColorCard}>Export color card</button>
                </div>

                <section id="cardSection">
                    <p className="swatches__h1">COLOR SWATCHES</p>
                    <p className="swatches__h2">Card of color samples with values</p>
                    <ul id="colors"></ul>
                </section>
            </section>
        </section>
    );
};

export default SwatchesCard;


