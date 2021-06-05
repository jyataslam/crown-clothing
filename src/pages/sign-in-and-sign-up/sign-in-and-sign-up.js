import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import Hero from "../../components/hero/hero.component";

import image from "../../assets/images/hero_homepage.jpg";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Hero
                backgroundImage={image}
                title="Stay Hard"
                subtitle="A Tribute to the hardest man alive"
            />
            <div className="flex-container">
                <SignIn />
                <SignUp />
            </div>
        </div>
    );
};

export default SignInAndSignUpPage;
