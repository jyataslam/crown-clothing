import styled from "styled-components";
import { Link } from "react-router-dom";

import { UserIconContainer } from "../user-icon/user-icon.styles";

export const HeaderContainer = styled.div`
    height: ${props => props.size};
    width: 100%;
    /* max-width: 1440px; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    border-bottom: 1px solid #96969683;
    top: 0;
    left: 0;
    height: 60px;
    padding: 5px 25px;
    margin-bottom: 0;
    background: transparent;
    z-index: 10;
    transition: all 0.5s ease-in-out;

    &.scrolled {
        background: white;
        border-bottom: none;
    }

    @media screen and (max-width: 800px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 45px;
        padding: 5px;
        margin-bottom: 0;
        background: transparent;
        z-index: 10;
    }

    @media screen and (max-width: 550px) {
        ${UserIconContainer} {
            display: none;
        }
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;

    @media screen and (max-width: 800px) {
        width: unset;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: auto;
    -webkit-filter: invert(1);
    filter: invert(1);
    transition: all 0.5s ease-in-out;

    &.scrolled {
        -webkit-filter: unset;
        filter: unset;
    }
`;

export const OptionsContainer = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const ShopButtonContainer = styled.div`
    width: 25%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    position: relative;
    padding: 10px 15px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.875rem;
    color: white;
    font-weight: 500;
    transition: all 0.5s ease-in-out;

    &.scrolled {
        color: black;

        &:after {
            background: black;
        }
    }

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background: white;
        height: 2px;
        width: 0;
        transition: all 0.2s ease-in-out;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
`;

export const NavBtnContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;

    @media screen and (max-width: 800px) {
        display: initial;
    }
`;

export const Hamburger = styled.img`
    width: auto;
    height: 100%;
    -webkit-filter: invert(1);
    filter: invert(1);
    transition: all 0.5s ease-in-out;

    &.scrolled {
        -webkit-filter: unset;
        filter: unset;
    }
`;
