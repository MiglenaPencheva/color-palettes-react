export const getRotationDegrees = {
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
export const getColorNameFromRgb = {
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
export const getRgbFromColorName = {
    'yellow': 'rgb(254, 254, 51)',
    'yellow-orange': 'rgb(252, 204, 26)',
    'orange': 'rgb(251, 153, 2)',
    'red-orange': 'rgb(252, 96, 10)',
    'red': 'rgb(254, 39, 18)',
    'red-purple': 'rgb(194, 20, 96)',
    'purple': 'rgb(134, 1, 175)',
    'blue-purple': 'rgb(68, 36, 214)',
    'blue': 'rgb(2, 71, 254)',
    'blue-green': 'rgb(52, 124, 152)',
    'green': 'rgb(102, 176, 50)',
    'yellow-green': 'rgb(178, 215, 50)',

    'll-yellow': 'rgb(254, 254, 201)',
    'l-yellow': 'rgb(254, 254, 151)',
    'd-yellow': 'rgb(228, 228, 1)',
    'l-yellow-orange': 'rgb(253, 221, 104)',
    'll-yellow-orange': 'rgb(253, 232, 155)',
    'd-yellow-orange': 'rgb(226, 178, 3)',
    'd-orange': 'rgb(227, 137, 2)',
    'l-orange': 'rgb(253, 193, 104)',
    'll-orange': 'rgb(254, 224, 179)',
    'd-red-orange': 'rgb(202, 72, 2)',
    'l-red-orange': 'rgb(254, 159, 109)',
    'll-red-orange': 'rgb(254, 206, 179)',
    'd-red': 'rgb(203, 18, 1)',
    'l-red': 'rgb(254, 129, 118)',
    'll-red': 'rgb(255, 185, 179)',
    'l-red-purple': 'rgb(237, 80, 148)',
    'd-red-purple': 'rgb(162, 17, 80)',
    'll-red-purple': 'rgb(245, 163, 198)',
    'd-purple': 'rgb(78, 1, 101)',
    'l-purple': 'rgb(207, 52, 254)',
    'll-purple': 'rgb(237, 179, 255)',
    'd-blue-purple': 'rgb(53, 28, 166)',
    'l-blue-purple': 'rgb(144, 124, 233)',
    'll-blue-purple': 'rgb(200, 190, 244)',
    'd-blue': 'rgb(1, 55, 203)',
    'l-blue': 'rgb(103, 143, 254)',
    'll-blue': 'rgb(179, 199, 255)',
    'd-blue-green': 'rgb(39, 93, 114)',
    'l-blue-green': 'rgb(103, 175, 203)',
    'll-blue-green': 'rgb(179, 215, 229)',
    'd-green': 'rgb(79, 135, 38)',
    'l-green': 'rgb(155, 215, 112)',
    'll-green': 'rgb(199, 233, 175)',
    'd-yellow-green': 'rgb(148, 179, 35)',
    'l-yellow-green': 'rgb(208, 230, 127)',
    'll-yellow-green': 'rgb(231, 242, 191)',
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
    ctx.moveTo(81, 30);
    ctx.lineTo(81, 130);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawSplitComplementary(ctx) {
    ctx.beginPath();
    ctx.moveTo(81, 30);
    ctx.lineTo(81, 80);
    ctx.lineTo(55, 125);
    ctx.moveTo(81, 80);
    ctx.lineTo(106, 125);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawMonochromatic(ctx) {
    ctx.beginPath();
    ctx.moveTo(81, 30);
    ctx.lineTo(81, 80);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawAnalogous3(ctx) {
    ctx.beginPath();
    ctx.moveTo(81, 30); // middle
    ctx.lineTo(81, 80);
    ctx.moveTo(55, 37); // left
    ctx.lineTo(81, 80);
    ctx.moveTo(107, 37); // right
    ctx.lineTo(81, 80);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawAnalogous5(ctx) {
    ctx.beginPath();
    ctx.moveTo(81, 30); // middle
    ctx.lineTo(81, 80);
    ctx.moveTo(55, 37); // left 1
    ctx.lineTo(81, 80);
    ctx.moveTo(38, 56); // left 2
    ctx.lineTo(81, 81);
    ctx.moveTo(107, 37); // right 1
    ctx.lineTo(81, 80);
    ctx.moveTo(125, 56);    // right 2
    ctx.lineTo(81, 81);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawTriadic(ctx) {
    ctx.beginPath();
    ctx.moveTo(81, 30);     // middle
    ctx.lineTo(81, 80);
    ctx.lineTo(38, 105);    // left
    ctx.moveTo(81, 80);     //right
    ctx.lineTo(125, 105);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawTetradic1(ctx) {
    ctx.beginPath();
    ctx.moveTo(81, 30);     // first
    ctx.lineTo(81, 130);
    ctx.moveTo(38, 55);
    ctx.lineTo(125, 105);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawTetradic2(ctx) {
    ctx.beginPath();
    ctx.moveTo(81, 30);     // first
    ctx.lineTo(81, 130);
    ctx.moveTo(125, 55);
    ctx.lineTo(36, 105);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
export function drawSquare(ctx) {
    ctx.beginPath();
    ctx.moveTo(81, 30);
    ctx.lineTo(81, 130);
    ctx.moveTo(30, 81);
    ctx.lineTo(130, 81);
    ctx.strokeStyle = '#608d9e';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}

// export const getYellowCombinations = {
//     'Choose scheme': [],
//     'complementary': ['rgb(254, 254, 51)', 'rgb(134, 1, 175)'],
//     'splitComplementary': ['rgb(254, 254, 51)', 'rgb(194, 20, 96)', 'rgb(68, 36, 214)'],
//     'monochromatic': ['rgb(254, 254, 51)'],
//     'analogous3': ['rgb(178, 215, 50)', 'rgb(254, 254, 51)', 'rgb(252, 204, 26)'],
//     'analogous5': ['rgb(102, 176, 50)', 'rgb(178, 215, 50)', 'rgb(254, 254, 51)', 'rgb(252, 204, 26)', 'rgb(251, 153, 2)'],
//     'triadic': ['rgb(254, 254, 51)', 'rgb(254, 39, 18)', 'rgb(2, 71, 254)'],
//     'tetradic1': ['rgb(254, 254, 51)', 'rgb(134, 1, 175)', 'rgb(102, 176, 50)', 'rgb(254, 39, 18)'],
//     'tetradic2': ['rgb(254, 254, 51)', 'rgb(134, 1, 175)', 'rgb(251, 153, 2)', 'rgb(2, 71, 254)'],
//     'square': ['rgb(254, 254, 51)', 'rgb(252, 96, 10)', 'rgb(134, 1, 175)', 'rgb(52, 124, 152)'],
// };
export const yellowCombinations = {
    'complementary': ['yellow', 'purple'],
    'splitComplementary': ['yellow', 'blue-purple', 'red-purple'],
    'monochromatic': ['d-yellow', 'yellow', 'l-yellow', 'll-yellow'],
    'analogous3': ['yellow-green', 'yellow', 'yellow-orange'],
    'analogous5': ['green', 'yellow-green', 'yellow', 'yellow-orange', 'orange'],
    'triadic': ['yellow', 'red', 'blue'],
    'tetradic1': ['yellow', 'purple', 'green', 'red'],
    'tetradic2': ['yellow', 'purple', 'orange', 'blue'],
    'square': ['yellow', 'purple', 'red-orange', 'blue-green'],
};
export const yellowOrangeCombinations = {
    'complementary': ['yellow-orange', 'blue-purple'],
    'splitComplementary': ['yellow-orange', 'purple', 'blue'],
    'monochromatic': ['d-yellow-orange', 'yellow-orange', 'l-yellow-orange', 'll-yellow-orange'],
    'analogous3': ['yellow', 'yellow-orange', 'orange'],
    'analogous5': ['yellow-green', 'yellow', 'yellow-orange', 'orange', 'red-orange'],
    'triadic': ['yellow-orange', 'red-purple', 'blue-green'],
    'tetradic1': ['yellow-orange', 'blue-purple', 'yellow-green', 'red-purple'],
    'tetradic2': ['yellow-orange', 'blue-purple', 'red-orange', 'blue-green'],
    'square': ['yellow-orange', 'blue-purple', 'red', 'green'],
};
export const orangeCombinations = {
    'complementary': ['orange', 'blue'],
    'splitComplementary': ['orange', 'blue-purple', 'blue-green'],
    'monochromatic': ['d-orange', 'orange', 'l-orange', 'll-orange'],
    'analogous3': ['yellow-orange', 'orange', 'red-orange'],
    'analogous5': ['yellow', 'yellow-orange', 'orange', 'red-orange', 'red'],
    'triadic': ['orange', 'purple', 'green'],
    'tetradic1': ['orange', 'blue', 'yellow', 'purple'],
    'tetradic2': ['orange', 'blue', 'red', 'green'],
    'square': ['orange', 'blue', 'red-purple', 'yellow-green'],
};
export const redOrangeCombinations = {
    'complementary': ['red-orange', 'blue-green'],
    'splitComplementary': ['red-orange', 'blue', 'green'],
    'monochromatic': ['d-red-orange', 'red-orange', 'l-red-orange', 'll-red-orange'],
    'analogous3': ['orange', 'red-orange', 'red'],
    'analogous5': ['yellow-orange', 'orange', 'red-orange', 'red', 'red-purple'],
    'triadic': ['red-orange', 'blue-purple', 'yellow-green'],
    'tetradic1': ['red-orange', 'blue-green', 'yellow-orange', 'blue-purple'],
    'tetradic2': ['red-orange', 'blue-green', 'red-purple', 'yellow-green'],
    'square': ['red-orange', 'blue-green', 'purple', 'yellow'],
};
export const redCombinations = {
    'complementary': ['red', 'green'],
    'splitComplementary': ['red', 'blue-green', 'yellow-green'],
    'monochromatic': ['d-red', 'red', 'l-red', 'll-red'],
    'analogous3': ['red-orange', 'red', 'red-purple'],
    'analogous5': ['orange', 'red-orange', 'red', 'red-purple', 'purple'],
    'triadic': ['red', 'blue', 'yellow'],
    'tetradic1': ['red', 'green', 'orange', 'blue'],
    'tetradic2': ['red', 'green', 'purple', 'yellow'],
    'square': ['red', 'green', 'blue-purple', 'yellow-orange'],
};
export const redPurpleCombinations = {
    'complementary': ['red-purple', 'yellow-green'],
    'splitComplementary': ['red-purple', 'green', 'yellow'],
    'monochromatic': ['d-red-purple', 'red-purple', 'l-red-purple', 'll-red-purple'],
    'analogous3': ['red', 'red-purple', 'purple'],
    'analogous5': ['red-orange', 'red', 'red-purple', 'purple', 'blue-purple'],
    'triadic': ['red-purple', 'blue-green', 'yellow-orange'],
    'tetradic1': ['red-purple', 'yellow-green', 'red-orange', 'blue-green'],
    'tetradic2': ['red-purple', 'yellow-green', 'blue-purple', 'yellow-orange'],
    'square': ['red-purple', 'yellow-green', 'blue', 'orange'],
};
export const purpleCombinations = {
    'complementary': ['purple', 'yellow'],
    'splitComplementary': ['purple', 'yellow-green', 'yellow-orange'],
    'monochromatic': ['d-purple', 'purple', 'l-purple', 'll-purple'],
    'analogous3': ['red-purple', 'purple', 'blue-purple'],
    'analogous5': ['red', 'red-purple', 'purple', 'blue-purple', 'blue'],
    'triadic': ['purple', 'green', 'orange'],
    'tetradic1': ['purple', 'yellow', 'red', 'green'],
    'tetradic2': ['purple', 'yellow', 'blue', 'orange'],
    'square': ['purple', 'yellow', 'blue-green', 'red-orange'],
};
export const bluePurpleCombinations = {
    'complementary': ['blue-purple', 'yellow-orange'],
    'splitComplementary': ['blue-purple', 'yellow', 'orange'],
    'monochromatic': ['d-blue-purple', 'blue-purple', 'l-blue-purple', 'll-blue-purple'],
    'analogous3': ['purple', 'blue-purple', 'blue'],
    'analogous5': ['red-purple', 'purple', 'blue-purple', 'blue', 'blue-green'],
    'triadic': ['blue-purple', 'yellow-green', 'red-orange'],
    'tetradic1': ['blue-purple', 'yellow-orange', 'red-purple', 'yellow-green'],
    'tetradic2': ['blue-purple', 'yellow-orange', 'blue-green', 'red-orange'],
    'square': ['blue-purple', 'yellow-orange', 'green', 'red'],
};
export const blueCombinations = {
    'complementary': ['blue', 'orange'],
    'splitComplementary': ['blue', 'yellow-orange', 'red-orange'],
    'monochromatic': ['d-blue', 'blue', 'l-blue', 'll-blue'],
    'analogous3': ['blue-purple', 'blue', 'blue-green'],
    'analogous5': ['purple', 'blue-purple', 'blue', 'blue-green', 'green'],
    'triadic': ['blue', 'yellow', 'red'],
    'tetradic1': ['blue', 'orange', 'purple', 'yellow'],
    'tetradic2': ['blue', 'orange', 'green', 'red'],
    'square': ['blue', 'orange', 'yellow-green', 'red-purple'],
};
export const blueGreenCombinations = {
    'complementary': ['blue-green', 'red-orange'],
    'splitComplementary': ['blue-green', 'orange', 'red'],
    'monochromatic': ['d-blue-green', 'blue-green', 'l-blue-green', 'll-blue-green'],
    'analogous3': ['blue', 'blue-green', 'green'],
    'analogous5': ['blue-purple', 'blue', 'blue-green', 'green', 'yellow-green'],
    'triadic': ['blue-green', 'yellow-orange', 'red-purple'],
    'tetradic1': ['blue-green', 'red-orange', 'blue-purple', 'yellow-orange'],
    'tetradic2': ['blue-green', 'red-orange', 'yellow-green', 'red-purple'],
    'square': ['blue-green', 'red-orange', 'yellow', 'purple'],
};
export const greenCombinations = {
    'complementary': ['green', 'red'],
    'splitComplementary': ['green', 'red-orange', 'red-purple'],
    'monochromatic': ['d-green', 'green', 'l-green', 'll-green'],
    'analogous3': ['blue', 'green', 'yellow-green'],
    'analogous5': ['blue', 'blue-green', 'green', 'yellow-green', 'yellow'],
    'triadic': ['green', 'orange', 'purple'],
    'tetradic1': ['green', 'red', 'blue', 'orange'],
    'tetradic2': ['green', 'red', 'yellow', 'purple'],
    'square': ['green', 'red', 'yellow-orange', 'blue-purple'],
};
export const yellowGreenCombinations = {
    'complementary': ['yellow-green', 'red-purple'],
    'splitComplementary': ['yellow-green', 'red', 'purple'],
    'monochromatic': ['d-yellow-green', 'yellow-green', 'l-yellow-green', 'll-yellow-green'],
    'analogous3': ['green', 'yellow-green', 'yellow'],
    'analogous5': ['blue-green', 'green', 'yellow-green', 'yellow', 'yellow-orange'],
    'triadic': ['yellow-green', 'red-orange', 'blue-purple'],
    'tetradic1': ['yellow-green', 'red-purple', 'blue-green', 'red-orange'],
    'tetradic2': ['yellow-green', 'red-purple', 'yellow-orange', 'blue-purple'],
    'square': ['yellow-green', 'red-purple', 'orange', 'blue'],
};

export const colorObjects = {
    'yellow': yellowCombinations,
    'yellow-orange': yellowOrangeCombinations,
    'orange': orangeCombinations,
    'red-orange': redOrangeCombinations,
    'red': redCombinations,
    'red-purple': redPurpleCombinations,
    'purple': purpleCombinations,
    'blue-purple': bluePurpleCombinations,
    'blue': blueCombinations,
    'blue-green': blueGreenCombinations,
    'green': greenCombinations,
    'yellow-green': yellowGreenCombinations,
};

export const getInfoCombinations = {
    'Choose scheme': '',
    'complementary': 'Complementary scheme takes colors from opposite side of the color wheel. This is the most contrasting of all color schemes. It attracts the most attention. One of the hues is the dominant color of the pair. The other one enhances or emphasizes the primary one and is used for accents. Both warm and cold colors take part in this most dynamic harmony. The design looks warm or cold according to the chosen dominant color. Attractive and hard for balancing, complementary scheme gives sharp contrast, brighter and prominent vision.',
    'splitComplementary': 'Split-complementary scheme is a variation of complementary scheme. Takes a base color and the two colors on both sides of the opposite one on the color wheel. It has the same sharp visual contrast and still gives the balance between warm or cold color temperatures. Cold base color should stand opposite of two variations of warm hues, for example. 3-color harmony offers less pressure, less tension and is not so vibrant. It is hard to harmonize and difficult for balancing. But still gives the best contrast, beautiful nuances and a pleasant feeling.',
    'monochromatic': 'Monochromatic scheme uses a single base color and various tints, tones and shades of the same hue, that are derived by adding white, grey or black. It is easy to create and easy to apply and perceive. This color scheme gives a soft and pleasant feeling. The lack of contrast makes more subtle and peaceful vision. Dynamics can be achieved combining dark shades and light tints or even black and white. Using one base color with its variations gives bold and dramatic effect, as well as stylish and elegant look.',
    'analogous3': 'Analogous scheme uses colors that are next to each other on the color wheel. It is easy to create and gives a pleasant and elegant appearance. One dominant color and the others as supporting or accents make this blend harmonious and calming. The lack of contrast keeps it less vibrant. This kind of combination occurs in nature and colors never clash one another. Neighboring hues fits better if they are either in the warm or the cold gamma.',
    'analogous5': 'Analogous scheme uses colors that are next to each other on the color wheel. It is easy to create and gives a pleasant and elegant appearance. One dominant color and the others as supporting or accents make this blend harmonious and calming. The lack of contrast keeps it less vibrant. This kind of combination occurs in nature and colors never clash one another. Neighboring hues fits better if they are either in the warm or the cold gamma.',
    'triadic': 'Triadic scheme is made up of three hues equally spaced around the wheel. One base color is balanced with two evenly spaced colors - accents. This combination offers high visual contrast and a harmony at the same time. The vibrance remains even if pale or unsaturated variations of hues are used. The triadic scheme is easier to accomplish and provides dynamics and richness of the colors.',
    'tetradic1': 'Tetradic scheme is also called a double complementary scheme. The four colors arranged in two complementary pairs make it difficult to harmonize. One of the colors should be dominant, the others may be pastels or unsaturated variants of the hues. The pairs form a rectangle or a square if the chosen colors stands on equal space one from another. The tetradic scheme is the richest of all combinations and give the opportunity to use many color variations.',
    'tetradic2': 'Tetradic scheme is also called a double complementary scheme. The four colors arranged in two complementary pairs make it difficult to harmonize. One of the colors should be dominant, the others may be pastels or unsaturated variants of the hues. The pairs form a rectangle or a square if the chosen colors stands on equal space one from another. The tetradic scheme is the richest of all combinations and give the opportunity to use many color variations.',
    'square': 'Tetradic scheme is also called a double complementary scheme. The four colors arranged in two complementary pairs make it difficult to harmonize. One of the colors should be dominant, the others may be pastels or unsaturated variants of the hues. The pairs form a rectangle or a square if the selected colors stands on equal space one from another. The tetradic scheme is the richest of all combinations and give the opportunity to choose many color variations.',
};



export const getResultRgb = (scheme) => {
    const countOfScheme = {
        'complementary': 2,
        'splitComplementary': 3,
        'monochromatic': 4,
        'analogous3': 3,
        'analogous5': 5,
        'triadic': 3,
        'tetradic1': 4,
        'tetradic2': 4,
        'square': 4,
    };

    let resultCanvas = document.getElementById('resultCanvas');
    let resultCtx = resultCanvas.getContext('2d');
    let count = countOfScheme[scheme];
    const w = Number(resultCanvas.width / count);
    let dataFirst = resultCtx.getImageData(20, 20, resultCanvas.height, resultCanvas.height).data;
    let dataSecond = resultCtx.getImageData(w + 20, 20, resultCanvas.height, resultCanvas.height).data;
    let dataThird = resultCtx.getImageData(2 * w + 20, 20, resultCanvas.height, resultCanvas.height).data;
    let dataFourth = resultCtx.getImageData(3 * w + 20, 20, resultCanvas.height, resultCanvas.height).data;
    let dataFifth = resultCtx.getImageData(4 * w + 20, 20, resultCanvas.height, resultCanvas.height).data;

    const rgbFirst = `rgb(${dataFirst[0]}, ${dataFirst[1]}, ${dataFirst[2]})`;
    const rgbSecond = `rgb(${dataSecond[0]}, ${dataSecond[1]}, ${dataSecond[2]})`;
    const rgbThird = `rgb(${dataThird[0]}, ${dataThird[1]}, ${dataThird[2]})`;
    const rgbFourth = `rgb(${dataFourth[0]}, ${dataFourth[1]}, ${dataFourth[2]})`;
    const rgbFifth = `rgb(${dataFifth[0]}, ${dataFifth[1]}, ${dataFifth[2]})`;

    return { rgbFirst, rgbSecond, rgbThird, rgbFourth, rgbFifth };
};

export const getRgbValueFromRgbString = (rgbString) => {
    let rgbArr = rgbString.split('(')[1].replace(')', '').replaceAll(' ', '').split(',');
    for (let i = 0; i < rgbArr.length; i++) {
        if (rgbArr[i] < 0) { rgbArr[i] = 0; }
        if (rgbArr[i] > 255) { rgbArr[i] = 255; }
    }
    let r = Number(rgbArr[0]);
    let g = Number(rgbArr[1]);
    let b = Number(rgbArr[2]);

    return { r, g, b };
};

export const drawColorsInResultCanvas = (arr) => {
    let resultCanvas = document.getElementById('resultCanvas');
    let resultCanvasCtx = resultCanvas.getContext('2d');

    for (let i = 0; i < arr.length; i++) {
        let color = arr[i];
        resultCanvasCtx.fillStyle = color;
        
        let start = (i * 100);
        let w = 100;
        let h = 100;
        if (window.innerWidth < 560) { start = i * 80; w = 80; h = 80; }
        if (window.innerWidth < 480) { start = i * 50; w = 50; h = 50; }
        
        resultCanvasCtx.fillRect(start, 0, w, h);
    }
};

