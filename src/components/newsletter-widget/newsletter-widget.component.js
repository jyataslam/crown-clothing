import React, { useState } from "react";

import ModernButton from "../modern-button/modern-button.component";

import {
    NewsLetterWidgetMain,
    Header,
    EmailInput,
} from "./newsletter-widget.styles";

const NewsletterWidget = () => {
    const [email, setEmail] = useState("");

    const handleChange = e => {
        setEmail(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (email !== "") {
            console.log("sent");
            clearInputField();
        } else {
            console.log("not sent");
            return;
        }
    };

    const clearInputField = () => {
        setEmail("");
    };

    return (
        <NewsLetterWidgetMain>
            <Header>
                be the first to know about exclusive offers, the latest content,
                and product releases
            </Header>
            <EmailInput
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={handleChange}
            />
            <ModernButton title="sign up" onClick={handleSubmit} />
        </NewsLetterWidgetMain>
    );
};

export default NewsletterWidget;
