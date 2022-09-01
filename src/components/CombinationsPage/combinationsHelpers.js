export const calculateRotationDegrees = (pickedName) => {
    const degrees = getRotationDegrees[pickedName];
    return degrees;
};
export const getColorName = {
    'rgb(254, 254, 51)': 'yellow',
    'rgb(252, 204, 26)': 'yellow-orange',
    'rgb(251, 153, 2)': 'orange',
    'rgb(252, 96, 10)': 'red-orange',
    'rgb(254, 39, 18)': 'red',
    'rgb(194, 20, 96)': 'red-purple',
    'rgb(134, 1, 175)': 'purple',
    'rgb(68, 36, 214)': 'blue-purple',
    'rgb(2, 71, 254)': 'blue',
    'rgb(52, 124, 152)': 'blue-green',
    'rgb(102, 176, 50)': 'green',
    'rgb(178, 215, 50)': 'yellow-green',
};
const getRotationDegrees = {
    'yellow': 360,
    'yellow-orange': 330,
    'orange': 300,
    'red-orange': 270,
    'red': 240,
    'red-purple': 210,
    'purple': 180,
    'blue-purple': 150,
    'blue': 120,
    'blue-green': 90,
    'green': 60,
    'yellow-green': 30,
};

export const drawScheme = {
    'Choose scheme': clearScheme,
    'complementary': drawComplementary,
    'splitComplementary': drawSplitComplementary,
    'monochromatic': drawMonochromatic,
    'analogous3': drawAnalogous3,
    'analogous5': drawAnalogous5,
    'triadic': drawTriadic,
    'tetradic1': drawTetradic1,
    'tetradic2': drawTetradic2,
    'square': drawSquare,
};
export function clearScheme(ctx) {
    ctx.clearRect(10, 10, 140, 140);
}
export function drawComplementary(ctx) {
    ctx.beginPath();
    ctx.moveTo(82, 24);
    ctx.lineTo(82, 140);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawSplitComplementary(ctx) {
    ctx.beginPath();
    ctx.moveTo(82, 24);
    ctx.lineTo(82, 80);
    ctx.lineTo(54, 130);
    ctx.moveTo(82, 80);
    ctx.lineTo(110, 130);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawMonochromatic(ctx) {
    ctx.beginPath();
    ctx.moveTo(82, 24);
    ctx.lineTo(82, 80);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawAnalogous3(ctx) {
    ctx.beginPath();
    ctx.moveTo(82, 24); // middle
    ctx.lineTo(82, 80);
    ctx.moveTo(54, 32); // left
    ctx.lineTo(82, 80);
    ctx.moveTo(110, 32); // right
    ctx.lineTo(82, 80);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawAnalogous5(ctx) {
    ctx.beginPath();
    ctx.moveTo(82, 24); // middle
    ctx.lineTo(82, 80);
    ctx.moveTo(54, 32); // left 1
    ctx.lineTo(82, 80);
    ctx.moveTo(35, 52); // left 2
    ctx.lineTo(82, 80);
    ctx.moveTo(110, 32);    // right 1
    ctx.lineTo(82, 80);
    ctx.moveTo(130, 52);    // right 2
    ctx.lineTo(82, 80);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawTriadic(ctx) {
    ctx.beginPath();
    ctx.moveTo(82, 24);     // middle
    ctx.lineTo(82, 80);
    ctx.lineTo(35, 110);    // left
    ctx.moveTo(82, 80);     //right
    ctx.lineTo(130, 110);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawTetradic1(ctx) {
    ctx.beginPath();
    ctx.moveTo(82, 24);     // first
    ctx.lineTo(82, 140);
    ctx.moveTo(35, 52);
    ctx.lineTo(130, 110);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawTetradic2(ctx) {
    ctx.beginPath();
    ctx.moveTo(82, 24);     // first
    ctx.lineTo(82, 140);
    ctx.moveTo(130, 52);
    ctx.lineTo(35, 110);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawSquare(ctx) {
    ctx.beginPath();
    ctx.moveTo(82, 24);
    ctx.lineTo(82, 140);
    ctx.moveTo(26, 82);
    ctx.lineTo(138, 82);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
