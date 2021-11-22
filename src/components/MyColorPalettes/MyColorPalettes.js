const MyColorPalettes = () => {

    return (
        <section id="my-pets-page" className="my-pets">
            <h1>My Color Palettes</h1>
            <ul className="my-pets-list">
                <li className="otherPet">
                    <h3>first color palette</h3>
                    <p>Type: landscape</p>
                    <p className="img"><img src="/images/_DSC0208_color palette.png" alt="_DSC0208" /></p>
                    <a className="button" href="/">Details</a>
                </li>
                <li className="otherPet">
                    <h3>second color palette</h3>
                    <p>Type: vertical</p>
                    <p className="img"><img src="/images/_DSC1185_color palette.png" alt="_DSC1185" /></p>
                    <a className="button" href="/">Details</a>
                </li>
                <li className="otherPet">
                    <h3>third color palette</h3>
                    <p>Type: landscape</p>
                    <p className="img"><img src="/images/DSC03202_color palette.png" alt="DSC03202" /></p>
                    <a className="button" href="/">Details</a>
                </li>
            </ul>

            <p className="no-pets">No color palettes in database!</p>
        </section>
    );
};

export default MyColorPalettes;