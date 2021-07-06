import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import Hero from "../../components/hero/hero.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import image from "../../assets/images/collections-page-header-min.jpg";

import "./shop-page.styles.scss";

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);
    // if using useEffect as componentDidMount, put function from props inside 2nd parameter array

    return (
        <motion.div
            className="shop-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {match.isExact ? (
                <Hero
                    backgroundImage={image}
                    backgroundSizeClass="small"
                    title="Summer Collection"
                    subtitle="Summer 2021 is here!"
                    subpageAlignLeft
                    textWidth50
                />
            ) : null}
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </motion.div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
