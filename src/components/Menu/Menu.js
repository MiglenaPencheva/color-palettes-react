import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    // const [openMenu, setOpenMenu] = useState(false);

    // useEffect(() => {
    //     let dropdownContent = document.getElementById('dropdownContent');
        // let top = document.getElementById('menuButton__top');
        // let middle = document.getElementById('menuButton__middle');
        // let bottom = document.getElementById('menuButton__bottom');
        // let left = document.getElementById('menuButton__left');
        // let right = document.getElementById('menuButton__right');
        // let menuButton = document.getElementById('menuButton');

        // if (openMenu) {
        //     dropdownContent.style.width = '240px';
            // dropdownContent.style.display = 'flex';
            // top.style.opacity = 0;
            // middle.style.opacity = 0;
            // bottom.style.opacity = 0;
            // left.style.opacity = 1;
            // right.style.opacity = 1;
            // menuButton.style.animation = 'rotation';
        // } else {
        //     dropdownContent.style.width = 0;

            // dropdownContent.style.display = 'none';
            // top.style.opacity = 1;
            // middle.style.opacity = 1;
            // bottom.style.opacity = 1;
            // left.style.opacity = 0;
            // right.style.opacity = 0;
            // menuButton.style.animation = '';
        // }
    // }, [openMenu]);

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
