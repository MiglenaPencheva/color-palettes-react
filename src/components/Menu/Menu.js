import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        let dropdownContent = document.getElementById('dropdownContent');
        let top = document.getElementById('menuButton__top');
        let middle = document.getElementById('menuButton__middle');
        let bottom = document.getElementById('menuButton__bottom');
        let left = document.getElementById('menuButton__left');
        let right = document.getElementById('menuButton__right');

        if (openMenu) {
            dropdownContent.style.display = 'flex';
            top.style.display = 'none';
            middle.style.display = 'none';
            bottom.style.display = 'none';
            left.style.display = 'block';
            right.style.display = 'block';
        } else {
            dropdownContent.style.display = 'none';
            top.style.display = 'block';
            middle.style.display = 'block';
            bottom.style.display = 'block';
            left.style.display = 'none';
            right.style.display = 'none';
        }
    }, [openMenu]);


    return (
        <section>

            <div id="menuButton" onClick={() => setOpenMenu(!openMenu)}>
                <span id="menuButton__top"></span>
                <span id="menuButton__middle"></span>
                <span id="menuButton__bottom"></span>
                <span id="menuButton__left"></span>
                <span id="menuButton__right"></span>
            </div>

            <div id="closeButton" onClick={() => setOpenMenu(!openMenu)}>
            </div>

            <div id="dropdownContent" onClick={() => setOpenMenu(!openMenu)}>
                <Link className="menu__main" to="/">Home</Link>
                <Link className="menu__main" to="/gallery">Gallery</Link>
                <Link className="menu__sub" to="/gallery">Color palettes</Link>
                <Link className="menu__sub" to="/gallery">Upload palette</Link>
                <Link className="menu__sub" to="/gallery">My favorites</Link>
                <Link className="menu__sub" to="/gallery">My palettes</Link>
                <Link className="menu__sub" to="/gallery">Search</Link>
                <Link className="menu__main" to="/color-picker">Palette-maker</Link>
                <Link className="menu__sub" to="/color-picker">Color picker</Link>
                <Link className="menu__main" to="/color-wheel">Combinations</Link>
                <Link className="menu__sub" to="/color-wheel">Color wheel</Link>
                <Link className="menu__sub" to="/color-wheel">Schemes details</Link>
                <Link className="menu__main" to="/color-explore">Explore color</Link>
                <Link className="menu__sub" to="/color-explore">Color values</Link>
                <Link className="menu__sub" to="/color-explore">RGB mixer</Link>
                <Link className="menu__sub" to="/color-explore">HSL mixer</Link>
                <Link className="menu__sub" to="/color-explore">Color details</Link>
            </div>

        </section>
    );
};

export default Menu;
