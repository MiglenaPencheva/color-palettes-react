import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import MyColorPalettes from './components/MyColorPalettes/MyColorPalettes';
import MyFavorites from './components/MyFavorites/MyFavorites';
import UploadPalette from './components/UploadPalette/UploadPalette';
import Edit from './components/Edit/Edit';
import Details from './components/Details/Details';
import ColorPickerPage from './components/ColorPickerPage/ColorPickerPage';
import SavePalette from './components/SavePalette/SavePalette';

function App() {
    return (
        <AuthProvider >
            <div id="app-container">
                {/* <Header /> */}

                <nav></nav>

                <main id="site-content">
                    <Routes>
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/my-color-palettes" element={<MyColorPalettes />} />
                        <Route path="/my-favorites" element={<MyFavorites />} />
                        <Route path="/upload" element={<UploadPalette />} />
                        <Route path="/details/:colorPaletteId" element={<Details />} />
                        <Route path="/edit/:colorPaletteId" element={<Edit />} />
                        <Route path="/color-picker" element={<ColorPickerPage />} />
                        <Route path="/save" element={<SavePalette />} />
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
