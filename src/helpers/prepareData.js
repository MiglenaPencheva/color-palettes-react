export function validate(title, category, colorGroup, imageUrl) {
    if (title.trim() === '') { throw new Error('Title required'); }
    if (title.length > 100) { throw new Error('Title should be less than 100 characters'); }
    if (category === 'Choose category' || category === '') { throw new Error('Category required'); }
    if (colorGroup.length === 0) { throw new Error('Choose color group'); }
    if (imageUrl.trim() === '') { throw new Error('Image required'); }
    if (imageUrl.slice(0, 7) !== 'http://' &&
        imageUrl.slice(0, 8) !== 'https://') { throw new Error('Invalid image URL'); }

    const data = {
        title,
        category,
        colorGroup,
        imageUrl
    };
    return data;
};

export function getColorGroup(formData) {
    let colorGroup = [];

    let red = formData.get('red');
    let green = formData.get('green');
    let blue = formData.get('blue');
    let yellow = formData.get('yellow');
    let cyan = formData.get('cyan');
    let purple = formData.get('purple');
    let orange = formData.get('orange');
    let brown = formData.get('brown');
    let pink = formData.get('pink');
    let grey = formData.get('grey');
    let white = formData.get('white');

    if (red) { colorGroup.push('red'); }
    if (green) { colorGroup.push('green'); }
    if (blue) { colorGroup.push('blue'); }
    if (yellow) { colorGroup.push('yellow'); }
    if (cyan) { colorGroup.push('cyan'); }
    if (purple) { colorGroup.push('purple'); }
    if (orange) { colorGroup.push('orange'); }
    if (brown) { colorGroup.push('brown'); }
    if (pink) { colorGroup.push('pink'); }
    if (grey) { colorGroup.push('grey'); }
    if (white) { colorGroup.push('white'); }

    return colorGroup;
}