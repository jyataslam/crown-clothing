import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import "./sign-up.scss";

import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords Do Not Match");
            return;
        }

        signUpStart({ displayName, email, password });

        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(
        //         email,
        //         password
        //     );

        //     await createUserProfileDocument(user, { displayName });

        //     this.setState({
        //         displayName: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: "",
        //     });
        // } catch (error) {
        //     console.log(error.message);
        // }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-up">
            <h2 className="title">I Do Not Have An Account</h2>
            <span>Sign Up With Your Email And Password</span>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
