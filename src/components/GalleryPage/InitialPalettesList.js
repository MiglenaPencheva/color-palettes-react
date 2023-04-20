import InitialPaletteCard from './InitialPaletteCard';

const initialPalettes = [
    {
        _id: '64108390da01c31a11d22d63',
        title: 'Brown frappe drink on beige sandy beach and blue sea background.',
        category: 'foodAndDrinks',
        src: '/images/initial/1',
        likes: 44
    }
];

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