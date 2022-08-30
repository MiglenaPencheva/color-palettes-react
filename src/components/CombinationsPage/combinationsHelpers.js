export const calculateRotationDegrees = (picked) => {
    const mainColor = getColorName[picked];
    const degrees = getRotationDegrees[mainColor];
    return degrees;
};

const getColorName = {
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
    'yellow': 0,
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

export const schemeForms = {
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

export function clearScheme() {
    const complementary = document.getElementById('complementary');
    complementary.style.display = 'none';
    const splitComplementary = document.getElementById('splitComplementary');
    splitComplementary.style.display = 'none';
    const monochromatic = document.getElementById('monochromatic');
    monochromatic.style.display = 'none';
    const analogous3 = document.getElementById('analogous3');
    analogous3.style.display = 'none';
    const analogous5 = document.getElementById('analogous5');
    analogous5.style.display = 'none';
    const triadic = document.getElementById('triadic');
    triadic.style.display = 'none';
    const tetradic1 = document.getElementById('tetradic1');
    tetradic1.style.display = 'none';
    const tetradic2 = document.getElementById('tetradic2');
    tetradic2.style.display = 'none';
    const square = document.getElementById('square');
    square.style.display = 'none';
}

export function drawComplementary() {
    const complementary = document.getElementById('complementary');
    complementary.style.display = 'block';
    complementary.style['z-index'] = 100;
}

function drawSplitComplementary() {
    const splitComplementary = document.getElementById('splitComplementary');
    splitComplementary.style.display = 'block';
}
function drawMonochromatic() {
    const monochromatic = document.getElementById('monochromatic');
    monochromatic.style.display = 'block';
}
function drawAnalogous3() {
    const analogous3 = document.getElementById('analogous3');
    analogous3.style.display = 'block';
}
function drawAnalogous5() {
    const analogous5 = document.getElementById('analogous5');
    analogous5.style.display = 'block';
}
function drawTriadic() {
    const triadic = document.getElementById('triadic');
    triadic.style.display = 'block';
}
function drawTetradic1() {
    const tetradic1 = document.getElementById('tetradic1');
    tetradic1.style.display = 'block';
}
function drawTetradic2() {
    const tetradic2 = document.getElementById('tetradic2');
    tetradic2.style.display = 'block';
}
function drawSquare() {
    const square = document.getElementById('square');
    square.style.display = 'block';
}