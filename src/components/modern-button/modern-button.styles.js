import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const defaultButtonStyles = css`
    border-color: #131313;
    background: none;
    color: #131313;

    &:hover {
        background: #131313;
        color: white;
    }
`;

const whiteAndTransparentStyles = css`
    border-color: white;
    background: transparent;
    color: white;

    &:hover {
        background: white;
        color: #131313;
    }
`;

const roundAndColorfulStyles = css`
    background: #ff0126;
    border-radius: 25px;
    color: white;
    border: none;
    padding: 16px 36px;
    min-width: unset;
    width: fit-content;
    margin: 0 auto;

    &:hover {
        background: #ff2243;
    }
`;

const roundAndTransparentStyles = css`
    background: transparent;
    border-radius: 25px;
    color: white;
    padding: 16px 36px;
    min-width: unset;
    width: fit-content;
    margin: 0 auto;
    border: 1px solid white;

    &:hover {
        background: #ff0126;
        border: 1px solid #ff0126;
    }
`;

const getButtonStyles = props => {
    if (props.whiteAndTransparent) {
        return whiteAndTransparentStyles;
    } else if (props.isroundandcolorful) {
        return roundAndColorfulStyles;
    } else if (props.isroundandtransparent) {
        return roundAndTransparentStyles;
    }

    return defaultButtonStyles;
};

export const ModernLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    min-width: 315px;
    min-height: 40px;
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: 700;
    transition: all 0.25s ease-in-out;

    ${getButtonStyles}
`;
