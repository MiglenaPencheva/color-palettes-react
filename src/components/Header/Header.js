import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();

    let guestNavigation = (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link to="/register" className="button">Register</Link>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <span>Welcome, {user.username}</span>
            <Link className="button" to="/my-color-palettes">My Palettes</Link>
            <Link className="button" to="/my-favorites">My Favorites</Link>
            <Link className="button" to="/create">Add Color Palette</Link>
            <Link className="button" to="/logout">Logout</Link>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/dashboard">Dashboard</Link>

                    {user.username
                        ? userNavigation
                        : guestNavigation
                    }
                </section>
            </nav>
        </header>
    );
};

export default Header;