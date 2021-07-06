import React from "react";
import { motion } from "framer-motion";

import WhiteLogo from "../../assets/images/logo_white.png";

import {
    Main,
    BlackBox,
    LogoContainer,
    Logo,
} from "./initial-transition.styles";

const InitialTransition = () => {
    const blackBox = {
        initial: {
            height: "100vh",
            bottom: 0,
        },
        animate: {
            height: 0,
            transition: {
                delay: 1.2,
                duration: 1,
                ease: [0.87, 0, 0.13, 1],
            },
        },
    };

    const logoVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: 0.2,
                ease: [0.87, 0, 0.13, 1],
            },
        },
    };

    const containerVariants = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 0,
            transition: {
                when: "afterChildren",
                duration: 1,
                ease: [0.87, 0, 0.13, 1],
            },
        },
    };

    return (
        <Main>
            <BlackBox
                as={motion.div}
                initial="initial"
                animate="animate"
                variants={blackBox}
            >
                <LogoContainer as={motion.div} variants={containerVariants}>
                    <Logo
                        src={WhiteLogo}
                        as={motion.img}
                        variants={logoVariants}
                    />
                </LogoContainer>
            </BlackBox>
        </Main>
    );
};

export default InitialTransition;
