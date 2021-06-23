import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import UserIcon from "../user-icon/user-icon.component";
import Sidenav from "../sidenav/sidenav.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import Logo from "../../assets/images/logo_footer.png";
import HamburgerOpen from "../../assets/images/hamburger_open.png";

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    ShopButtonContainer,
    NavBtnContainer,
    OptionLink,
    Image,
    Hamburger,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => {
    const [scrolled, setScrolled] = useState(false);
    const [open, isOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 40) {
            setScrolled(true);
        } else if (window.scrollY < 40) {
            setScrolled(false);
        }
    };

    const handleSidenavClick = () => {
        isOpen(!open);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <HeaderContainer
            size={scrolled}
            className={scrolled ? "scrolled" : "null"}
        >
            <NavBtnContainer>
                <Hamburger
                    src={HamburgerOpen}
                    onClick={handleSidenavClick}
                    className={scrolled ? "scrolled" : "null"}
                />
            </NavBtnContainer>
            <Sidenav isOpen={open} handleSidenavClick={handleSidenavClick} />
            <OptionsContainer>
                <OptionLink to="/" className={scrolled ? "scrolled" : "null"}>
                    Home
                </OptionLink>
                <OptionLink
                    to="/shop"
                    className={scrolled ? "scrolled" : "null"}
                >
                    Shop
                </OptionLink>
                <OptionLink
                    to="/about"
                    className={scrolled ? "scrolled" : "null"}
                >
                    About
                </OptionLink>
                {currentUser ? (
                    <OptionLink
                        as="div"
                        onClick={signOutStart}
                        className={scrolled ? "scrolled" : "null"}
                    >
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink
                        to="/signin"
                        className={scrolled ? "scrolled" : "null"}
                    >
                        SIGN IN
                    </OptionLink>
                )}
            </OptionsContainer>
            <LogoContainer to="/">
                <Image
                    src={Logo}
                    alt="david goggins stay hard logo"
                    className={scrolled ? "scrolled" : "null"}
                />
            </LogoContainer>
            <ShopButtonContainer>
                {currentUser !== null ? (
                    <UserIcon username={currentUser.displayName} />
                ) : null}
                <CartIcon scrolled={scrolled} />
                {hidden ? null : <CartDropdown />}
            </ShopButtonContainer>
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
