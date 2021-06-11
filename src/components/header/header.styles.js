import styled from "styled-components";
import { Link } from "react-router-dom";

import { UserIconContainer } from "../user-icon/user-icon.styles";

export const HeaderContainer = styled.div`
    height: ${props => props.size};
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;
    transition: height 0.3s ease-in-out;

    @media screen and (max-width: 800px) {
        position: fixed;
        border-bottom: 1px solid #eee;
        top: 0;
        left: 0;
        height: 60px;
        padding: 10px;
        margin-bottom: 0;
        background: white;
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
    width: 15%;

    @media screen and (max-width: 800px) {
        width: unset;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: auto;
`;

export const OptionsContainer = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const ShopButtonContainer = styled.div`
    width: 15%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.875rem;
    color: #757575;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: black;
    }
`;

export const NavBtnContainer = styled.div`
    width: 15%;
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
`;
