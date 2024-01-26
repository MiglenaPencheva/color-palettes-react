import { useNavigate, Link } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/LanguageContext';

import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import { hideError, showError } from '../../helpers/notifications';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const { language } = useLanguageContext();

    const onLoginHandler = async (e) => {
        e.preventDefault();

        try {
            let formData = new FormData(e.currentTarget);

            let username = formData.get('username');
            let password = formData.get('password');

            if (username.trim() === '') { throw new Error('Username required'); }
            if (password.trim() === '') { throw new Error('Password required'); }

            let authData = await authService.login(username, password);
            login(authData);
            hideError();
            navigate('/home');
        } catch (error) {
            showError(error.message);
        }
    };

    return (
        <section className="login-page">
            <form id="login-form" onSubmit={onLoginHandler} method="POST">
                <fieldset className="login-fieldset">
                    <legend>{language.lang === 'en' ? 'Login Form' : 'Вход към приложението'}</legend>

                    <fieldset className="user__fieldset">
                        <legend className="user__legend">{language.lang === 'en' ? 'Username' : 'Потребителско име'}</legend>
                        <input type="text" name="username" id="username"
                            className="user__input" />
                    </fieldset>

                    <fieldset className="user__fieldset">
                        <legend className="user__legend">{language.lang === 'en' ? 'Password' : 'Парола'}</legend>
                        <input type="password" name="password" id="password"
                            className="user__input" />
                    </fieldset>

                    <input className="button user__submit-btn"
                        type="submit" value={language.lang === 'en' ? 'Login' : 'Вход'} />

                    {language.lang === 'en'
                        ? <p>Need an account? <b><i><Link to="/register">Sign up.</Link></i></b></p>
                        : <p>Нямаш профил? <b><i><Link to="/register">Регистрирай се.</Link></i></b></p>
                    }
                    

                </fieldset>
            </form>
        </section>
    );
};

export default Login;