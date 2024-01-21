import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

const initialHexState = {
    hex: '#94c7db',
    rgb: 'rgb(148, 199, 219)',
};

const Logo = () => {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let logoName = document.getElementById('logoName');
            if (window.scrollY > 20) {
                logoName.style.opacity = 0;
            } else {
                logoName.style.opacity = 0.7;
            }
        });
    }, []);

    const navigate = useNavigate();

    const [hexToExplore, setHexToExplore] = useLocalStorage('hex', initialHexState);


    const goHome = (e) => {
        setHexToExplore(initialHexState);
        navigate('/');
    };

    return (
        <div className="logoDiv">
            <img src="/images/logo.png" alt="logo"
                onClick={goHome}
                className="logo" />
            <span id="logoName" className="logoName">MegaColorMix</span>
        </div>
    );
};

export default Logo;

