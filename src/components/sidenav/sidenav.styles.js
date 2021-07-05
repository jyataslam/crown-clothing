import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidenavMain = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    background: #fff;
    padding: 15px;
    overflow-y: scroll;
    transform: translateX(-100%);
    transition: 0.2s ease-in-out;

    &.open {
        transform: translateX(0);
        box-shadow: 0px 0px 48px 10px black;
    }
`;

export const SidenavHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    margin-left: 12px;
    margin-right: 12px;
`;

export const SidenavLogo = styled.img`
    width: 6rem;
`;

export const HamburgerSpan = styled.span`
    width: 2.5rem;
`;

export const Hamburger = styled.img`
    width: 1rem;
`;

export const LinksContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

export const LinkContainer = styled.li`
    margin: 0 12px;
    padding: 16px 0;
    border-bottom: 1px solid #d8d8d8;

    &:first-child {
        border-top: 1px solid #d8d8d8;
    }

    &:last-child {
        display: flex;
        align-items: center;
    }
`;

export const SidenavLink = styled(Link)`
    align-items: center;
    color: #1e1e1e;
    font-size: 14px;
    justify-content: space-between;
    text-decoration: none;
    text-transform: uppercase;
    padding-right: 5px;
`;

export const SocialLinksContainer = styled.div`
    margin: 0 12px;
    padding: 16px 0;
    display: flex;
`;
