import React from 'react';
import { Link } from 'react-router-dom';

const SignInScreenContent = () => {
    return (
        <div className="main-wrraper">
            <div className="container py-0">
                <div className="sign-in-screen">
                    <div className="sign-in-screen-cn">
                        <div className="icon-arrow">
                            <Link to="/welcome-screen">
                                <i className="fa fa-long-arrow-left" aria-hidden="true" />
                            </Link>
                            <Link to="/sign-up" className="register-cls">Register</Link>
                        </div>
                        <h1>Sign In</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum perspiciatis, eius nisi,
                        </p>
                    </div>
                    <div className="sign-in-fn">
                        <form action="#" className="sign-in-form">
                            <input type="text" className="username-and-pass" placeholder="Username" />
                            <input type="password" className="username-and-pass" placeholder="Password" />
                            <div className="forget-btn">
                                <Link to="/forget-password" className="forget-inner">Forget Password</Link>
                            </div>
                            <div className="sign-in-button">
                                <button type="submit" className="sign-in-btn-s">Sign In</button>
                            </div>
                        </form>
                    </div>
                    <div className="account-verfy">
                        <Link className="contiune-with" to="/">
                            <img src="assets/images/icon/google.jpg" alt="google" className="google-icon" />
                            <span className="with-google-titile">Contiune with Google</span>
                            <i className="fa fa-long-arrow-right" aria-hidden="true" />
                        </Link>
                        <Link className="contiune-with" to="/">
                            <img src="assets/images/icon/facebook.jpg" alt="google" className="google-icon" />
                            <span className="with-google-titile">Contiune with Facebook</span>
                            <i className="fa fa-long-arrow-right" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default SignInScreenContent;
