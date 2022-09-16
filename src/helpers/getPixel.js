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