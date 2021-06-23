import React from "react";

import { Header, Subheader } from "./section-title.styles";

const SectionTitle = ({ title, subtitle }) => {
    return (
        <>
            <Header>{title}</Header>
            <Subheader>{subtitle}</Subheader>
        </>
    );
};

export default SectionTitle;
