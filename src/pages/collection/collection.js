import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
    console.log("collection", collection);
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

// ownProps gives you all the props on the current component by using it as the second param
// CollectionPage is nested from a Route which gives us access to history, location, match
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
