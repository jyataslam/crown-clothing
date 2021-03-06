import styled from "styled-components";

export const Main = styled.section`
    padding: 10px 0 0;
    max-width: 1140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px) {
        padding: 100px 1rem 35px;
    }
`;

export const Quote = styled.span`
    font-style: italic;
    font-size: 2.4rem;
    padding: 1rem 0 4rem;
    text-align: center;

    @media screen and (max-width: 800px) {
        font-size: 1.6rem;
    }

    @media screen and (max-width: 550px) {
        font-size: 1.2rem;
    }
`;

export const Header = styled.h3`
    color: #0c1013;
    padding: 0 1rem 1rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 400;
    margin: 0 auto;
    position: relative;

    @media screen and (max-width: 800px) {
        font-size: 3rem;
    }
    @media screen and (max-width: 550px) {
        font-size: 32px;
    }
`;

export const Subheader = styled.p`
    text-align: center;
    color: #0c0c0c;
    font-size: 16px;
    margin-bottom: 25px;
    padding: 0.75rem 1rem 2.4rem;
    margin: 0 auto;
    position: relative;

    @media screen and (max-width: 800px) {
        font-size: 16px;
    }

    @media screen and (max-width: 550px) {
        padding-top: 0;
        font-size: 14px;
    }
`;

export const EthosSection = styled.section`
    color: #0c1013;
    width: 100vw;
`;

export const EthoHeader = styled.h4`
    color: rgba(0, 0, 0, 0);
    text-shadow: 0 0 0px white;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 700;
    margin: 0;
    z-index: 1;
    transition: all 0.6s ease-in-out;

    @media screen and (max-width: 800px) {
        font-size: 14px;
    }

    @media screen and (max-width: 550px) {
        display: none;
    }
`;
export const EthoDescription = styled.p`
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    font-weight: 400;
    color: rgba(0, 0, 0, 0);
    overflow: visible;
    font-size: 18px;
    padding: 0 6rem;
    text-align: center;
    z-index: 1;
    text-shadow: 0 0 50px transparent;
    transition: all 0.5s ease-in-out;

    span {
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
        top: 1rem;
        letter-spacing: 2px;

        @media screen and (max-width: 800px) {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 800px) {
        font-size: 14px;
        padding: 0 2rem;
    }

    @media screen and (max-width: 550px) {
        font-weight: 300;
        color: white;
        text-shadow: unset;
        transition: none;
        top: 50%;
    }
`;

export const EthoOpacityOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: black;
`;

export const EthoBackgroundImage = styled.div`
    background: url(${props => props.bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    opacity: 1;
    transition: transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        opacity 0.4s ease-in-out;

    &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: linear-gradient(
            0deg,
            rgba(20, 20, 20, 0.45),
            rgba(20, 20, 20, 0.45)
        );
        transition: all 0.4s ease-in-out;
    }

    @media screen and (max-width: 550px) {
        opacity: 0.4;
    }
`;

export const IconsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0;
    width: 100%;
    height: 1200px;
    margin-top: 2rem;

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0;
        height: 1300px;
    }

    @media screen and (max-width: 800px) {
        height: 1000px;
    }

    @media screen and (max-width: 550px) {
        grid-template-columns: 1fr;
        height: 2200px;
    }
`;

export const EthoContainer = styled.div`
    overflow: hidden;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 3rem;
    text-align: center;

    img:nth-child(2) {
        width: 175px;
        height: auto;

        @media screen and (max-width: 550px) {
            width: unset;
        }
    }

    &:hover ${EthoBackgroundImage} {
        transform: scale(1.3);
        opacity: 0.4;
    }

    &:hover ${EthoHeader} {
        color: rgba(0, 0, 0, 0);
        text-shadow: 0 0 50px transparent;
        overflow: visible;
    }

    &:hover ${EthoDescription} {
        text-shadow: 0 0 0px white;
        bottom: unset;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (max-width: 800px) {
        padding: 1rem 2rem;
    }
`;

export const QuoteSection = styled.div`
    position: relative;
    background: #fafafa;
    width: 100%;
    padding: 3rem 3rem 8rem;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;

    @media screen and (max-width: 550px) {
        padding: 3rem 1rem 6rem;
    }

    & .quotations {
        height: 70px;
        width: 70px;

        @media screen and (max-width: 800px) {
            height: 60px;
            width: 60px;
        }

        @media screen and (max-width: 550px) {
            height: 40px;
            width: 40px;
        }
    }

    & .headshot {
        width: 150px;
        height: auto;
        margin: auto;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 0px;
    }
`;

export const QuoteOwnerContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: -100px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #0c1013;
`;

export const QuoteName = styled.h3`
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: center;

    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
`;

export const QuoteTitle = styled.h3`
    text-transform: uppercase;
    text-align: center;
    color: #2a2a2a;
    font-weight: 200;
    margin: 0 0 1rem;
    padding: 0;

    @media screen and (max-width: 550px) {
        font-size: 12px;
    }
`;
