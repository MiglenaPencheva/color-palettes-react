import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import { hideError, showError } from '../../helpers/notifications';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();

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
            navigate('/');
        } catch (error) {
            showError(error.message);
        }
    };

    return (
        <section id="login-page" className="login-page">
            <form id="login-form" onSubmit={onLoginHandler} method="POST">
                <fieldset className="login-fieldset">
                    <legend>Login Form</legend>

                    <fieldset className="user__fieldset">
                        <legend className="user__legend">Username</legend>
                        <input type="text" name="username" id="username"
                            className="user__input" />
                    </fieldset>

                    <fieldset className="user__fieldset">
                        <legend className="user__legend">Password</legend>
                        <input type="password" name="password" id="password"
                            className="user__input" />
                    </fieldset>

                    <input className="button user__submit-btn"
                        type="submit"
                        value="Login" />

                </fieldset>
            </form>
        </section>
    );
};

export default Login;