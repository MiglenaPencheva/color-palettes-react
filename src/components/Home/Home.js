import { Link } from 'react-router-dom';

const Header = () => {

    const showMore = (e) => {
        if (e.target.tagName.toLowerCase() === 'a') {
            e.target.children[0].style.opacity = '1';
            e.target.children[1].style.opacity = '1';
        }
    };
    const hideMore = (e) => {
        if (e.target.tagName.toLowerCase() === 'a') {
            e.target.children[0].style.opacity = '0';
            e.target.children[1].style.opacity = '0';
        }
    };

    return (
        <section className="home__section">
            <section className="home__headings">

                <h1>Color combinations</h1>
                <h3>Colors you like</h3>
                <h4>Feel the colors</h4>
                <h3>Dream in colors</h3>
                <h4>Be colorful</h4>

                <h3>Just color it</h3>
                <h4>Mix with style</h4>
                <h1>World of million colors</h1>
                <h3>Color sensation</h3>

                <h4>The colors of the sun</h4>
                <h3>Somewhere between black and white</h3>
                <h4>Colors cause certain emotions</h4>
                <h1>The color tool</h1>
                <h4>RGB color model</h4>

                <h4>The nature of colors</h4>
                <h3>Inspired by natural beauty</h3>
                <h4>Design your colorful world</h4>
                <h3>The world is ful of colorful examples</h3>

                <h4>Colorization</h4>
                <h3>Your choice, your colors</h3>
                <h4>The harmony of nature</h4>
                <h3>The colors of light</h3>
                <h4>Rules of mixing colors</h4>
                <h3>Compose a harmony</h3>

                <h4>Pastel color palettes</h4>
                <h3>Select colors by scheme</h3>
                <h4>Neutral colors</h4>
                <h3>The language of colors</h3>
                <h4>Landscapes, sea and sky, flora and fauna</h4>

                <h3>Understand the colors</h3>
                <h4>RYB color wheel</h4>
                <h3>Colorize yor dreams</h3>
                <h4>The visible spectrum of light</h4>
                <h3>Pick the right color</h3>

                <h4>Extract the colors you wish</h4>
                <h3>The wheel of colors</h3>
                <h4>Colors influence</h4>
                <h3>Complementary color scheme</h3>
                <h4>Millions of colors</h4>
                <h3>Inspiration</h3>

                <h3>Analogous scheme</h3>
                <h4>Sequential and divergent schemes</h4>
                <h3>White means 100% lightness</h3>
                <h4>Monochromatic scheme</h4>
                <h3>Color details</h3>

                <h4>Subtractive and additive color mixing</h4>
                <h3>Compose your desired combination</h3>
                <h4>Saturation and lightness</h4>
                <h3>Color values convertor</h3>
                <h4>tints, shades, tones</h4>

                <h3>Color palettes</h3>
                <h4>Primary colors</h4>
                <h3>The magic of light</h3>
                <h4>Color picker</h4>
            </section>

            <nav className="home__navbar--ul">
                <Link className="home__navbar--link gallery"
                    to="/gallery" onMouseOver={showMore} onMouseOut={hideMore}>
                    <span>photo</span>
                    Gallery
                    <span>color palettes</span>
                </Link>
                <Link className="home__navbar--link picker"
                    to="/color-picker" onMouseOver={showMore} onMouseOut={hideMore}>
                    <span>image</span>
                    Palette-maker
                    <span>color-picker</span>
                </Link>
                <Link className="home__navbar--link wheel"
                    to="/combinations" onMouseOver={showMore} onMouseOut={hideMore}>
                    <span>color wheel</span>
                    Combinations
                    <span>color schemes</span>
                </Link>
                <Link className="home__navbar--link explore"
                    to="/color-explore" onMouseOver={showMore} onMouseOut={hideMore}>
                    <span>details</span>
                    Explore color
                    <span>convertor</span>
                </Link>
            </nav>
        </section >
    );
};

export default Header;
