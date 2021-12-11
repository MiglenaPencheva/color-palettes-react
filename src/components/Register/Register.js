import { useNavigate } from 'react-router';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';


const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const registerSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            let formData = new FormData(e.currentTarget);

            let username = formData.get('username');
            let password = formData.get('password');

            let authData = await authService.register(username, password);
            login(authData);

            navigate('/dashboard');

        } catch (error) {
            console.log(error);
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
                            <input type="text" name="username" id="username" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
};

export default Register;