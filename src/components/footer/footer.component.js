import React from "react";
import { SocialIcon } from "react-social-icons";

import NewsletterWidget from "../newsletter-widget/newsletter-widget.component";

import logo from "../../assets/images/logo_white.png";

import {
    FooterSection,
    Logo,
    FourthContainer,
    SectionHeader,
    QuickLink,
    SocialIconContainer,
    DisclaimerContainer,
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
            </FourthContainer>
            <FourthContainer>
                <SectionHeader>Stay Hard Newsletter</SectionHeader>
                <NewsletterWidget />
            </FourthContainer>
            <FourthContainer>
                <SectionHeader>Follow Us</SectionHeader>
                <SocialIconContainer>
                    <SocialIcon
                        url="https://www.instagram.com/davidgoggins/"
                        bgColor="transparent"
                        fgColor="#d6d6d6"
                    />
                    <SocialIcon
                        url="https://twitter.com/davidgoggins"
                        bgColor="transparent"
                        fgColor="#d6d6d6"
                    />
                    <SocialIcon
                        url="https://www.facebook.com/iamdavidgoggins"
                        bgColor="transparent"
                        fgColor="#d6d6d6"
                    />
                </SocialIconContainer>
            </FourthContainer>
            <DisclaimerContainer>
                <p>
                    Fair Use Notice: This web site contains copyrighted material
                    whose use has not been authorized by David Goggins. This
                    site is non-profit, and is intended for educational use,
                    constituting a fair use of the copyrighted material (as
                    provided for in section 107 of the US Copyright Law.) If you
                    wish to use this copyrighted material for purposes that go
                    beyond fair use, you must first obtain permission from the
                    David Goggins Company. All David Goggins related artwork and
                    audio posted on this site is owned by David Goggins. This
                    site is in no way affiliated or endorsed by David Goggins.
                    For official David Goggins information please visit{" "}
                    <a
                        href="shop.davidgoggins.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        shop.davidgoggins.com
                    </a>
                    : Please support David Goggins by purchasing his merchandise
                    and reading his book.
                </p>
            </DisclaimerContainer>
        </FooterSection>
    );
};

export default Footer;
