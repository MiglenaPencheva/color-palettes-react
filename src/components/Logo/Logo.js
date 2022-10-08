import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

const initialHexState = {
    hex: '#94c7db',
    rgb: 'rgb(148, 199, 219)',
};

const Logo = () => {
    const navigate = useNavigate();

    const [hexToExplore, setHexToExplore] = useLocalStorage('hex', initialHexState);


    const showMenu = (e) => {
        e.target.style.transform = 'rotate(360deg)';
        e.target.style['transition-duration'] = '1.5s';
        setHexToExplore(initialHexState);
        navigate('/');
    };

    return (
        <img src="/images/logo.png" alt="logo" 
            onClick={showMenu}
            className="logo" />
    );
};

export default Logo;

