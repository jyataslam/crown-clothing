import React, { Component } from "react";

import FormInput from "../../components/form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import "./sign-in.styles.scss";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: "",
            password: "",
        });
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;