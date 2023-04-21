import { useState } from 'react';

import ColorPaletteList from './ColorPalettesList';

const ColorGroups = ({ colorPalettes }) => {

    const [filter, setFilter] = useState('');
    const [filteredPalettes, setFilteredPalettes] = useState([]);
    const [title, setTitle] = useState('');

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

            {colorPalettes.length = 0 && <img className="loader" src="/images/Spinner.jpg" alt="loading..." /> }

            {!filter
                ? <>
                    <span id="catInfo" className="gallery__info">Gallery {'>'} Color groups</span>
                    <section className="gallery__groups" id="galleryGroups">
                        <li onClick={onClickHandler} style={{'backgroundColor': '#ffffba'}}>Yellow</li>
                        <li onClick={onClickHandler} style={{'backgroundColor': '#ffb6ae'}}>Red</li>
                        <li onClick={onClickHandler} style={{'backgroundColor': '#a9c0ff'}}>Blue</li>
                        <li onClick={onClickHandler} style={{'backgroundColor': '#fedca9'}}>Orange</li>
                        <li onClick={onClickHandler} style={{'backgroundColor': '#d6a9e4'}}>Purple</li>
                        <li onClick={onClickHandler} style={{'backgroundColor': '#cbe4b9'}}>Green</li>
                        <li onClick={onClickHandler} style={{'backgroundColor': '#fdf5e6'}}>Beige</li>
                        <li onClick={onClickHandler} style={{'backgroundColor': '#d8bdbd'}}>Brown</li>
                        <li onClick={onClickHandler} style={{'backgroundColor': '#ffdbe2'}}>Pink</li>
                        <li onClick={onClickHandler} style={{'backgroundColor': '#dee2e6'}}>Grey</li>
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