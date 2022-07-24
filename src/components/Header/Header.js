import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();

    let guestNavigation = (
        <div id="guest">
            <Link className="navbar__link" to="/login">Login</Link>
            <Link to="/register" className="navbar__link">Register</Link>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <span className="navbar__username">Hello, {user.username}!</span>
            <Link className="navbar__link" to="/logout">Logout</Link>
        </div>
    );

    return (
        <header id="header">
            <nav className="header__navbar--top">
                <Link to="/home" className="logo">Home</Link>
                {user.username
                    ? userNavigation
                    : guestNavigation
                }
            </nav>

            <h1 className="header__heading">World full of colors</h1>

            <nav className="header__navbar--down">
                <Link className="navbar__link" to="/gallery">Gallery</Link>
                {/* <Link className="navbar__link" to="/my-color-palettes">My Palettes</Link>
                        <Link className="navbar__link" to="/my-favorites">My Favorites</Link> */}
                {/* <Link className="navbar__link" to="/create">Add Color Palette</Link> */}
                <Link className="navbar__link" to="/color-picker">Create</Link>
                <Link className="navbar__link" to="/color-explore">Explore</Link>
            </nav>
        </header >
    );
};

export default Header;