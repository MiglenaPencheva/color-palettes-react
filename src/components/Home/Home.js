import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();


    return (
        <section className="home__section">
            <h1 className="home__heading">World full of colors</h1>
                <nav className="home__navbar--ul">
                    <Link className="home__navbar--link" to="/gallery">Gallery</Link>
                    <Link className="home__navbar--link picker" to="/color-picker">Palette-maker</Link>
                    <Link className="home__navbar--link wheel" to="/color-wheel">Combinations</Link>
                    <Link className="home__navbar--link explore" to="/color-explore">Explore color</Link>
                </nav>

                {/* {user.username
                    ? userNavigation
                    : guestNavigation
                } */}
        </section >
    );
};

export default Header;
