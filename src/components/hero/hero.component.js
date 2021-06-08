import React from "react";

import ModernButton from "../modern-button/modern-button.component";

import { HeroContainer, HeroTitle, HeroSubtitle } from "./hero.styles";

const Hero = ({ title, subtitle, ...props }) => {
    return (
        <HeroContainer {...props}>
            <HeroTitle>{title}</HeroTitle>
            <HeroSubtitle>{subtitle}</HeroSubtitle>
            <ModernButton route="/shop" title="Shop Now" />
        </HeroContainer>
    );
};

export default Hero;
