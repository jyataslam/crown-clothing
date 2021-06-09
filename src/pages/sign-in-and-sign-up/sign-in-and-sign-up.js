import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <div className="flex-container">
                <SignIn />
                <SignUp />
            </div>
        </div>
    );
};

export default SignInAndSignUpPage;
