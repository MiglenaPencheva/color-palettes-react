import { useEffect, useState } from 'react';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { translateCategory } from './bgHelper';

import ColorPaletteList from './ColorPalettesList';

const Categories = ({ colorPalettes }) => {
    const { language } = useLanguageContext();

    const [filter, setFilter] = useState('');
    const [filteredPalettes, setFilteredPalettes] = useState([]);
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (colorPalettes.length > 0) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [colorPalettes]);

    const onClickHandler = (e) => {
        if (colorPalettes.length === 0) { return; }

        let category = e.target.textContent.toLowerCase();
        if (language.lang !== 'en') {
            translateCategory(category);
        }
        setFilter(category);

        let filtered = colorPalettes.filter(x => x.category === category);
        setFilteredPalettes(filtered);

        let newTitle = language.lang === 'en' ? `Categories > ${category}` : `Категории > ${e.target.textContent.toLowerCase()}`;;
        setTitle(newTitle);
    };

    return (
        <section id="categoriesList">

            {loading && <img className="loader" src="/images/Spinner.jpg" alt="loading..." />}

            {!filter
                ? <>

                    {language.lang === 'en'
                        ? <span id="catInfo" className="gallery__info">Gallery {'>'} Categories</span>
                        : <span id="catInfo" className="gallery__info">Галерия {'>'} Категории</span>
                    }

                    <section className="gallery__categories" id="galleryCategories">
                        {language.lang === 'en' ? (
                            <>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/sea.jpg")' }}>Sea</div>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/land.jpg")' }}>Landscapes</div>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/sky.jpg")' }}>Sky</div>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/plants.jpg")' }}>Plants</div>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/animals.jpg")' }}>Animals</div>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/food.jpg")' }}>Food & Drinks</div>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/others.jpg")' }}>Others</div>
                            </>
                        ) : (
                            <>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/sea.jpg")' }}>Море</div>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/land.jpg")' }}>Пейзажи</div>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/sky.jpg")' }}>Небе</div>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/plants.jpg")' }}>Растения</div>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/animals.jpg")' }}>Животни</div>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/food.jpg")' }}>Храни & Напитки</div>
                                <div onClick={onClickHandler} style={{ 'backgroundImage': 'url("/images/categories/others.jpg")' }}>Други</div>
                            </>
                        )}
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

