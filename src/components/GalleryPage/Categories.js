import { useState } from 'react';

import ColorPaletteList from './ColorPalettesList';

const Categories = ({ colorPalettes }) => {

    const [filter, setFilter] = useState('');
    const [filteredPalettes, setFilteredPalettes] = useState([]);
    const [title, setTitle] = useState('');

    const onClickHandler = (e) => {
        if (colorPalettes.length === 0) { return; }

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

            {colorPalettes.length = 0 && <img className="loader" src="/images/Spinner.jpg" alt="loading..." /> }

            {!filter
                ? <>
                    <span id="catInfo" className="gallery__info">Gallery {'>'} Categories</span>

                    <section className="gallery__categories" id="galleryCategories">
                        <div onClick={onClickHandler} style={{'backgroundImage': 'url("/images/categories/sea.jpg")'}}>Sea</div>
                        <div onClick={onClickHandler} style={{'backgroundImage': 'url("/images/categories/land.jpg")'}}>Landscapes</div>
                        <div onClick={onClickHandler} style={{'backgroundImage': 'url("/images/categories/sky.jpg")'}}>Sky</div>
                        <div onClick={onClickHandler} style={{'backgroundImage': 'url("/images/categories/plants.jpg")'}}>Plants</div>
                        <div onClick={onClickHandler} style={{'backgroundImage': 'url("/images/categories/animals.jpg")'}}>Animals</div>
                        <div onClick={onClickHandler} style={{'backgroundImage': 'url("/images/categories/food.jpg")'}}>Food & Drinks</div>
                        <div onClick={onClickHandler} style={{'backgroundImage': 'url("/images/categories/others.jpg")'}}>Others</div>
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

