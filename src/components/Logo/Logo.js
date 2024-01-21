import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

const initialHexState = {
    hex: '#94c7db',
    rgb: 'rgb(148, 199, 219)',
};

const Logo = () => {
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
            <span className="logoName">MegaColorMix</span>
        </div>
    );
};

export default Logo;

