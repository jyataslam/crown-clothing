import React from "react";
import { connect } from "react-redux";
import { clearItem, addItem, removeItem } from "../../redux/cart/cart.actions";

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    console.log(price);
    const totalIndividualPrice = price * quantity;
    return (
        <div className="checkout-item">
            <div className="item-container">
                <div className="image-container">
                    <img src={imageUrl} alt="item" />
                </div>
                <div className="description-container">
                    <span className="name">{name}</span>
                    <span className="quantity">
                        <div
                            className="arrow"
                            onClick={() => removeItem(cartItem)}
                        >
                            -
                        </div>
                        <span className="value">{quantity}</span>
                        <div
                            className="arrow"
                            onClick={() => addItem(cartItem)}
                        >
                            +
                        </div>
                    </span>
                    <div className="price-container">
                        <span className="price">${totalIndividualPrice}</span>
                        {quantity > 1 ? (
                            <span className="quantity-multiplier">
                                {quantity}x{" "}
                                <span className="individual">${price}</span>
                            </span>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="remove-container">
                <span
                    className="remove-button"
                    onClick={() => clearItemFromCart(cartItem)}
                >
                    remove
                </span>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
