import React from "react";

import ModernButton from "../modern-button/modern-button.component";

import { Header, Subheader, Main } from "./section-title.styles";

const SectionTitle = ({ title, subtitle, addModernButton, background }) => {
    return (
        <Main background={background}>
            <Header data-aos="fade">{title}</Header>
            <Subheader data-aos="fade">{subtitle}</Subheader>
            {addModernButton ? (
                <ModernButton
                    isroundandcolorful
                    title="shop now"
                    route="/shop"
                    data-aos="fade"
                />
            ) : null}
        </Main>
    );
};

export default SectionTitle;
