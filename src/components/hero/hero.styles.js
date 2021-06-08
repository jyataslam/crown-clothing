import styled from "styled-components";

export const HeroContainer = styled.div`
    background: ${props => `url('${props.backgroundImage}')`};
    height: 600px;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto 15px;
    background-size: cover;
    background-position: top;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    padding: 20px 6rem;
    color: white;
    border-left: 7.5px solid white;
    border-right: 7.5px solid white;

    @media screen and (max-width: 800px) {
        border: none;
        height: 520px;
        background-position-x: 10%;
        color: white;
        padding-left: 5rem;
        padding-right: 2rem;
        justify-content: flex-end;
        text-align: right;
        background-position-x: 10%;
    }
`;

export const HeroTitle = styled.h1`
    color: inherit;
    text-transform: uppercase;
    font-size: 5rem;
    line-height: 5rem;
    font-weight: 400;
    letter-spacing: 0;
    margin-bottom: 0;

    @media screen and (max-width: 800px) {
        font-size: 3rem;
        line-height: 2.8rem;
    }
`;

export const HeroSubtitle = styled.h3`
    color: inherit;
    text-transform: uppercase;
    font-weight: 400;
    margin-top: 0;
    letter-spacing: 3px;
`;
