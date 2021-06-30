import styled from "styled-components";

export const Main = styled.section`
    padding: 0 0 30px;
    max-width: 1140px;
    width: 100%;
`;

export const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    top: -45px;
`;

export const IconContainer = styled.div`
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem 3.5rem 1rem;

    @media screen and (max-width: 800px) {
        width: 50%;
    }

    @media screen and (max-width: 550px) {
        width: 100%;
    }

    img {
        height: 100px;
        width: 100px;
        opacity: 0.65;
    }
`;

export const Header = styled.h4`
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 0;
    margin-top: 30px;
    color: #ff0126;
`;

export const Text = styled.p``;
