import html2canvas from 'html2canvas';

export const getPixel = (e, data) => {
    let { offsetX, offsetY } = e.nativeEvent;
    let pixel = e.target.width * offsetY + offsetX;
    let arrayPos = pixel * 4;
    const c = {
        red: data[arrayPos],
        green: data[arrayPos + 1],
        blue: data[arrayPos + 2],
        alpha: data[arrayPos + 3],
    };
    const picked = `rgb(${c.red}, ${c.green}, ${c.blue})`;
    return picked;
};

export const exportResult = async (element) => {
    const imageFileName = 'scheme_' + (Math.random() * 9999 | 0);
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL('image/png', 1.0);
    const downloadImage = (blob, fileName) => {
        const fakeLink = document.createElement('a');
        fakeLink.style = 'display: none';
        fakeLink.download = fileName;
        fakeLink.href = blob;
        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);
        fakeLink.remove();
    };
    downloadImage(image, imageFileName);
};