import { useState, useEffect } from 'react';
import { useLanguageContext } from '../../contexts/LanguageContext';

import ColorPaletteList from './ColorPalettesList';

const ColorGroups = ({ colorPalettes }) => {
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

        let group = e.target.textContent.toLowerCase();
        setFilter(group);

        let filtered = [];
        for (const x of colorPalettes) {
            let arr = x.colors.split(',');
            let trimmed = arr.map(x => x.trim());
            if (trimmed.includes(group)) { filtered.push(x); }
        };
        setFilteredPalettes(filtered);

        let newTitle = `Color group > ${group}`;
        setTitle(newTitle);
    };

    return (
        <section id="groupsList">

            {loading && <img className="loader" src="/images/Spinner.jpg" alt="loading..." />}

            {!filter
                ? <>
                    {language.lang === 'en' 
                        ? <span id="catInfo" className="gallery__info">Gallery {'>'} Color groups</span>
                        : <span id="catInfo" className="gallery__info">Галерия {'>'} Цветни групи</span>
                    }
                    
                    {language.lang === 'en' ? (
                        <section className="gallery__groups" id="galleryGroups">
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#ffffba' }}>Yellow</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#ffb6ae' }}>Red</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#a9c0ff' }}>Blue</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#fedca9' }}>Orange</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#d6a9e4' }}>Purple</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#cbe4b9' }}>Green</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#fdf5e6' }}>Beige</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#d8bdbd' }}>Brown</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#ffdbe2' }}>Pink</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#dee2e6' }}>Grey</li>
                        </section>
                    ) : (
                        <section className="gallery__groups" id="galleryGroups">
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#ffffba' }}>Жълто</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#ffb6ae' }}>Червено</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#a9c0ff' }}>Синьо</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#fedca9' }}>Оранжево</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#d6a9e4' }}>Лилаво</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#cbe4b9' }}>Зелено</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#fdf5e6' }}>Бежово</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#d8bdbd' }}>Кафяво</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#ffdbe2' }}>Розово</li>
                            <li onClick={onClickHandler} style={{ 'backgroundColor': '#dee2e6' }}>Сиво</li>
                        </section>
                    )}
                </>

                : <section>
                    <ColorPaletteList colorPalettes={filteredPalettes} title={title} />
                </section>
            }
        </section>
    );
};

export default ColorGroups;