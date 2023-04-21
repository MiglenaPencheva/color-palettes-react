import InitialPaletteCard from './InitialPaletteCard';
import { initialPalettes } from './helpers';

const InitialPaletteList = () => {

    return (
        <section>

            <section className="palettes__nav">
                <span className="palettes__nav--info">
                    <span>Gallery {'>'} Color palettes</span>
                </span>
            </section>
            
            <img className="loadingBox" src="/images/Spinner.jpg" alt="loading..." />
            
            <ul className="color-palette-list" >
                {initialPalettes.map(x => <InitialPaletteCard key={x._id} initialPalette={x} />)}
            </ul>

        </section >
    );
};

export default InitialPaletteList;