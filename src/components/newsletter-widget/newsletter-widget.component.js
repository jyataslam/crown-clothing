import React from "react";

import ModernButton from "../modern-button/modern-button.component";

import {
    NewsLetterWidgetMain,
    Header,
    EmailInput,
} from "./newsletter-widget.styles";

const NewsletterWidget = () => (
    <NewsLetterWidgetMain>
        <Header>
            be the first to know about exclusive offers, the latest content, and
            product releases
        </Header>
        <EmailInput type="text" name="email" placeholder="EMAIL ADDRESS" />
        <ModernButton title="sign up" />
    </NewsLetterWidgetMain>
);

export default NewsletterWidget;
