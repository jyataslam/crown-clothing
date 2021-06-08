import styled, { css } from "styled-components";

const buttonStyles = css`
    background-color: black;
    color: white;
    border: 1px solid white;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid black;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: #fff;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
    min-width: 135px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 12px;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    transition: all 0.15s ease-in-out;

    ${getButtonStyles}
`;
