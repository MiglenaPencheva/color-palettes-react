import ColorPaletteCard from './ColorPaletteCard';
import Pagination from './Pagination';

const ColorPaletteList = ({
    colorPalettes,
    title
}) => {

    return (
        <section>
            <section className="gallery__info" >
                <span>Gallery {'>'} {title}</span>
                {colorPalettes.length > 0 && <span>{colorPalettes.length} color palettes</span>}
                {colorPalettes.length > 0 && <Pagination />}
            </section>

            {colorPalettes.length > 0
                ? (
                    <ul className="color-palette-list">
                        {
                            colorPalettes.map(x => <ColorPaletteCard key={x._id} colorPalette={x} />)
                        }
                    </ul>
                )
                : <p className="no-palettes"><b> No color palettes to show!</b>
                    {/* <br /> Or no connection to database.  */}
                </p>
            }
        </section>
    );
};

export default ColorPaletteList;