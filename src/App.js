import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import MyColorPalettes from './components/MyColorPalettes/MyColorPalettes';
import Create from './components/Create/Create';
import Details from './components/Details/Details';

function App() {
    return (
        <AuthProvider >
            <div id="container">
                <Header />

                <main id="site-content">
                    <Routes>
                        <Route path="/dashboard/*" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/my-color-palettes" element={<MyColorPalettes />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/details/:colorPaletteId" element={<Details />} />
                    </Routes>
                </main>

                <footer id="site-footer">
                    <p>@ColorPalettes</p>
                </footer>
            </div>
        </AuthProvider>
    );
}

export default App;
