import { useState } from 'react';

import ColorPaletteList from './ColorPalettesList';

const ColorGroups = ({ colorPalettes }) => {

    const [filter, setFilter] = useState('');
    const [filteredPalettes, setFilteredPalettes] = useState([]);
    const [title, setTitle] = useState('');

    const onClickHandler = (e) => {
        let group = e.target.textContent.toLowerCase();
        setFilter(group);

        let filtered = [];
        for (const x of colorPalettes) {
            let arr = x.colors.split(', ');
            if (arr.includes(group)) { filtered.push(x); }
        };
        setFilteredPalettes(filtered);

        let newTitle = `Color group > ${group}`;
        setTitle(newTitle);
    };

    return (
        <section id="groupsList">

            {!filter
                ? <>
                    <span id="catInfo" className="gallery__info">Gallery {'>'} Color groups</span>
                    <section className="gallery__groups" id="galleryGroups">
                        <li onClick={onClickHandler}>Yellow</li>
                        <li onClick={onClickHandler}>Red</li>
                        <li onClick={onClickHandler}>Blue</li>
                        <li onClick={onClickHandler}>Orange</li>
                        <li onClick={onClickHandler}>Purple</li>
                        <li onClick={onClickHandler}>Green</li>
                        <li onClick={onClickHandler}>Beige</li>
                        <li onClick={onClickHandler}>Brown</li>
                        <li onClick={onClickHandler}>Pink</li>
                        <li onClick={onClickHandler}>Grey</li>
                    </section>
                </>

                : <section>
                    <ColorPaletteList colorPalettes={filteredPalettes} title={title} />
                </section>
            }
        </section>
    );
};

export default ColorGroups;