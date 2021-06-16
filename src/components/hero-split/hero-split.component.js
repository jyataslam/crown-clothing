import React from "react";

import { Main, Header, Subheader, LinkCover } from "./hero-split.styles";

const HeroSplit = ({ title, subtitle, url, ...props }) => {
    return (
        <Main {...props}>
            <LinkCover to={url}></LinkCover>
            <Header>{title}</Header>
            <Subheader>{subtitle}</Subheader>
        </Main>
    );
};

export default HeroSplit;
