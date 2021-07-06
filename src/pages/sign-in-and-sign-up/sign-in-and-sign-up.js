import React from "react";
import { motion } from "framer-motion";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import GogginsLogo from "../../assets/images/logo_white.png";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
    return (
        <motion.div
            className="sign-in-and-sign-up"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
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
        </motion.div>
    );
};

export default SignInAndSignUpPage;
