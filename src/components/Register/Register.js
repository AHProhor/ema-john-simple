import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h1>Create Account</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-Enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                    <p>Already have an account? <Link to="./login">Login</Link></p>
                </form>
                <div>
                -----------or----------
                <br />
                <button className="btn-regular">Google sign in</button>
            </div>
            </div>
        </div>
    );
};

export default Register;