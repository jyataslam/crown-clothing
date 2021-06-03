import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import Logo from "../../assets/images/goggins_logo.png";

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    ShopButtonContainer,
    OptionLink,
    Image,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => {
    const [scrolled, setScrolled] = useState("100px");

    const handleScroll = () => {
        if (window.scrollY >= 40) {
            setScrolled("70px");
        } else if (window.scrollY < 40) {
            setScrolled("100px");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <HeaderContainer size={scrolled}>
            <LogoContainer to="/">
                <Image src={Logo} alt="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">Shop</OptionLink>
                <OptionLink to="/contact">Contact</OptionLink>
                {currentUser ? (
                    <OptionLink as="div" onClick={signOutStart}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                )}
            </OptionsContainer>
            <ShopButtonContainer>
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
