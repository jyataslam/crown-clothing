import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SocialIcon } from "react-social-icons";

import SidenavUserIcon from "../sidenav-icon/sidenav-icon.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import Logo from "../../assets/images/goggins_logo.png";
import HamburgerClose from "../../assets/images/hamburger_close.png";

import {
    SidenavMain,
    SidenavHeader,
    SidenavLogo,
    HamburgerSpan,
    Hamburger,
    LinksContainer,
    LinkContainer,
    SidenavLink,
    SocialLinksContainer,
} from "./sidenav.styles";

const Sidenav = ({ isOpen, handleSidenavClick, currentUser, signOutStart }) => (
    <SidenavMain className={isOpen ? "open" : null}>
        <SidenavHeader>
            <SidenavLogo src={Logo} alt="stay hard logo" />
            <HamburgerSpan onClick={handleSidenavClick}>
                <Hamburger src={HamburgerClose} />
            </HamburgerSpan>
        </SidenavHeader>
        <LinksContainer>
            <LinkContainer>
                <SidenavLink to="/" onClick={handleSidenavClick}>
                    home
                </SidenavLink>
            </LinkContainer>
            <LinkContainer>
                <SidenavLink to="/shop" onClick={handleSidenavClick}>
                    shop all
                </SidenavLink>
            </LinkContainer>
            <LinkContainer>
                <SidenavLink to="/shop/mens" onClick={handleSidenavClick}>
                    men
                </SidenavLink>
            </LinkContainer>
            <LinkContainer>
                <SidenavLink to="/shop/womens" onClick={handleSidenavClick}>
                    womens
                </SidenavLink>
            </LinkContainer>
            <LinkContainer>
                <SidenavLink to="/shop/jackets" onClick={handleSidenavClick}>
                    jackets
                </SidenavLink>
            </LinkContainer>
            <LinkContainer>
                <SidenavLink to="/shop/sneakers" onClick={handleSidenavClick}>
                    sneakers
                </SidenavLink>
            </LinkContainer>
            <LinkContainer>
                <SidenavLink to="/shop/hats" onClick={handleSidenavClick}>
                    hats
                </SidenavLink>
            </LinkContainer>
            <LinkContainer>
                <SidenavLink to="/about" onClick={handleSidenavClick}>
                    about
                </SidenavLink>
            </LinkContainer>
            {currentUser ? (
                <LinkContainer>
                    <SidenavLink onClick={signOutStart}>sign out</SidenavLink> /{" "}
                    <SidenavUserIcon username={currentUser.displayName} />
                </LinkContainer>
            ) : (
                <LinkContainer>
                    <SidenavLink to="/signin" onClick={handleSidenavClick}>
                        sign in / join
                    </SidenavLink>
                </LinkContainer>
            )}
        </LinksContainer>
        <SocialLinksContainer>
            <SocialIcon
                url="https://www.instagram.com/davidgoggins/"
                bgColor="transparent"
                fgColor="#565454"
                style={{ height: "40px", width: "40px" }}
            />
            <SocialIcon
                url="https://twitter.com/davidgoggins"
                bgColor="transparent"
                fgColor="#565454"
                style={{ height: "40px", width: "40px" }}
            />
            <SocialIcon
                url="https://www.facebook.com/iamdavidgoggins"
                bgColor="transparent"
                fgColor="#565454"
                style={{ height: "40px", width: "40px" }}
            />
        </SocialLinksContainer>
    </SidenavMain>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidenav);
