import React from 'react';
import { Link } from 'react-router-dom';

const SignUpScreenContent = () => {
    return (
        <div className="main-wrraper">
            <div className="container py-0">
                <div className="sign-in-screen">
                    <div className="sign-in-screen-cn">
                        <div className="icon-arrow">
                            <Link to="/welcome-screen">
                                <i className="fa fa-long-arrow-left" aria-hidden="true" />
                            </Link>
                            <Link to="/sign-in" className="register-cls">Login</Link>
                        </div>
                        <h1>Sign Up</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum perspiciatis, eius nisi,
                        </p>
                    </div>
                    <div className="sign-in-fn">
                        <form action="#" className="sign-in-form">
                            <input type="text" className="username-and-pass" placeholder="Username" />
                            <input type="email" className="email-user" placeholder="Email" />
                            <input type="password" className="username-and-pass" placeholder="Password" />
                            <input type="password" className="username-and-pass" placeholder="Confirm Password" />
                            <div className="forget-btn">
                                <span className="forget-inner-allready">Already have an account</span>
                            </div>
                            <div className="sign-in-button">
                                <button type="submit" className="sign-in-btn-s">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div className="account-verfy-sin-up">
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

export default SignUpScreenContent;
