import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as authService from './services/authService';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import MyColorPalettes from './components/MyColorPalettes/MyColorPalettes';
import Create from './components/Create/Create';
import Details from './components/Details/Details';

function App() {
    const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '' });

    useEffect(() => {
        let user = authService.getUser();

        setUserInfo({ isAuthenticated: Boolean(user), user });
    }, []);

    const onLogin = (username) => {
        setUserInfo({ isAuthenticated: true, user: username });
    };

    const onLogout = (e) => {
        setUserInfo({ isAuthenticated: false, user: null });
    };

    return (
        <div id="container">
            <Header {...userInfo} />
            {/* <Header {...userInfo} /> */}

            <main id="site-content">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login  onLogin={onLogin} />} />
                    <Route path="/logout" element={<Logout onLogout={onLogout} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/my-color-palettes" element={<MyColorPalettes />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/details/:petId" element={<Details />} />
                </Routes>
            </main>

            <footer id="site-footer">
                <p>@ColorPalettes</p>
            </footer>
        </div>
    );
}

export default App;
