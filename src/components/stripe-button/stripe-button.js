import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51InuFVEPPNpu3gxmBtPxanu4efdMNCzkPLgYZp3QmUdWntK6cvPSf6Zs6oOtX1cSY0Rk7sVMnI51gttNa9spOfrf000AaLCpTY";

    const onToken = token => {
        alert("Payment successful! Thanks for testing out my app...STAY HARD");
    };

    return (
        <StripeCheckout
            label="SECURE CHECKOUT"
            name="Stay Hard"
            billingAddress
            shippingAddress
            image="https://i.ibb.co/dg4N15V/logo-axe.png"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
