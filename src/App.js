import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import MyColorPalettes from './components/MyColorPalettes/MyColorPalettes';
import MyFavorites from './components/MyFavorites/MyFavorites';
import UploadPalette from './components/UploadPalette/UploadPalette';
import SavePalette from './components/UploadPalette/SavePalette';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import ColorPickerPage from './components/ColorPickerPage/ColorPickerPage';
import CombinationsPage from './components/CombinationsPage/CombinationsPage';
import ExploreColorPage from './components/ExploreColorPage/ExploreColorPage';

function App() {
    return (
        <AuthProvider >
            <div id="app-container">
                {/* <Header /> */}

                <nav></nav>

                <main id="site-content">
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />

                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/my-color-palettes" element={<MyColorPalettes />} />
                        <Route path="/my-favorites" element={<MyFavorites />} />
                        {/* <Route path="/my-favorites" element={user ? <MyFavorites /> : navigate('/login')} /> */}
                        <Route path="/upload" element={<UploadPalette />} />
                        <Route path="/details/:colorPaletteId" element={<Details />} />
                        <Route path="/edit/:colorPaletteId" element={<Edit />} />

                        <Route path="/color-picker" element={<ColorPickerPage />} />
                        <Route path="/save" element={<SavePalette />} />
                        <Route path="/color-wheel" element={<CombinationsPage />} />
                        <Route path="/color-explore" element={<ExploreColorPage />} />
                    </Routes>
                </main>

                {/* <footer id="site-footer">
                    <p>@ColorPalettes</p>
                </footer> */}
            </div>
        </AuthProvider>
    );
}

export default App;
