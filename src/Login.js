import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">

            <Link to="/">
                <img className="login__logo"
                    src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png"
                    alt="amazon_logo"
                />
            </Link>

            <div className="login__container">   
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input  placeholder="Enter your E-mail" type="email" />
                    <h5>Password</h5>
                    <input  placeholder="Enter your Password" type="password" />
                    
                    <button type="submit" className="signin__button">Sign In</button>
                </form>

                <p> 
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button className="signup__button">Create your Amazon Account</button>
            </div>

            {/* <h1>Login Page</h1> */}
        </div>
    );
}

export default Login


{/* By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. */ }