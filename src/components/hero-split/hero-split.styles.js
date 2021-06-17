import styled from "styled-components";
import { Link } from "react-router-dom";

export const Subheader = styled.p`
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 0;
    letter-spacing: 3px;
    line-height: 1.2em;
    font-weight: 500;
    position: relative;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
    }

    &:after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: orange;
        transition: all 0.2s ease-in-out;
    }
`;

export const Main = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    background-image: url(${props => props.bgImage});
    color: white;
    border-left: 2px solid white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 3rem;
    background-size: cover;
    background-position: top center;

    &:first-child {
        border-bottom: 2px solid white;
        background-position: center;

        @media screen and (max-width: 800px) {
            border: none;
        }

        @media screen and (max-width: 550px) {
            border-bottom: 2px solid white;
        }
    }

    &:hover ${Subheader} {
        color: orange;

        &:after {
            width: 100%;
        }
    }

    @media screen and (max-width: 800px) {
        height: 20vh;
        border: none;
    }

    @media screen and (max-width: 550px) {
        padding: 0 2rem 2rem;
    }
`;

export const Header = styled.p`
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 0;
    letter-spacing: 3px;
    line-height: 1.2em;
    font-weight: 500;
    font-size: 1.4rem;
    margin-bottom: 12px;
`;

export const LinkCover = styled(Link)`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
`;
