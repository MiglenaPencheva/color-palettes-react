import { useState } from 'react';

import ColorPaletteCard from './ColorPaletteCard';

const ColorPaletteList = ({
    colorPalettes,
    title
}) => {

    const [query, setQuery] = useState('');

    // let likedPalettes = '';
    // let newestPalettes = '';

    // const onSortChange = (e) => {
    //     let sort = e.target.value;
    //     if (sort === 'liked') {
    //         const liked = colorPalettes.sort((a, b) => b.likedBy.length - a.likedBy.length);
    //         likedPalettes = (
    //             <ul className="color-palette-list" >
    //                 {
    //                     liked.map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)
    //                 }
    //             </ul>
    //         );
    //     } else if (sort === 'fresh') {
    //         newestPalettes = (
    //             <ul className="color-palette-list" >
    //                 {
    //                     colorPalettes.map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)
    //                 }
    //             </ul>
    //         );
    //     }
    // };


    // const sortHandler = (e) => {
    //     let sort = e.target.value;
    //     if (sort === 'liked') {
    //         setSortedPalettes(sorted);
    //     } else if (sort === 'fresh') {
    //         const sorted = colorPalettes.sort((a, b) => b.created_at - a.created_at);
    //         setSortedPalettes(sorted);
    //     }
    //     setSort(e.target.value);
    // };

    // const searchHandler = (e) => {
    //     e.preventDefault();
    //     if (search !== '') {
    //         const filtered = colorPalettes.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
    //         setFilteredPalettes(filtered);
    //     }
    // };

    return (
        <section>

            <section className="palettes__nav">
                <span className="palettes__nav--info">
                    <span>Gallery {'>'} {title}</span>
                    <span className="gallery__info" >
                        {!query
                            ? colorPalettes.length > 0 && <span>{colorPalettes.length} color palettes</span>
                            : <span>Search results</span>
                        }

                    </span>
                </span>

                <section className="search">
                    <input id="search" name="search" className="search__input" type="text"
                        value={query} onChange={(e) => setQuery(e.target.value)}
                        placeholder="search..." />
                    {query
                        ? <button className="search__close-button" onClick={() => setQuery('')}>x</button>
                        : <button className="search__button" >
                            <span className="search__circle"></span>
                            <span className="search__rectangle"></span>
                        </button>
                    }
                </section>

                {/* <section className="gallery__sort">
                    <label htmlFor="type">Sort by</label>
                    <select id="type" name="sort"
                        onChange={onSortChange} >
                        onChange={sortHandler}>
                        <option value="fresh">Fresh content</option>
                        <option value="liked">Most liked</option>
                    </select>
                </section> */}

            </section>

            {colorPalettes.length > 0
                ? <ul className="color-palette-list" >
                    { query
                        ? colorPalettes
                            .filter(x => x.title.toLowerCase().includes(query.toLowerCase()))
                            .map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)
                        : colorPalettes
                            .map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)
                    }
                </ul>
                : <p className="no-palettes"><b> No color palettes to show!</b></p>
            }

        </section >
    );
};

export default ColorPaletteList;