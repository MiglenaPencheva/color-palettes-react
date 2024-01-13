import { useState, useEffect } from 'react';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { translateCategory, translateColorGroup } from './bgHelper';

import ColorPaletteCard from './ColorPaletteCard';

const ColorPaletteList = ({
    colorPalettes,
    title
}) => {
    const { language } = useLanguageContext();

    const [sort, setSort] = useState(colorPalettes);
    const [sortedPalettes, setSortedPalettes] = useState(colorPalettes);
    const [query, setQuery] = useState('');

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

    let bgTitle = '';

    console.log(title);

    let [type, subType] = title.split(' > ');

    console.log(type, subType);

    if (type === 'Categories') {
        subType = translateCategory(subType);

        console.log(subType);

        bgTitle = `Категории > ${subType}`;
    } else if (type === 'Color group') {
        subType = translateColorGroup(subType);

        console.log(subType);

        bgTitle = `Цветни групи > ${subType}`;
    }

    return (
        <section>

            <section className="palettes__nav">

                {language.lang === 'en' ? (
                    <span className="palettes__nav--info">
                        <span>Gallery {'>'} {title}</span>
                        <span className="gallery__info" >
                            {!query
                                ? colorPalettes.length > 0 && <span>{colorPalettes.length} color palettes</span>
                                : <span>Search results</span>
                            }
                        </span>
                    </span>
                ) : (
                    <span className="palettes__nav--info">
                        <span>Галерия {'>'} {bgTitle}</span>
                        <span className="gallery__info" >
                            {!query
                                ? colorPalettes.length > 0 && <span>{colorPalettes.length} палитри</span>
                                : <span>Резултати от търсенето</span>
                            }
                        </span>
                    </span>
                )}

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

                {language.lang === 'en' ? (
                    <section className="gallery__sort">
                        <label htmlFor="type">Sort by</label>
                        <select id="type" name="sort" onChange={(e) => setSort(e.target.value)}>
                            <option value="fresh" >Fresh content</option>
                            <option value="liked" >Most liked</option>
                        </select>
                    </section>
                ) : (
                    <section className="gallery__sort">
                        <label htmlFor="type">Подреди по</label>
                        <select id="type" name="sort" onChange={(e) => setSort(e.target.value)}>
                            <option value="fresh" >Последно добавени</option>
                            <option value="liked" >Най-харесвани</option>
                        </select>
                    </section>
                )}

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
                : <p className="no-palettes"><b> No color palettes to show!</b></p>
            }

        </section >
    );
};

export default ColorPaletteList;