export const getColorObject = (input) => {
    input = input.trim();
    let color = {};
    const firstChar = input.split('')[0];
    const isBracket = input.match(/[()]/g);
    let prefix, rest;

    let name = hasName(input);   // check for name
    if (name) {
        color.name = input.toLowerCase();
    } else if (firstChar === '#') {    // check for hex 
        let restChars = input.split('#')[1];
        const isHexValues = restChars.match(/[0-9a-z]/gi) && restChars.length <= 6;
        if (isHexValues) {
            color.hex = restChars;
        }
    } else if (isBracket) {     // check for rgb and hsl
        prefix = input.split('(')[0];
        rest = input.split('(')[1].split(')')[0];

        if (prefix === 'rgb') {
            let rgbArr = rest.replace(' ', '').split(',');
            for (let i = 0; i < rgbArr.length; i++) {        // rgb(0, 191, 255)
                if (rgbArr[i] < 0) { rgbArr[i] = 0; }
                if (rgbArr[i] > 255) { rgbArr[i] = 255; }
            }
            let r = rgbArr[0];
            let g = rgbArr[1];
            let b = rgbArr[2];
            color.rgb = `rgb(${r}, ${g}, ${b})`;
            color.red = Number(r);
            color.green = Number(g);
            color.blue = Number(b);
        } else if (prefix === 'hsl') {
            let hslArr = rest.replace(' ', '').replaceAll('%', '').split(',');       // hsl(195, 100%, 50%)
            let h = Number(hslArr[0]);
            let s = Number(hslArr[1]);
            let l = Number(hslArr[2]);
            if (h < 0 || h > 359) { h = 0; }
            if (s < 0) { s = 0; }
            if (s > 100) { s = 100; }
            if (l < 0) { l = 0; }
            if (l > 100) { l = 100; }
            color.hsl = `${h}, ${s}%, ${l}%`;
            color.hue = Number(h.toFixed(0));
            color.saturation = Number((s / 100).toFixed(2));
            color.lightness = Number((l / 100).toFixed(2));
        }
    } else {
        return defaultColorObject;
    }
    return color;
};
export const defaultColorObject = {
    rgb: '',
    red: 0,
    green: 0,
    blue: 0,
    hex: '',
    name: '',
    hsl: '',
    hue: 0,
    saturation: 0,
    lightness: 0,
    cmyk: '',
    cyan: 0,
    magenta: 0,
    yellow: 0,
    black: 0,
};

export const hasName = (input) => {
    const colorNamesArr = getColorArr('names').map(x => x.toLowerCase());
    let name = colorNamesArr.includes(input.toLowerCase());
    return name;
};
export const rgbToName = (red, green, blue) => {
    let r, g, b;
    let hexes = getColorArr('hexes');
    for (let i = 0; i < hexes.length; i++) {
        r = parseInt(hexes[i].substr(0, 2), 16);
        g = parseInt(hexes[i].substr(2, 2), 16);
        b = parseInt(hexes[i].substr(4, 2), 16);
        if (red === r && green === g && blue === b) {
            return getColorArr('names')[i];
        }
    }
};
export const rgbToHex = (r, g, b) => {
    let hexR = r.toString(16);
    while (hexR.length < 2) { hexR = '0' + hexR; }
    let hexG = g.toString(16);
    while (hexG.length < 2) { hexG = '0' + hexG; }
    let hexB = b.toString(16);
    while (hexB.length < 2) { hexB = '0' + hexB; }
    return (hexR + hexG + hexB);
};
export const rgbToHsl = (r, g, b) => {
    let h, l, s;
    let rgb = [];
    rgb[0] = r / 255;
    rgb[1] = g / 255;
    rgb[2] = b / 255;
    let min = rgb[0];
    let max = rgb[0];
    let maxColor = 0;

    for (let i = 0; i < rgb.length - 1; i++) {
        if (rgb[i + 1] <= min) { min = rgb[i + 1]; }
        if (rgb[i + 1] >= max) { max = rgb[i + 1]; maxColor = i + 1; }
    }
    if (maxColor === 0) {
        h = (rgb[1] - rgb[2]) / (max - min);
    }
    if (maxColor === 1) {
        h = 2 + (rgb[2] - rgb[0]) / (max - min);
    }
    if (maxColor === 2) {
        h = 4 + (rgb[0] - rgb[1]) / (max - min);
    }
    if (isNaN(h)) { h = 0; }
    h = h * 60;
    if (h < 0) { h = h + 360; }
    l = (min + max) / 2;
    if (min === max) {
        s = 0;
    } else {
        if (l < 0.5) {
            s = (max - min) / (max + min);
        } else {
            s = (max - min) / (2 - max - min);
        }
    }
    h = Math.round(h);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    return {
        hue: h,
        saturation: s,
        lightness: l,
        hslString: `${h}, ${s}%, ${l}%`,
    };
};
export const rgbToCmyk = (r, g, b) => {
    let c, m, y, k;
    r = r / 255;
    g = g / 255;
    b = b / 255;
    let max = Math.max(r, g, b);
    k = 1 - max;
    if (k === 1) {
        c = 0;
        m = 0;
        y = 0;
    } else {
        c = (1 - r - k) / (1 - k);
        m = (1 - g - k) / (1 - k);
        y = (1 - b - k) / (1 - k);
    }
    c = Number((c * 100).toFixed(0));
    m = Number((m * 100).toFixed(0));
    y = Number((y * 100).toFixed(0));
    k = Number((k * 100).toFixed(0));

    return {
        cyan: c,
        magenta: m,
        yellow: y,
        black: k,
        cmykString: `${c}%, ${m}%, ${y}%, ${k}%`,
    };
};

