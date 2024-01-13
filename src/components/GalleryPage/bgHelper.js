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

    if (category === 'Море') { category = 'sea'; }
    if (category === 'Пейзажи') { category = 'landscapes'; }
    if (category === 'Небе') { category = 'sky'; }
    if (category === 'Растения') { category = 'plants'; }
    if (category === 'Животни') { category = 'animals'; }
    if (category === 'Храни и напитки') { category = 'foodAndDrinks'; }
    if (category === 'Други') { category = 'others'; }

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

    console.log(group);

    return group;
}

export function translateColorGroupBack(group) {

    if (group === 'Жълто') { group = 'yellow'; }
    if (group === 'Червено') { group = 'red'; }
    if (group === 'Синьо') { group = 'blue'; }
    if (group === 'Оранжево') { group = 'orange'; }
    if (group === 'Лилаво') { group = 'purple'; }
    if (group === 'Зелено') { group = 'green'; }
    if (group === 'Бежово') { group = 'beige'; }
    if (group === 'Кафяво') { group = 'brown'; }
    if (group === 'Розово') { group = 'pink'; }
    if (group === 'Сиво') { group = 'grey'; }

    console.log(group);

    return group;
}

export function translateColorGroupStr(groupStr) {

    let bgArr = [];

    let colorsARR = groupStr.split(', ');
    for (let color of colorsARR) {
        let bgColor = translateColorGroup(color);

        console.log(bgColor);

        bgArr.push(bgColor);
    }
    
    let translated = bgArr.join(', ');
    console.log(translated);

    return translated;
}