import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    selectCartItems,
    selectCartTotal,
} from "../../redux/cart/cart.selectors";

import Hero from "../../components/hero/hero.component";
import CheckoutItem from "../../components/checkout-item/checkout";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

import "./checkout.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => (
    <div className="checkout-page">
        <Hero
            backgroundImage="https://i.ibb.co/0n2xwzB/hats-min.jpg"
            backgroundPositionCenter="background-center"
            backgroundSizeClass="x-small"
        />
        <div className="checkout-header">
            <h2>Cart</h2>
        </div>
        {cartItems.length === 0 ? (
            <p className="empty">oh no, your cart is empty</p>
        ) : null}
        <div className="checkout-flex-wrapper">
            <div className="checkout-items-container">
                {cartItems.length === 0
                    ? null
                    : cartItems.map((item, index) => (
                          <CheckoutItem key={index} cartItem={item} />
                      ))}
            </div>
            {cartItems.length === 0 ? null : (
                <div className="checkout-total-container">
                    <div className="total">
                        <span className="header">
                            order summary: {cartItems.length} items
                        </span>
                    </div>
                    <div className="total">
                        <div className="space-between">
                            <span>subtotal</span>
                            <span>${cartTotal}</span>
                        </div>
                        <div className="space-between">
                            <span>shipping</span>
                            <span>free</span>
                        </div>
                    </div>
                    <div className="total">
                        <div className="space-between">
                            <span>total</span>
                            <span>${cartTotal}</span>
                        </div>
                    </div>
                    <div className="total">
                        <span className="red center">
                            *Please use the following TEST credit card for
                            payments*
                        </span>
                        <span className="red">4242 4242 4242 4242</span>
                        <span className="red">Exp: 01/45 - CVV: 123</span>
                        <StripeCheckoutButton price={cartTotal} />
                    </div>
                </div>
            )}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
