import { useNavigate, Link } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/LanguageContext';

import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import { hideError, showError } from '../../helpers/notifications';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const { language } = useLanguageContext();

    const registerSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            let formData = new FormData(e.currentTarget);

            let username = formData.get('username');
            let password = formData.get('password');
            let rePassword = formData.get('rePassword');

            if (username.trim() === '') { throw new Error('Username required'); }
            if (password.trim() === '') { throw new Error('Password required'); }
            if (rePassword.trim() === '') { throw new Error('Password required'); }
            if (password.trim() !== rePassword.trim()) { throw new Error('Password mismatch'); }

            let authData = await authService.register(username, password);
            login(authData);
            hideError();
            navigate('/home');

        } catch (error) {
            showError(error.message);
        }
    };

    return (
        <section className="login-page">
            <form id="register-form" action="" method="POST" onSubmit={registerSubmitHandler}>
                <fieldset className="login-fieldset">
                    <legend>{language.lang === 'en' ? 'Register Form' : 'Регистрационна форма'}</legend>

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

                    <fieldset className="user__fieldset">
                        <legend className="user__legend">{language.lang === 'en' ? 'Repeat Password' : 'Повтори паролата'}</legend>
                        <input type="password" name="rePassword" id="rePassword"
                            className="user__input" />
                    </fieldset>

                    <input className="button user__submit-btn"
                        type="submit" value={language.lang === 'en' ? 'Register' : 'Регистрация'} />

                    {language.lang === 'en'
                        ? <p>Already have an account? <b><i><Link to="/login">Sign in.</Link></i></b></p>
                        : <p>Имаш профил? <b><i><Link to="/login">Влез в приложението.</Link></i></b></p>
                    }
                </fieldset>
            </form>
        </section>
    );
};

export default Register;