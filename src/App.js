import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

import Logo from './components/Logo/Logo';
import GoToTop from './components/GoToTop/GoToTop';
import Menu from './components/Menu/Menu';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';

import Gallery from './components/GalleryPage/GalleryPage';
import ColorPaletteList from './components/GalleryPage/ColorPalettesList';
import Details from './components/Details/Details';
import Categories from './components/GalleryPage/Categories';
import ColorGroups from './components/GalleryPage/ColorGroups';

import GuardedRoute from './components/GuardedRoute/GuardedRoute';
import UploadPalette from './components/UploadPalette/UploadPalette';
import Edit from './components/Edit/Edit';

import ColorPickerPage from './components/ColorPickerPage/ColorPickerPage';
import PaletteMaker from './components/ColorPickerPage/PaletteMaker';
import SwatchesCard from './components/ColorPickerPage/SwatchesCard';

import CombinationsPage from './components/CombinationsPage/CombinationsPage';
import RybWheel from './components/CombinationsPage/RybWheel';
import Wheels from './components/CombinationsPage/Wheels';
import Schemes from './components/CombinationsPage/Schemes';
import Neutrals from './components/CombinationsPage/Neutrals';
import Pastels from './components/CombinationsPage/Pastels';
import PastelsBG from './components/CombinationsPage/PastelsBG';

import ExploreColorPage from './components/ExploreColorPage/ExploreColorPage';
import Convertor from './components/ExploreColorPage/Convertor';
import RgbMixer from './components/ExploreColorPage/RgbMixer';
import HslMixer from './components/ExploreColorPage/HslMixer';
import ColorNames from './components/ExploreColorPage/ColorNames';
import ExploreGroups from './components/ExploreColorPage/ExploreGroups';

function App() {
    const { language } = useLanguage();

    return (
        <LanguageProvider>
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
                                <Route element={<GuardedRoute />}>
                                    <Route path="upload" element={<UploadPalette />} />
                                </Route>
                            </Route>

                            <Route path="details/:colorPaletteId" element={<Details />} />
                            <Route element={<GuardedRoute />}>
                                <Route path="edit/:colorPaletteId" element={<Edit />} />
                            </Route>

                            <Route path="/color-picker" element={<ColorPickerPage />}>
                                <Route path="palette-maker" element={<PaletteMaker />} />
                                <Route path="swatches" element={<SwatchesCard />} />
                            </Route>

                            <Route path="/combinations" element={<CombinationsPage />} >
                                <Route path="color-wheel" element={<RybWheel />} />
                                <Route path="wheels" element={<Wheels />} />
                                <Route path="schemes" element={<Schemes />} />
                                <Route path="neutrals" element={<Neutrals />} />
                                {language === 'en'
                                    ? <Route path="pastels" element={<Pastels />} />
                                    : <Route path="pastels" element={<PastelsBG />} />
                                }
                            </Route>

                            <Route path="/color-explore" element={<ExploreColorPage />} >
                                <Route path="convertor" element={<Convertor />} />
                                <Route path="rgb-mixer" element={<RgbMixer />} />
                                <Route path="hsl-mixer" element={<HslMixer />} />
                                <Route path="color-names" element={<ColorNames />} />
                                <Route path="groups" element={<ExploreGroups />} />
                            </Route>
                        </Routes>
                    </main>

                </div>
            </AuthProvider>
        </LanguageProvider>
    );
}

export default App;
