import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51InuFVEPPNpu3gxmBtPxanu4efdMNCzkPLgYZp3QmUdWntK6cvPSf6Zs6oOtX1cSY0Rk7sVMnI51gttNa9spOfrf000AaLCpTY";

    const onToken = token => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token: token,
            },
        })
            .then(response => {
                alert(
                    "Payment successful! Thanks for checking out my project :)"
                );
            })
            .catch(error => {
                console.log("Payment Error: ", error);
                alert(
                    "There was an issue with your payment. Please make sure you use the provided credit card."
                );
            });
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Power Up"
            billingAddress
            shippingAddress
            image="https://i.ibb.co/fH3q01r/stripe-logo.jpg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
