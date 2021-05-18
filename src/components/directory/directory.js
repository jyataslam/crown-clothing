import React from "react";
import "./directory.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item";

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
);

// const mapStateToProps = ({ directory: { sections } }) => ({
//     sections,
// });

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
