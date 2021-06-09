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
    const [scrolled, setScrolled] = useState("100px");
    const [open, isOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 40) {
            setScrolled("70px");
        } else if (window.scrollY < 40) {
            setScrolled("100px");
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

    console.log(open);

    return (
        <HeaderContainer size={scrolled}>
            <NavBtnContainer>
                <Hamburger src={HamburgerOpen} onClick={handleSidenavClick} />
            </NavBtnContainer>
            <Sidenav isOpen={open} handleSidenavClick={handleSidenavClick} />
            <LogoContainer to="/">
                <Image src={Logo} alt="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">Shop</OptionLink>
                <OptionLink to="/about">About</OptionLink>
                {currentUser ? (
                    <OptionLink as="div" onClick={signOutStart}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                )}
            </OptionsContainer>
            <ShopButtonContainer>
                {currentUser !== null ? (
                    <UserIcon username={currentUser.displayName} />
                ) : null}
                <CartIcon />
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
