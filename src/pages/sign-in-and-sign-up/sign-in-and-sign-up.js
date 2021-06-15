import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import GogginsLogo from "../../assets/images/goggins_logo.png";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <div className="sign-in-hero">
                <div className="sign-in-content">
                    <img
                        src={GogginsLogo}
                        alt="david goggins axe logo"
                        className="logo"
                    />
                    <h1>
                        Become a DG Insider for exclusive content and access to
                        the newest gear
                    </h1>
                </div>
            </div>
            <div className="flex-container">
                <SignIn />
                <SignUp />
            </div>
        </div>
    );
};

export default SignInAndSignUpPage;
