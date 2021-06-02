import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, routeName }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">
                {title.toUpperCase()} <div className="divider"></div>
                <span className="view-all">
                    <Link to={`/shop/${routeName}`}>view all</Link>
                </span>
            </h1>
            <div className="preview">
                {items
                    .filter((items, index) => index < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
