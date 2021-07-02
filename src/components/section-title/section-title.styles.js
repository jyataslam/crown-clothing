import styled from "styled-components";

export const Main = styled.section`
    padding-top: 100px;
    padding-bottom: 65px;
    width: 100%;
    background: ${props => (props.background ? props.background : "#fff")};

    @media screen and (max-width: 550px) {
        padding-top: 65px;
        padding-bottom: 65px;
    }
`;

export const Header = styled.h2`
    color: #0c1013;
    padding: 0 1rem 1rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 300;
    margin: 0 auto;
    position: relative;

    @media screen and (max-width: 800px) {
        line-height: 1.2;
        font-size: 1.8rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
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
        font-size: 14px;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
    }
`;
