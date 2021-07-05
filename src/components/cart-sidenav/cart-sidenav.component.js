import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SocialIcon } from "react-social-icons";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
    selectCartHidden,
    selectCartItems,
    selectCartTotal,
} from "../../redux/cart/cart.selectors";

import ModernButton from "../modern-button/modern-button.component";
import CartItem from "../cart-item/cart-item";

import HamburgerClose from "../../assets/images/hamburger_close.png";

import {
    Main,
    HeaderContainer,
    Header,
    HamburgerSpan,
    Hamburger,
    CartItemsContainer,
    SocialLinksContainer,
    Footer,
} from "./cart-sidenav.styles";

const CartSidenav = ({ hidden, toggleCartHidden, cartItems, cartTotal }) => {
    return (
        <Main className={hidden ? null : "open"}>
            <HeaderContainer>
                <Header>your cart</Header>
                <HamburgerSpan>
                    <Hamburger
                        src={HamburgerClose}
                        onClick={toggleCartHidden}
                    />
                </HamburgerSpan>
            </HeaderContainer>
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </CartItemsContainer>
            <Footer>
                <p>Taxes and shipping will be calculated at checkout</p>
                <ModernButton
                    isroundandcolorful
                    title="Checkout"
                    total={cartTotal}
                    route="/checkout"
                    onClick={toggleCartHidden}
                />
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
            </Footer>
        </Main>
    );
};

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartSidenav);
