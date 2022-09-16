import html2canvas from 'html2canvas';

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

export const getRgbColor = async (element) => {
    const canvas = await html2canvas(element);
    let x = 160;
    let y = 50;
    const ctx = canvas.getContext('2d');
    const data = ctx.getImageData(x, y, 1, 1).data;
    const rgb = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
    // const hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    return await rgb;
};