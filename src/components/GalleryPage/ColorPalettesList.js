import { useState, useEffect } from 'react';

import ColorPaletteCard from './ColorPaletteCard';

const ColorPaletteList = ({
    colorPalettes,
    title
}) => {

    const [sort, setSort] = useState(colorPalettes);
    const [sortedPalettes, setSortedPalettes] = useState(colorPalettes);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const loader = document.getElementById('loadingBox');

    useEffect(() => {
        if (colorPalettes.length > 0) {
            const sorted = [...colorPalettes];
            sorted.sort((a, b) => {
                return sort === 'liked'
                    ? b.likedBy.length - a.likedBy.length
                    : b.created_at - a.created_at;
            });
            setSortedPalettes(sorted);
        }
    }, [sort, colorPalettes]);

    useEffect(() => {
        if (loader.style.display === 'block') {
            setLoading(true);
        } else if (loader.style.display === 'none') {
            setLoading(false);
        }
    }, [loader]);
    
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

                <section className="gallery__sort">
                    <label htmlFor="type">Sort by</label>
                    <select id="type" name="sort" onChange={(e) => setSort(e.target.value)}>
                        <option value="fresh" >Fresh content</option>
                        <option value="liked" >Most liked</option>
                    </select>
                </section>

            </section>

            {colorPalettes.length > 0
                ? <ul className="color-palette-list" >
                    {query
                        ? sortedPalettes
                            .filter(x => x.title.toLowerCase().includes(query.toLowerCase()))
                            .map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)
                        : sortedPalettes
                            .map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)
                    }
                </ul>
                : !loading && <p className="no-palettes"><b> No color palettes to show!</b></p>
            }

        </section >
    );
};

export default ColorPaletteList;