export const nameToRgb = (name) => {
    let r, g, b, hex;
    let names = getColorArr('names');
    for (let i = 0; i < names.length; i++) {
        if (name.toLowerCase() === names[i].toLowerCase()) {
            let hexes = getColorArr('hexes');
            r = parseInt(hexes[i].substr(0, 2), 16);
            g = parseInt(hexes[i].substr(2, 2), 16);
            b = parseInt(hexes[i].substr(4, 2), 16);
            hex = hexes[i];
            break;
        }
    }
    return { r, g, b, hex };
};
export const hexToRgb = (hex) => {
    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);
    return { r, g, b };
};
export const hslToRgb = (hue, sat, light) => {
    let t1, t2, r, g, b;
    hue = hue / 60;
    if (light <= 0.5) {
        t2 = light * (sat + 1);
    } else {
        t2 = light + sat - (light * sat);
    }
    t1 = light * 2 - t2;
    r = Math.round(hueToRgb(t1, t2, hue + 2) * 255);
    g = Math.round(hueToRgb(t1, t2, hue) * 255);
    b = Math.round(hueToRgb(t1, t2, hue - 2) * 255);
    return { r: r, g: g, b: b };
};
export const hueToRgb = (t1, t2, hue) => {
    if (hue < 0) { hue += 6; }
    if (hue >= 6) { hue -= 6; }
    if (hue < 1) {
        return (t2 - t1) * hue + t1;
    } else if (hue < 3) {
        return t2;
    } else if (hue < 4) {
        return (t2 - t1) * (4 - hue) + t1;
    } else { return t1; }
};
export const cmykToRgb = (c, m, y, k) => {
    let r = Math.round(255 - ((Math.min(1, c * (1 - k) + k)) * 255));
    let g = Math.round(255 - ((Math.min(1, m * (1 - k) + k)) * 255));
    let b = Math.round(255 - ((Math.min(1, y * (1 - k) + k)) * 255));
    return { r, g, b };
};

