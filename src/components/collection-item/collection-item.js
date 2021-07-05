import React, { useState } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { addItem } from "../../redux/cart/cart.actions";

import ModernButton from "../modern-button/modern-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 2500);
    };

    return (
        <div
            className="collection-item"
            data-aos="fade-up"
            data-aos-once="true"
        >
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            {!clicked ? (
                <ModernButton
                    as={motion.a}
                    title="add to cart"
                    onClick={() => {
                        handleClick();
                        addItem(item);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
            ) : (
                <motion.span
                    className="added"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
                >
                    added &#x2713;
                </motion.span>
            )}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
