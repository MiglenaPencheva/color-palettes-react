import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Landscapes from './Categories/Landscapes';
import Sea from './Categories/Sea';
import Sky from './Categories/Landscapes';
import Plants from './Categories/Landscapes';
import Animals from './Categories/Landscapes';
import FoodAndDrinks from './Categories/Landscapes';
import Others from './Categories/Landscapes';
import ColorPaletteList from './ColorPalettesList';

const Categories = () => {
    const navigate = useNavigate();

    const [category, setCategory] = useState('');
    const [landscapes, setLandscapes] = useState(false);
    const [sea, setSea] = useState(false);
    const [sky, setSky] = useState(false);
    const [plants, setPlants] = useState(false);
    const [animals, setAnimals] = useState(false);
    const [foodAndDrinks, setFoodAndDrinks] = useState(false);
    const [others, setOthers] = useState(false);

    // const onClickHandler = (e) => {
    //     setLandscapes(false);
    //     setSea(false);
    //     setSky(false);
    //     setPlants(false);
    //     setAnimals(false);
    //     setFoodAndDrinks(false);
    //     setOthers(false);
        
    //     let target = e.target.textContent;

    //     document.getElementById('pathInfo').style.display = 'none';
    //     document.getElementById('galleryCategories').style.display = 'none';
    // };
    
    const onLandscapesClick = () => {
        setLandscapes(true);
        setSea(false);
        setSky(false);
        setPlants(false);
        setAnimals(false);
        setFoodAndDrinks(false);
        setOthers(false);
        
        document.getElementById('pathInfo').style.display = 'none';
        document.getElementById('galleryCategories').style.display = 'none';
    };
    const onSaeHandler = () => {
        setLandscapes(false);
        setSea(true);
        setSky(false);
        setPlants(false);
        setAnimals(false);
        setFoodAndDrinks(false);
        setOthers(false);

        document.getElementById('pathInfo').style.display = 'none';
        document.getElementById('galleryCategories').style.display = 'none';
    };
    const onSkyHandler = () => {
        setLandscapes(false);
        setSea(false);
        setSky(true);
        setPlants(false);
        setAnimals(false);
        setFoodAndDrinks(false);
        setOthers(false);

        document.getElementById('pathInfo').style.display = 'none';
        document.getElementById('galleryCategories').style.display = 'none';
    };
    const onPlantsHandler = () => {
        setLandscapes(false);
        setSea(false);
        setSky(false);
        setPlants(true);
        setAnimals(false);
        setFoodAndDrinks(false);
        setOthers(false);

        document.getElementById('pathInfo').style.display = 'none';
        document.getElementById('galleryCategories').style.display = 'none';
    };
    const onAnimalsHandler = () => {
        setLandscapes(false);
        setSea(false);
        setSky(false);
        setPlants(false);
        setAnimals(true);
        setFoodAndDrinks(false);
        setOthers(false);

        document.getElementById('pathInfo').style.display = 'none';
        document.getElementById('galleryCategories').style.display = 'none';
    };
    const onFoodAndDrinksHandler = () => {
        setLandscapes(false);
        setSea(false);
        setSky(false);
        setPlants(false);
        setAnimals(false);
        setFoodAndDrinks(true);
        setOthers(false);

        document.getElementById('pathInfo').style.display = 'none';
        document.getElementById('galleryCategories').style.display = 'none';
    };
    const onOthersHandler = () => {
        setLandscapes(false);
        setSea(false);
        setSky(false);
        setPlants(false);
        setAnimals(false);
        setFoodAndDrinks(false);
        setOthers(true);

        document.getElementById('pathInfo').style.display = 'none';
        document.getElementById('galleryCategories').style.display = 'none';
    };

    const onClickHandler = (e) => {
        console.log(e.target.textContent.toLowerCase());
        let filter = e.target.textContent.toLowerCase();
        navigate(<ColorPaletteList filter={filter} />);
    };

    return (
        <section id="categoriesList">
            <section className="gallery__info" id="pathInfo">
                <span >Gallery {'>'} Categories</span>
            </section>

            <section className="gallery__categories" id="galleryCategories">
                <div onClick={onClickHandler}>Landscapes</div>
                <div onClick={onClickHandler}>Sea</div>
                <div onClick={onClickHandler}>Sky</div>
                <div onClick={onClickHandler}>Plants</div>
                <div onClick={onAnimalsHandler}>Animals</div>
                <div onClick={onFoodAndDrinksHandler}>Food & Drinks</div>
                <div onClick={onOthersHandler}>Others</div>
            </section>

            {/* {landscapes ? <Landscapes /> : null} */}
            {/* {sea ? <Sea /> : null} */}
            {sky ? <Sky /> : null}
            {plants ? <Plants /> : null}
            {animals ? <Animals /> : null}
            {foodAndDrinks ? <FoodAndDrinks /> : null}
            {others ? <Others /> : null}


        </section>
    );
};

export default Categories;

