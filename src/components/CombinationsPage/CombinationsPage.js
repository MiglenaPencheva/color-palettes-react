import { Routes, Route, NavLink } from 'react-router-dom';

import RybWheel from './RybWheel';
import Wheels from './Wheels';
import Schemes from './Schemes';
import Neutrals from './Neutrals';
import Pastels from './Pastels';

const Combinations = () => {

    return (
        <section className="combinations-page" >

            <section className="section-header">
                <h2>Color combinations</h2>
                <h6> Find the colors that go well together.
                    Combine vibes in nice and accurate color schemes.</h6>
                <h6 className="diffHeading"> Be the designer of your colorful life.</h6>
            </section>

            <nav className="combinations__navbar">
                <NavLink to="color-wheel" className={({ isActive }) => isActive ? 'active' : ''}>Color Wheel</NavLink>
                <NavLink to="wheels" className={({ isActive }) => isActive ? 'active' : ''}>Wheels</NavLink>
                <NavLink to="schemes" className={({ isActive }) => isActive ? 'active' : ''}>Schemes</NavLink>
                <NavLink to="neutrals" className={({ isActive }) => isActive ? 'active' : ''}>Neutrals</NavLink>
                <NavLink to="pastels" className={({ isActive }) => isActive ? 'active' : ''}>Pastels</NavLink>
            </nav>

            <Routes>
                <Route path="" element={<RybWheel />} />
                <Route path="color-wheel" element={<RybWheel />} />
                <Route path="wheels" element={<Wheels />} />
                <Route path="schemes" element={<Schemes />} />
                <Route path="neutrals" element={<Neutrals />} />
                <Route path="pastels" element={<Pastels />} />
            </Routes>

        </section>
    );
};

export default Combinations;