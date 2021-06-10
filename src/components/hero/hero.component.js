import React from "react";

import ModernButton from "../modern-button/modern-button.component";

import { HeroContainer, HeroTitle, HeroSubtitle } from "./hero.styles";

const Hero = ({
    title,
    subtitle,
    route,
    btnTitle,
    backgroundSizeClass,
    children,
    textWidth50,
    backgroundPositionCenter,
    ...props
}) => {
    return (
        <HeroContainer
            {...props}
            className={`${backgroundSizeClass} ${backgroundPositionCenter}`}
        >
            <HeroTitle className={textWidth50 ? "text-width-50" : null}>
                {title}
            </HeroTitle>
            <HeroSubtitle className={textWidth50 ? "text-width-50" : null}>
                {subtitle}
            </HeroSubtitle>
            {route && btnTitle ? (
                <ModernButton
                    route={route}
                    title={btnTitle}
                    whiteAndTransparent
                />
            ) : null}
        </HeroContainer>
    );
};

export default Hero;
