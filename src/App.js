import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import CheckoutPage from "./pages/checkout/checkout";

import { GlobalStyle } from "./global.styles";

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <GlobalStyle />
            <ScrollToTop />
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route
                    exact
                    path="/signin"
                    render={() =>
                        currentUser ? (
                            <Redirect to="/" />
                        ) : (
                            <SignInAndSignUpPage />
                        )
                    }
                />
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
