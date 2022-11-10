import ColorPaletteCard from './ColorPaletteCard';

const ColorPaletteList = ({
    colorPalettes,
    title
}) => {

    return (
        <section>
            <section className="gallery__info" >
                <span>Gallery {'>'} {title}</span>
                {colorPalettes.length > 0 && <span>{colorPalettes.length} color palettes</span>}
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
                </p>
            }
        </section>
    );
};

export default ColorPaletteList;