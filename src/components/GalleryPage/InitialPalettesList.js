import { useLanguageContext } from '../../contexts/LanguageContext';
import { initialPalettes } from './helpers';

import InitialPaletteCard from './InitialPaletteCard';
import InitialPaletteCardBG from './InitialPaletteCardBG';

const InitialPaletteList = () => {
    const { language } = useLanguageContext();

    return (
        <section>

            <section className="palettes__nav">
                <span className="palettes__nav--info">
                    {language.lang === 'en'
                        ? <span>Gallery {'>'} Color palettes</span>
                        : <span>Галерия {'>'} Всички палитри</span>
                    }
                </span>
            </section>

            <img className="loader" src="/images/Spinner.jpg" alt="loading..." />

            <ul className="color-palette-list" >
                {language.lang === 'en'
                    ? initialPalettes.map(x => <InitialPaletteCard key={x._id} initialPalette={x} />)
                    : initialPalettes.map(x => <InitialPaletteCardBG key={x._id} initialPalette={x} />)
                }
            </ul>

        </section >
    );
};

export default InitialPaletteList;