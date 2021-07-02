import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 400px;
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    background: #fff;
    padding: 25px;
    overflow-y: scroll;
    transform: translateX(100%);
    transition: 0.4s ease-in-out;

    &.open {
        transform: translateX(0);
        box-shadow: 0px 0px 48px 10px black;
    }

    @media screen and (max-width: 800px) {
        width: 85%;
    }
`;

export const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 25px;
    margin-bottom: 25px;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: lightgrey;
    }
`;

export const Header = styled.span`
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
`;

export const HamburgerSpan = styled.span`
    width: 1rem;
`;

export const Hamburger = styled.img`
    width: 1rem;

    &:hover {
        cursor: pointer;
    }
`;

export const Footer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    margin-top: 25px;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: lightgrey;
    }

    p {
        margin-top: 0;
        font-size: 12px;
        text-align: left;
        width: 100%;
    }

    a {
        width: 100%;
    }
`;

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: 100%;
    width: 100%;

    & .empty-message {
        text-transform: uppercase;
    }
`;
