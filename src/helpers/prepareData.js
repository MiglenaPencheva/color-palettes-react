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

    let colors = colorGroup.join(', ');
    return colors;
}