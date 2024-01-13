export function translateCategory(category) {

    if (category === 'sea') { category = 'Море'; }
    if (category === 'landscapes') { category = 'Пейзажи'; }
    if (category === 'sky') { category = 'Небе'; }
    if (category === 'plants') { category = 'Растения'; }
    if (category === 'animals') { category = 'Животни'; }
    if (category === 'foodAndDrinks') { category = 'Храни и напитки'; }
    if (category === 'others') { category = 'Други'; }

    return category;
}

export function translateColorGroup(group) {

    console.log(group);

    if (group === 'yellow') { group = 'Жълто'; }
    if (group === 'red') { group = 'Червено'; }
    if (group === 'blue') { group = 'Синьо'; }
    if (group === 'orange') { group = 'Оранжево'; }
    if (group === 'purple') { group = 'Лилаво'; }
    if (group === 'green') { group = 'Зелено'; }
    if (group === 'beige') { group = 'Бежово'; }
    if (group === 'brown') { group = 'Кафяво'; }
    if (group === 'pink') { group = 'Розово'; }
    if (group === 'grey') { group = 'Сиво'; }

    return group;
}

export function translateColorGroupStr(groupStr) {

    console.log(groupStr);

    let colorsARR = groupStr.split(', ');
    for (let color of colorsARR) {
        console.log(color);
        translateColorGroup(color);
    }
    
    let result = colorsARR.join(', ');
    console.log(result);

    return result;
}