import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const defaultButtonStyles = css`
    border-color: #131313;
    background: none;
    color: #131313;
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

const getButtonStyles = props => {
    if (props.whiteAndTransparent) {
        return whiteAndTransparentStyles;
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
    transition: all 0.25s ease-in-out;

    ${getButtonStyles}
`;
