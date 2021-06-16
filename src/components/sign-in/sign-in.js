import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import "./sign-in.styles.scss";

import {
    googleSignInStart,
    emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart, error }) => {
    const [userCredentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const [isLoading, setLoading] = useState(false);

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        setLoading(true);
        emailSignInStart(email, password);
        setLoading(false);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2 className="title">Already have an account?</h2>
            <span>Sign in or get started with a Google account</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit" className="sign-in-btn">
                        <span
                            className={`spinner ${isLoading ? "show" : ""}`}
                        ></span>{" "}
                        Sign In
                    </CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        Sign In With Google
                    </CustomButton>
                </div>
                <p className={`error ${error !== null ? "show" : ""}`}>
                    incorrect email and/or password
                </p>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
});

const mapStateToProps = state => ({
    error: state.user.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
