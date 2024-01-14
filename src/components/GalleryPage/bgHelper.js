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

export function translateCategoryBack(category) {

    if (category === 'море') { category = 'sea'; }
    if (category === 'пейзажи') { category = 'landscapes'; }
    if (category === 'небе') { category = 'sky'; }
    if (category === 'растения') { category = 'plants'; }
    if (category === 'животни') { category = 'animals'; }
    if (category === 'храни и напитки') { category = 'foodAndDrinks'; }
    if (category === 'други') { category = 'others'; }

    return category;
}

export function translateColorGroup(group) {

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

export function translateColorGroupBack(group) {

    if (group === 'жълто') { group = 'yellow'; }
    if (group === 'червено') { group = 'red'; }
    if (group === 'синьо') { group = 'blue'; }
    if (group === 'оранжево') { group = 'orange'; }
    if (group === 'лилаво') { group = 'purple'; }
    if (group === 'зелено') { group = 'green'; }
    if (group === 'бежово') { group = 'beige'; }
    if (group === 'кафяво') { group = 'brown'; }
    if (group === 'розово') { group = 'pink'; }
    if (group === 'сиво') { group = 'grey'; }

    return group;
}

export function translateColorGroupStr(groupStr) {

    let bgArr = [];

    let colorsARR = groupStr.split(', ');
    for (let color of colorsARR) {
        let bgColor = translateColorGroup(color);
        bgArr.push(bgColor);
    }
    
    let translated = bgArr.join(', ');
    return translated;
}

export function translateColorGroupStrBack(groupStr) {

    let enArr = [];

    let colorsARR = groupStr.split(', ');
    for (let color of colorsARR) {
        let enColor = translateColorGroupBack(color);
        enArr.push(enColor);
    }
    
    let translated = enArr.join(', ');
    return translated;
}