import React, { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import AOS from "aos";
import { AnimatePresence } from "framer-motion";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";
import Header from "./components/header/header";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import AboutPage from "./pages/about/about.page";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import CheckoutPage from "./pages/checkout/checkout";

import "aos/dist/aos.css";
import { GlobalStyle } from "./global.styles";

const App = ({ checkUserSession, currentUser }) => {
    const location = useLocation();

    useEffect(() => {
        checkUserSession();
        AOS.init({
            duration: "1000",
        });
        AOS.refresh();
    }, [checkUserSession]);

    return (
        <div>
            <GlobalStyle />
            <ScrollToTop />
            <Header />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/about" component={AboutPage} />
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
            </AnimatePresence>
            <Footer />
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
