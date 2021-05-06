import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51InuFVEPPNpu3gxmBtPxanu4efdMNCzkPLgYZp3QmUdWntK6cvPSf6Zs6oOtX1cSY0Rk7sVMnI51gttNa9spOfrf000AaLCpTY";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful, Thank You!");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Digital Nomadics"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
