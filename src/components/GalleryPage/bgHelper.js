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

export function translateColorGroupArr(groupArr) {

    for (let group of groupArr) {
        translateColorGroup(group);
    }
    return groupArr;
}