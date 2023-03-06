// export function validate(title, category, colorGroup, imageFile) {
export function validate(formData) {
    
    
    let title = formData.get('title');
    let category = formData.get('category');
    let colorGroup = formData.get('colorGroup');
    let imageFile = formData.get('imageFile');
    
    console.log(title, category, colorGroup, imageFile);
    // for (const key of formData.keys()) {
    //     console.log(key, formData.get(key));
    // }

    if (title.trim() === '') { throw new Error('Title required'); }
    if (title.length > 100) { throw new Error('Title should be less than 100 characters'); }
    if (category === 'Choose category' || category === '') { throw new Error('Category required'); }
    if (colorGroup.length === 0) { throw new Error('Choose color group'); }
    if (imageFile.size === 0) { throw new Error('Image required'); }
    
    // if (imageUrl.trim() === '') { throw new Error('Image required'); }
    // if (imageUrl.slice(0, 7) !== 'http://' &&
    //     imageUrl.slice(0, 8) !== 'https://') { throw new Error('Invalid image URL'); }

    const data = {
        title,
        category,
        colorGroup,
        imageFile
    };
    return data;
};

export function getColorGroup(formData) {
    let colorGroup = [];

    let red = formData.get('red');
    let yellow = formData.get('yellow');
    let blue = formData.get('blue');
    let orange = formData.get('orange');
    let green = formData.get('green');
    let purple = formData.get('purple');
    let brown = formData.get('brown');
    let beige = formData.get('beige');
    let grey = formData.get('grey');
    let pink = formData.get('pink');

    if (red) { colorGroup.push('red'); }
    if (yellow) { colorGroup.push('yellow'); }
    if (blue) { colorGroup.push('blue'); }
    if (orange) { colorGroup.push('orange'); }
    if (green) { colorGroup.push('green'); }
    if (purple) { colorGroup.push('purple'); }
    if (brown) { colorGroup.push('brown'); }
    if (beige) { colorGroup.push('beige'); }
    if (grey) { colorGroup.push('grey'); }
    if (pink) { colorGroup.push('pink'); }

    return colorGroup;
}