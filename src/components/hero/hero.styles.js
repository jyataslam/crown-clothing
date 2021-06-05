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
    color: black;
    border-left: 7.5px solid white;
    border-right: 7.5px solid white;

    @media screen and (max-width: 800px) {
        border: none;
    }
`;

export const HeroTitle = styled.h1`
    color: inherit;
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: 400;
    letter-spacing: 0;
    margin-bottom: 0;
`;

export const HeroSubtitle = styled.h3`
    color: inherit;
    text-transform: uppercase;
    font-weight: 400;
    margin-top: 0;
    letter-spacing: 3px;
`;
