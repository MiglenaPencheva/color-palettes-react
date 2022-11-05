import { useState } from 'react';

import ColorPaletteList from './ColorPalettesList';

const Categories = ({ colorPalettes }) => {

    const [filter, setFilter] = useState('');
    const [filteredPalettes, setFilteredPalettes] = useState([]);
    const [title, setTitle] = useState('');

    const onClickHandler = (e) => {
        let category = e.target.textContent.toLowerCase();
        if (category === 'food & drinks') { category = 'foodAndDrinks'; }
        setFilter(category);

        let filtered = colorPalettes.filter(x => x.category === category);
        setFilteredPalettes(filtered);

        let newTitle = `Categories > ${category}`;
        setTitle(newTitle);
    };

    return (
        <section id="categoriesList">

            {!filter
                ? <>
                    <span id="catInfo" className="gallery__info">Gallery {'>'} Categories</span>

                    <section className="gallery__categories" id="galleryCategories">
                        <div onClick={onClickHandler}>Landscapes</div>
                        <div onClick={onClickHandler}>Sea</div>
                        <div onClick={onClickHandler}>Sky</div>
                        <div onClick={onClickHandler}>Plants</div>
                        <div onClick={onClickHandler}>Animals</div>
                        <div onClick={onClickHandler}>Food & Drinks</div>
                        <div onClick={onClickHandler}>Others</div>
                    </section>
                </>

                : <section>
                    <ColorPaletteList colorPalettes={filteredPalettes} title={title} />
                </section>

            }
        </section>
    );
};

export default Categories;

