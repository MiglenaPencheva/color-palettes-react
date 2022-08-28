export const calculateRotationDegrees = (picked) => {
    const mainColor = getColorName[picked];
    const degrees = 360 + getRotationDegrees[mainColor];
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
    'Choose scheme': null,
    'complementary': null,
    'splitComplementary': null,
    'monochromatic': null,
    'analogous': null,
    'triadic': null,
    'tetradic': null,
    'square': null,
};