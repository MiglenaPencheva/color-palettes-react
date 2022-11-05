import { Link } from 'react-router-dom';

const Menu = () => {

    const openMenu = (e) => {
        document.getElementById('dropdownContent').style.width = '240px';
    };
    const closeMenu = (e) => {
        document.getElementById('dropdownContent').style.width = 0;
    };

    return (
        <section>

            <div id="menuButton" onClick={openMenu}>
                <span id="menuButton__top"></span>
                <span id="menuButton__middle"></span>
                <span id="menuButton__bottom"></span>
            </div>

            <div id="dropdownContent" onClick={closeMenu}>
                <div id="closeButton" onClick={closeMenu}>
                    <span id="closeButton__left"></span>
                    <span id="closeButton__right"></span>
                </div>
                <Link className="menu__main" to="/">Home</Link>
                <Link className="menu__main" to="/gallery">Gallery</Link>
                <Link className="menu__sub" to="/gallery">Color palettes</Link>
                <Link className="menu__sub" to="/gallery/upload">Upload palette</Link>
                <Link className="menu__sub" to="/gallery/favorites">My favorites</Link>
                <Link className="menu__sub" to="/gallery/mine">My palettes</Link>
                <Link className="menu__main" to="/color-picker">Palette-maker</Link>
                <Link className="menu__sub" to="/color-picker">Color picker</Link>
                <Link className="menu__main" to="/color-wheel">Combinations</Link>
                <Link className="menu__sub" to="/color-wheel">Color wheel</Link>
                <Link className="menu__sub" to="/color-wheel/schemes" >Color schemes</Link>
                <Link className="menu__main" to="/color-explore">Explore color</Link>
                <Link className="menu__sub" to="/color-explore">Color values</Link>
                <Link className="menu__sub" to="/color-explore/rgb-mixer">RGB mixer</Link>
                <Link className="menu__sub" to="/color-explore/hsl-mixer">HSL mixer</Link>
                <Link className="menu__sub" to="/color-explore">Color details</Link>
            </div>

        </section>
    );
};

export default Menu;
