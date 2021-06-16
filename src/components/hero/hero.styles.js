import styled, { css } from "styled-components";

export const subpageAlignLeftStyles = css`
    align-items: flex-start;

    @media screen and (max-width: 800px) {
        align-items: flex-start !important;
        text-align: left;
        justify-content: center;
        background-position-x: 0;
    }
`;

export const subpageAlignCenterStyles = css`
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 800px) {
        align-items: center;
        justify-content: center;
    }
`;

export const subpageWidth50Styles = css`
    width: 50%;
`;

const getHeroContainerStyles = props => {
    if (props.subpageAlignLeft) {
        return subpageAlignLeftStyles;
    } else if (props.subpageAlignCenterStyles) {
        return subpageAlignCenterStyles;
    }
};

export const HeroContainer = styled.div`
    background: ${props => `url('${props.backgroundImage}')`};
    margin: 0 auto 15px;
    background-size: cover;
    background-position: top;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    padding: 3rem;
    color: white;
    width: 65%;
    margin-left: 0;
    height: 100vh;

    @media screen and (max-width: 800px) {
        padding: 3rem;
        border: none;
        width: 100%;
        margin-bottom: 0;
        height: 50vh;
    }

    @media screen and (max-width: 550px) {
        border: none;
        background-position-x: 10%;
        color: white;
        padding: 0 2rem 2rem;
        justify-content: flex-end;
        text-align: left;
        align-items: flex-start;
        background-position-x: 10%;
    }

    ${getHeroContainerStyles}
`;

export const HeroTitle = styled.h1`
    color: inherit;
    text-transform: uppercase;
    font-size: 5rem;
    line-height: 5rem;
    font-weight: 400;
    letter-spacing: 0;
    margin-bottom: 0;
    width: ${props =>
        props.theme.themeWidth50
            ? props.theme.themeWidth50
            : props.theme.defaultChildrenTheme};

    @media screen and (max-width: 800px) {
        font-size: 3rem;
        line-height: 2.8rem;
    }
`;

export const HeroSubtitle = styled.h3`
    color: inherit;
    text-transform: uppercase;
    font-weight: 400;
    margin-top: 0;
    letter-spacing: 3px;
    line-height: 1.2em;
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: 500;
    width: ${props =>
        props.theme.themeWidth50
            ? props.theme.themeWidth50
            : props.theme.defaultChildrenTheme};
`;
