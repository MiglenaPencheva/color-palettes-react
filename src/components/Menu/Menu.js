import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';


const Menu = () => {
    const { user } = useAuthContext();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            document.getElementById('dropdownContent').style.width = 0;
            document.getElementById('site-content').style['margin-left'] = 0;
        } else {
            if (window.innerWidth >= 1360) {
                document.getElementById('dropdownContent').style.width = '21%';
                document.getElementById('site-content').style['margin-left'] = '20%';
            }
        }
    }, [location.pathname]);


    const openMenu = (e) => {
        document.getElementById('dropdownContent').style.width = '240px';
    };
    const closeMenu = (e) => {
        if (window.innerWidth < 1360) {
            document.getElementById('dropdownContent').style.width = 0;
        }
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

                <Link id="homeLink" className="menu__main" to="/">Home</Link>

                {user._id
                    ? <section className="menu__user">
                        <span>Signed in as <b><i>{user.username}</i></b></span>
                        <Link to="/logout">Sign out</Link>
                    </section>
                    : <section className="menu__user">
                        <Link to="/login">Sign in /</Link>
                        <Link to="/register">Sign up</Link>
                    </section>
                }

                <Link className="menu__main" to="/gallery">Gallery</Link>
                <Link className="menu__sub" to="/gallery">Color palettes</Link>
                {user._id
                    ? <section className="menu__yes-user">
                        <Link className="menu__sub" to="/gallery/upload">Upload palette</Link>
                        <Link className="menu__sub" to="/gallery/favorites">My favorites</Link>
                        <Link className="menu__sub" to="/gallery/mine">My palettes</Link>
                    </section>
                    : <section className="menu__no-user">
                        <span>Upload palette</span>
                        <span>My favorites</span>
                        <span>My palettes</span>
                    </section>
                }

                <Link className="menu__main" to="/color-picker">Color picker</Link>
                <Link className="menu__sub" to="/color-picker/palette-maker">Palette maker</Link>
                <Link className="menu__sub" to="/color-picker/swatches">Swatches card</Link>

                <Link className="menu__main" to="/combinations">Combinations</Link>
                <Link className="menu__sub" to="/combinations/color-wheel">Color wheel</Link>
                <Link className="menu__sub" to="/combinations/wheels" >Color wheels</Link>
                <Link className="menu__sub" to="/combinations/schemes" >Color schemes</Link>
                <Link className="menu__sub" to="/combinations/neutrals">Neutrals</Link>
                <Link className="menu__sub" to="/combinations/pastels">Pastels</Link>

                <Link className="menu__main" to="/color-explore">Explore color</Link>
                <Link className="menu__sub" to="/color-explore/convertor">Convertor</Link>
                <Link className="menu__sub" to="/color-explore/rgb-mixer">RGB mixer</Link>
                <Link className="menu__sub" to="/color-explore/hsl-mixer">HSL mixer</Link>
                <Link className="menu__sub" to="/color-explore/color-names">Color names</Link>
                <Link className="menu__sub" to="/color-explore/groups">Color groups</Link>

                <div className="contacts">
                    <div>&copy;</div>
                    <img src="/images/git.png" alt="git" onClick={() => window.open('https://github.com/MiglenaPencheva/color-palettes-react', '_blank')} />
                    <span>megacolormix@gmail.com</span>
                </div>

            </div >
        </section >
    );
};

export default Menu;
