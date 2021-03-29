import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
    console.log("collection", collection);
    return (
        <div className="collection-page">
            <h2>collection page</h2>
        </div>
    );
};

// ownProps gives you all the props on the current component by using it as the second param
// CollectionPage is nested from a Route which gives us access to history, location, match
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
