const InitialPaletteCard = ({
    initialPalette
}) => {
    return (
        <li className="color-palette-card">

            <img className="color-palette-card__image"
                src={initialPalette.src}
                alt="color palette" />

            <p className="color-palette-card__title">{initialPalette.title}</p>

            <p className="color-palette-card__category">Category: {initialPalette.category}</p>

            <div className="color-palette-card__likes">
                <span id="total-likes">{initialPalette.likes}</span>
                <span className="star"></span>
            </div>
            
        </li >
    );
};

export default InitialPaletteCard;