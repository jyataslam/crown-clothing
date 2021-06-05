import React from "react";
import { SocialIcon } from "react-social-icons";

import logo from "../../assets/images/logo_footer.png";

import {
    FooterSection,
    Logo,
    FourthContainer,
    SectionHeader,
    QuickLink,
    SocialIconContainer,
} from "./footer.styles";

const Footer = () => {
    return (
        <FooterSection>
            <FourthContainer>
                <Logo src={logo} />
            </FourthContainer>
            <FourthContainer>
                <SectionHeader>Quick Links</SectionHeader>
                <QuickLink to="/shop">Shop</QuickLink>
                <QuickLink to="/about">About</QuickLink>
                <QuickLink to="/contact">Contact</QuickLink>
            </FourthContainer>
            <FourthContainer>
                <SectionHeader>Stay Hard Newsletter</SectionHeader>
            </FourthContainer>
            <FourthContainer>
                <SectionHeader>Follow Us</SectionHeader>
                <SocialIconContainer>
                    <SocialIcon
                        url="https://www.instagram.com/davidgoggins/"
                        bgColor="transparent"
                        fgColor="#565454"
                    />
                    <SocialIcon
                        url="https://twitter.com/davidgoggins"
                        bgColor="transparent"
                        fgColor="#565454"
                    />
                    <SocialIcon
                        url="https://www.facebook.com/iamdavidgoggins"
                        bgColor="transparent"
                        fgColor="#565454"
                    />
                </SocialIconContainer>
            </FourthContainer>
        </FooterSection>
    );
};

export default Footer;
