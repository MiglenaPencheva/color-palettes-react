import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import * as authService from '../../services/authService';

const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    
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
            
            navigate('/dashboard');
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginHandler} method="POST">
                <fieldset>
                    <legend>Login Form</legend>
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
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
};

export default Login;