import React from "react";

import { HeroContainer, HeroTitle, HeroSubtitle } from "./hero.styles";

const Hero = ({ title, subtitle, ...props }) => {
    return (
        <HeroContainer {...props}>
            <HeroTitle>{title}</HeroTitle>
            <HeroSubtitle>{subtitle}</HeroSubtitle>
        </HeroContainer>
    );
};

export default Hero;