export const getColorArr = (x) => {
    if (x === 'names') { return ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen']; }
    if (x === 'hexes') { return ['f0f8ff', 'faebd7', '00ffff', '7fffd4', 'f0ffff', 'f5f5dc', 'ffe4c4', '000000', 'ffebcd', '0000ff', '8a2be2', 'a52a2a', 'deb887', '5f9ea0', '7fff00', 'd2691e', 'ff7f50', '6495ed', 'fff8dc', 'dc143c', '00ffff', '00008b', '008b8b', 'b8860b', 'a9a9a9', 'a9a9a9', '006400', 'bdb76b', '8b008b', '556b2f', 'ff8c00', '9932cc', '8b0000', 'e9967a', '8fbc8f', '483d8b', '2f4f4f', '2f4f4f', '00ced1', '9400d3', 'ff1493', '00bfff', '696969', '696969', '1e90ff', 'b22222', 'fffaf0', '228b22', 'ff00ff', 'dcdcdc', 'f8f8ff', 'ffd700', 'daa520', '808080', '808080', '008000', 'adff2f', 'f0fff0', 'ff69b4', 'cd5c5c', '4b0082', 'fffff0', 'f0e68c', 'e6e6fa', 'fff0f5', '7cfc00', 'fffacd', 'add8e6', 'f08080', 'e0ffff', 'fafad2', 'd3d3d3', 'd3d3d3', '90ee90', 'ffb6c1', 'ffa07a', '20b2aa', '87cefa', '778899', '778899', 'b0c4de', 'ffffe0', '00ff00', '32cd32', 'faf0e6', 'ff00ff', '800000', '66cdaa', '0000cd', 'ba55d3', '9370db', '3cb371', '7b68ee', '00fa9a', '48d1cc', 'c71585', '191970', 'f5fffa', 'ffe4e1', 'ffe4b5', 'ffdead', '000080', 'fdf5e6', '808000', '6b8e23', 'ffa500', 'ff4500', 'da70d6', 'eee8aa', '98fb98', 'afeeee', 'db7093', 'ffefd5', 'ffdab9', 'cd853f', 'ffc0cb', 'dda0dd', 'b0e0e6', '800080', '663399', 'ff0000', 'bc8f8f', '4169e1', '8b4513', 'fa8072', 'f4a460', '2e8b57', 'fff5ee', 'a0522d', 'c0c0c0', '87ceeb', '6a5acd', '708090', '708090', 'fffafa', '00ff7f', '4682b4', 'd2b48c', '008080', 'd8bfd8', 'ff6347', '40e0d0', 'ee82ee', 'f5deb3', 'ffffff', 'f5f5f5', 'ffff00', '9acd32']; }
};

export const getRgbFromString = (string) => {
    let arr = string.replace('rgb', '').replace('(', '').replace(')', '').split(', ');
    let r = Number(arr[0]);
    let g = Number(arr[1]);
    let b = Number(arr[2]);
    return { r, g, b };
};
export const fillColorObject = (rgb) => {
    let color = {};
    color.rgb = rgb;
    color.red = getRgbFromString(rgb).r;
    color.green = getRgbFromString(rgb).g;
    color.blue = getRgbFromString(rgb).b;
    color.hex = rgbToHex(color.red, color.green, color.blue);
    color.name = rgbToName(color.red, color.green, color.blue);
    let hslResult = rgbToHsl(color.red, color.green, color.blue);
    color.hsl = hslResult.hslString;
    color.hue = hslResult.hue;
    color.saturation = hslResult.saturation;
    color.lightness = hslResult.lightness;
    let cmykResult = rgbToCmyk(color.red, color.green, color.blue);
    color.cmyk = cmykResult.cmykString;
    color.cyan = cmykResult.cyan;
    color.magenta = cmykResult.magenta;
    color.yellow = cmykResult.yellow;
    color.black = cmykResult.black;
    return color;
};

// export const roundDecimals = (c) => {
//     c.red = Number(c.red.toFixed(0));
//     c.green = Number(c.green.toFixed(0));
//     c.blue = Number(c.blue.toFixed(0));
//     c.hue = Number(c.hue.toFixed(0));
//     c.saturation = Number(c.saturation.toFixed(2));
//     c.lightness = Number(c.lightness.toFixed(2));
//     c.cyan = Number(c.cyan.toFixed(2));
//     c.magenta = Number(c.magenta.toFixed(2));
//     c.yellow = Number(c.yellow.toFixed(2));
//     c.black = Number(c.black.toFixed(2));
//     // c.opacity = Number(c.opacity.toFixed(2));
//     return c;
// };

// export const getGroup = {
//     'pink': ['#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#DB7093', '#C71585'],
//     'purple': ['#E6E6FA', '#D8BFD8', '#DDA0DD', '#DA70D6',
//         '#EE82EE', '#FF00FF', '#FF00FF', '#BA55D3',
//         '#9932CC', '#9400D3', '#8A2BE2', '#8B008B',
//         '#800080', '#9370DB', '#7B68EE', '#6A5ACD',
//         '#483D8B', '#663399', '4B0082'],
//     'red': ['#FFA07A', '#FA8072', '#E9967A', '#F08080',
//         '#CD5C5C', '#DC143C', '#FF0000', '#B22222', '#8B0000'],
//     'orange': ['#FFA500', '#FF8C00', '#FF7F50', '#FF6347', '#FF4500'],
//     'yellow': ['#FFD700', '#FFFF00', '#FFFFE0', '#FFFACD',
//         '#FAFAD2', '#FFEFD5', '#FFE4B5', '#FFDAB9',
//         '#EEE8AA', '#F0E68C', '#BDB76B'],
//     'green': ['#ADFF2F', '#7FFF00', '#7CFC00', '#00FF00',
//         '#32CD32', '#98FB98', '#90EE90', '#00FA9A',
//         '#00FF7F', '#3CB371', '#2E8B57', '#228B22',
//         '#008000', '#006400', '#9ACD32', '#6B8E23',
//         '#556B2F', '#66CDAA', '#8FBC8F', '#20B2AA',
//         '#008B8B', '#008080'],
//     'cyan': ['#00FFFF', '#00FFFF', '#E0FFFF', '#AFEEEE',
//         '#7FFFD4', '#40E0D0', '#48D1CC', '#00CED1'],
//     'blue': ['#5F9EA0', '#4682B4', '#B0C4DE', '#ADD8E6',
//         '#B0E0E6', '#87CEFA', '#87CEEB', '#6495ED',
//         '#00BFFF', '#1E90FF', '#4169E1', '#0000FF',
//         '#0000CD', '#00008B', '#000080', '#191970'],
//     'brown': ['#FFF8DC', '#FFEBCD', '#FFE4C4', '#FFDEAD',
//         '#F5DEB3', '#DEB887', '#D2B48C', '#BC8F8F',
//         '#F4A460', '#DAA520', '#B8860B', '#CD853F',
//         '#D2691E', '#808000', '#8B4513', '#A0522D',
//         '#A52A2A', '#800000'],
//     'white': ['#FFFFFF', '#FFFAFA', '#F0FFF0', '#F5FFFA',
//         '#F0FFFF', '#F0F8FF', '#F8F8FF', '#F5F5F5',
//         '#FFF5EE', '#F5F5DC', '#FDF5E6', '#FFFAF0',
//         '#FFFFF0', '#FAEBD7', '#FAF0E6', '#FFF0F5', '#FFE4E1'],
//     'grey': ['#DCDCDC', '#D3D3D3', '#C0C0C0', '#A9A9A9',
//         '#696969', '#808080', '#778899', '#708090',
//         '#2F4F4F', '#000000']
// };

export const getGroup = {
    'pink': ['Pink', 'LightPink', 'HotPink', 'DeepPink', 'PaleVioletRed', 'MediumVioletRed'],
    'purple': ['Lavender', 'Thistle', 'Plum', 'Orchid',
        'Violet', 'Fuchsia', 'Magenta', 'MediumOrchid',
        'DarkOrchid', 'DarkViolet', 'BlueViolet', 'DarkMagenta',
        'Purple', 'MediumPurple', 'MediumSlateBlue', 'SlateBlue',
        'DarkSlateBlue', 'RebeccaPurple', 'Indigo'],
    'red': ['LightSalmon', 'Salmon', 'DarkSalmon', 'LightCoral',
        'IndianRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed'],
    'orange': ['Orange', 'DarkOrange', 'Coral', 'Tomato', 'OrangeRed'],
    'yellow': ['Gold', 'Yellow', 'LightYellow', 'LemonChiffon',
        'LightGoldenRodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff',
        'PaleGoldenRod', 'Khaki', 'DarkKhaki'],
    'green': ['GreenYellow', 'Chartreuse', 'LawnGreen', 'Lime',
        'LimeGreen', 'PaleGreen', 'LightGreen', 'MediumSpringGreen',
        'SpringGreen', 'MediumSeaGreen', 'SeaGreen', 'ForestGreen',
        'Green', 'DarkGreen', 'YellowGreen', 'OliveDrab',
        'DarkOliveGreen', 'MediumAquaMarine', 'DarkSeaGreen', 'LightSeaGreen',
        'DarkCyan', 'Teal'],
    'cyan': ['Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise',
        'Aquamarine', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise'],
    'blue': ['CadetBlue', 'SteelBlue', 'LightSteelBlue', 'LightBlue',
        'PowderBlue', 'LightSkyBlue', 'SkyBlue', 'CornflowerBlue',
        'DeepSkyBlue', 'DodgerBlue', 'RoyalBlue', 'Blue',
        'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue'],
    'brown': ['Cornsilk', 'BlanchedAlmond', 'Bisque', 'NavajoWhite',
        'Wheat', 'BurlyWood', 'Tan', 'RosyBrown',
        'SandyBrown', 'GoldenRod', 'DarkGoldenRod', 'Peru',
        'Chocolate', 'Olive', 'SaddleBrown', 'Sienna',
        'Brown', 'Maroon'],
    'white': ['White', 'Snow', 'HoneyDew', 'MintCream',
        'Azure', 'AliceBlue', 'GhostWhite', 'WhiteSmoke',
        'SeaShell', 'Beige', 'OldLace', 'FloralWhite',
        'Ivory', 'AntiqueWhite', 'Linen', 'LavenderBlush', 'MistyRose'],
    'grey': ['Gainsboro', 'LightGray', 'Silver', 'DarkGray',
        'DimGray', 'Gray', 'LightSlateGray', 'SlateGray',
        'DarkSlateGray', 'Black']
};