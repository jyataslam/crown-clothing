import styled from "styled-components";

export const Header = styled.h2`
    color: #0c1013;
    padding: 4rem 1rem 1rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    margin: 0;
    position: relative;
    letter-spacing: 3px;

    @media screen and (max-width: 800px) {
        line-height: 1.2;
        font-size: 1.6rem;
    }
`;

export const Subheader = styled.p`
    text-align: center;
    font-weight: 200;
    color: #0c0c0c;
    font-size: 18px;
    margin-bottom: 25px;
    padding: 1rem 1rem 4rem;
    margin: 0;
    position: relative;

    &:after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        height: 1px;
        background: #0c101361;
        width: 100%;

        @media screen and (max-width: 550px) {
            width: 88%;
            left: 6%;
        }
    }

    @media screen and (max-width: 800px) {
        font-size: 14px;
    }
`;
