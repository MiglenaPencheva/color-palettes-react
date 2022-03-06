import { useNavigate } from 'react-router';

import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import { hideError, showError } from '../../helpers/notifications';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();

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
            navigate('/dashboard');

        } catch (error) {
            showError(error.message);
        }
    };

    return (
        <section id="register-page" className="register">
            <form id="register-form" action="" method="POST" onSubmit={registerSubmitHandler}>
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label htmlFor="username">Username</label>
                        <span className="input">
                            <input type="text" name="username" id="username" placeholder="Username" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="rePassword">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="rePassword" id="rePassword" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
};

export default Register;