import styled from "styled-components";

export const Main = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const BlackBox = styled.div`
    position: absolute;
    z-index: 50000;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #0c1013;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
    height: 65px;
    width: auto;
    opacity: 0;
`;
