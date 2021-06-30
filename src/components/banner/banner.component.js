import React from "react";

import ModernButton from "../modern-button/modern-button.component";

import {
    Main,
    BackgroundOverlay,
    InnerContainer,
    ButtonContainer,
} from "./banner.styles";

const Banner = ({ backgroundImage }) => {
    return (
        <Main backgroundImage={backgroundImage}>
            <BackgroundOverlay />
            <InnerContainer>
                <p data-aos="fade-up">
                    "In a world where mediocrity is often the standard, our
                    life’s mission is to become the uncommon amongst the
                    uncommon."
                </p>
                <h3 data-aos="fade-up" data-aos-delay="100">
                    david goggins
                </h3>
                <ButtonContainer data-aos="fade-up" data-aos-delay="200">
                    <ModernButton
                        isroundandtransparent
                        title="shop now"
                        route="/shop"
                    />
                </ButtonContainer>
            </InnerContainer>
        </Main>
    );
};

export default Banner;
