import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();

    const showMenu = (e) => {
        e.target.style.transform = 'rotate(360deg)';
        e.target.style['transition-duration'] = '1.5s';
        navigate('/');
    };

    return (
        <img src="/images/logo.png" alt="logo" 
            onClick={showMenu}
            className="logo" />
    );
};

export default Logo;

