import styled from "styled-components";

export const Main = styled.section`
    position: relative;
    background-image: url(${props => props.backgroundImage});
    height: 1000px;
    overflow: hidden;
    width: 100%;
    margin-top: 35px;
    color: #fff;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    display: flex;

    @media screen and (max-width: 550px) {
        height: 800px;
    }
`;

export const BackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: #0c0c0c;
    opacity: 0.4;
`;

export const InnerContainer = styled.div`
    margin: 0 auto;
    width: 1140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;

    @media screen and (max-width: 800px) {
        padding: 0 2rem;
    }

    p {
        font-size: 48px;
        margin-bottom: 1rem;

        @media screen and (max-width: 800px) {
            font-size: 36px;
        }

        @media screen and (max-width: 550px) {
            font-size: 24px;
        }
    }

    h3 {
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 2.2rem;

        @media screen and (max-width: 550px) {
            font-size: 16px;
            font-weight: bold;
        }
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
`;
