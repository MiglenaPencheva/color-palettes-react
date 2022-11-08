import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import GoToTop from './components/GoToTop/GoToTop';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';

import Gallery from './components/GalleryPage/GalleryPage';
import ColorPaletteList from './components/GalleryPage/ColorPalettesList';
import Details from './components/Details/Details';
import SavePalette from './components/UploadPalette/SavePalette';
import UploadPalette from './components/UploadPalette/UploadPalette';
import Edit from './components/Edit/Edit';
import Categories from './components/GalleryPage/Categories';
import ColorGroups from './components/GalleryPage/ColorGroups';

import ColorPickerPage from './components/ColorPickerPage/ColorPickerPage';

import CombinationsPage from './components/CombinationsPage/CombinationsPage';
import RybWheel from './components/CombinationsPage/RybWheel';
import Wheels from './components/CombinationsPage/Wheels';
import Schemes from './components/CombinationsPage/Schemes';

import ExploreColorPage from './components/ExploreColorPage/ExploreColorPage';
import Convertor from './components/ExploreColorPage/Convertor';
import RgbMixer from './components/ExploreColorPage/RgbMixer';
import HslMixer from './components/ExploreColorPage/HslMixer';
import Neutrals from './components/ExploreColorPage/Neutrals';
import Temperature from './components/ExploreColorPage/Temperature';

function App() {

    return (
        <AuthProvider >
            <div id="app-container">

                <Logo />
                <Menu />
                <GoToTop />

                <main id="site-content">
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />

                        <Route path="/gallery" element={<Gallery />} >
                            <Route path="all" element={<ColorPaletteList />} />
                            <Route path="categories" element={<Categories />} />
                            <Route path="groups" element={<ColorGroups />} />
                            <Route path="favorites" element={<ColorPaletteList />} />
                            <Route path="mine" element={<ColorPaletteList />} />
                            <Route path="upload" element={<UploadPalette />} />
                        </Route>

                        <Route path="details/:colorPaletteId" element={<Details />} />
                        <Route path="edit/:colorPaletteId" element={<Edit />} />

                        <Route path="/color-picker" element={<ColorPickerPage />} />
                        <Route path="/save" element={<SavePalette />} />

                        <Route path="/combinations" element={<CombinationsPage />} >
                            <Route path="color-wheel" element={<RybWheel />} />
                            <Route path="wheels" element={<Wheels />} />
                            <Route path="schemes" element={<Schemes />} />
                        </Route>

                        <Route path="/color-explore" element={<ExploreColorPage />} >
                            <Route path="convertor" element={<Convertor />} />
                            <Route path="rgb-mixer" element={<RgbMixer />} />
                            <Route path="hsl-mixer" element={<HslMixer />} />
                            <Route path="neutrals" element={<Neutrals />} />
                            <Route path="temperature" element={<Temperature />} />
                        </Route>
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
