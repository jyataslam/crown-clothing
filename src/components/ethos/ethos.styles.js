import styled from "styled-components";

export const Main = styled.section`
    padding: 100px 0 120px;
    max-width: 1140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px) {
        padding: 80px 1rem 100px;
    }

    @media screen and (max-width: 550px) {
        padding-top: 60px;
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
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    font-size: 5rem;
    margin-bottom: 0;
    padding: 0 1rem;
    line-height: 1.2;
`;

export const Subheader = styled.p`
    text-align: center;
    font-weight: 400;
    color: #0c0c0c;
    /* color: #d6d6d6; */
    font-size: 18px;
    margin-bottom: 25px;
    padding: 0.5rem 1rem 2rem;
`;

export const EthosSection = styled.section`
    /* background: #0c1013; */
    color: #0c1013;
    width: 100vw;
    padding-top: 100px;
`;

export const EthoHeader = styled.h4`
    color: white;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    z-index: 1;
`;
export const EthoDescription = styled.p`
    font-weight: 400;
    color: white;
    font-size: 16px;
    margin-top: 10px;
    z-index: 1;
`;

export const EthoBackgroundImage = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    background: rgb(0 0 0 / 20%);
    transition: all 0.5s ease-in-out;
`;

export const IconsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0;
    width: 100%;
    margin-top: 2rem;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        width: 43%;
        grid-gap: 0;
    }

    @media screen and (max-width: 550px) {
        width: 85%;
    }
`;

export const EthoContainer = styled.div`
    background: url(${props => props.bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 4rem;
    text-align: center;

    @media screen and (max-width: 550px) {
        padding: 0;
    }

    .etho-icon {
        max-height: 150px;

        @media screen and (max-width: 550px) {
            width: 85%;
            height: 100px;
        }
    }

    img:nth-child(2) {
        width: 175px;
        height: auto;

        @media screen and (max-width: 550px) {
            width: unset;
        }
    }

    &:hover ${EthoBackgroundImage} {
        background: #000000c7;
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
