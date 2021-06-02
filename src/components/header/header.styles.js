import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: 70px;
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

    @media screen and (max-width: 800px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 60px;
        padding: 10px;
        margin-bottom: 0;
        background: white;
        z-index: 1;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
`;

export const Image = styled.img`
    height: 100%;
    width: auto;
`;

export const OptionsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 800px) {
        /* width: 100%; */
    }
`;

export const ShopButtonContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
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
