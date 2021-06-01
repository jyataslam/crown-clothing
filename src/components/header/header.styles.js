import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

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
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;
