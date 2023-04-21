import InitialPaletteCard from './InitialPaletteCard';
import { initialPalettes } from './helpers';

const InitialPaletteList = () => {

    return (
        <section>

            <section className="palettes__nav">
                <span className="palettes__nav--info">
                    <span>Gallery {'>'} All color palettes</span>
                </span>
            </section>

            <ul className="color-palette-list" >
                {initialPalettes.map(x => <InitialPaletteCard key={x._id} initialPalette={x} />)}
            </ul>

        </section >
    );
};

export default InitialPaletteList;