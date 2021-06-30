import styled from "styled-components";

export const SectionWrapper = styled.section`
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
`;

export const Half = styled.div`
    width: 50%;
    position: relative;
    text-align: center;
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    box-shadow: #000 0 0 0;
    transition: opacity 0.2s linear;
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    opacity: 1;
`;

export const TextContainer = styled.div`
    display: inline-block;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    text-align: center;

    @media screen and (max-width: 550px) {
        width: 100%;
    }

    h4 {
        text-transform: uppercase;
        font-weight: bold;
    }

    p {
        font-size: 24px;
        font-weight: 400;
    }

    a {
        margin: auto;
        margin-top: 1.5rem;
    }
`;
