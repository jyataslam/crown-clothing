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
    width: 100%;
    max-width: 1440px;
    margin: 0 auto 15px;
    background-size: cover;
    background-position: top;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    padding: 20px 6rem;
    color: white;
    border-left: 7.5px solid white;
    border-right: 7.5px solid white;

    @media screen and (max-width: 800px) {
        padding: 2rem;
    }

    @media screen and (max-width: 550px) {
        border: none;
        height: 520px;
        background-position-x: 10%;
        color: white;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 4rem;
        justify-content: flex-end;
        text-align: center;
        align-items: center;
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
    width: ${props =>
        props.theme.themeWidth50
            ? props.theme.themeWidth50
            : props.theme.defaultChildrenTheme};
`;
