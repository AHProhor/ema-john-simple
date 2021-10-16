import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.form || './shop';


    const handleGooglekLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
             history.push(redirect_url);
        })
    }
    return (
        <div className="login-form">
            <div>
                <h1>Login</h1>
                <form>
                    <input type="email" name="" placeholder="Your Email" />
                    <br />
                    <input type="password" name=""  placeholder="Password"/>
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                    <p>New to Ema-John? <Link to="./register"> Create account </Link></p>
                </form>
                <div>
                    -------------or-------------
                    <br />
                    <button className="btn-regular"
                    onClick={handleGooglekLogin}
                    >Google Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;