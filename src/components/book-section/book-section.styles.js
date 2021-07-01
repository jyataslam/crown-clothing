import styled from "styled-components";

export const Main = styled.section`
    padding: 100px 0;
    background-color: #f5f5f5;
    width: 100%;

    @media screen and (max-width: 800px) {
        padding: 65px 0;
    }
`;

export const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;

export const ContainerHalf = styled.div`
    width: 50%;

    &:nth-child(2) {
        padding: 0 3rem 0 5rem;

        @media screen and (max-width: 950px) {
            padding: 0 2.5rem;
        }

        @media screen and (max-width: 550px) {
            padding: 0 1rem;
        }
    }

    @media screen and (max-width: 950px) {
        width: 100%;
        text-align: center;
    }
`;

export const Header = styled.h2`
    color: #0c1013;
    padding: 0 0 1rem;
    text-transform: uppercase;
    font-size: 40px;
    line-height: 48px;
    font-weight: 300;
    margin: 0 auto;
    position: relative;

    @media screen and (max-width: 800px) {
        line-height: 1.2;
        font-size: 1.8rem;
    }

    @media screen and (max-width: 550px) {
        font-size: 32px;
        line-height: 40px;
    }
`;

export const Subheader = styled.p`
    color: #0c0c0c;
    font-size: 16px;
    margin-bottom: 25px;
    padding: 0.75rem 0 2.4rem;
    margin: 0 auto;
    position: relative;

    @media screen and (max-width: 800px) {
        font-size: 14px;
        padding-bottom: 1rem;
    }

    span {
        font-weight: 700;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;

    @media screen and (max-width: 950px) {
        display: none;
    }
`;

export const ColorTitleSmall = styled.h4`
    position: relative;
    display: inline-block;
    font-weight: 700;
    font-size: 13px;
    line-height: 1.8;
    color: #ff0026;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0;
    margin-bottom: 0;

    &:after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #ff0026;
        left: 0;
        right: 0;
        bottom: 0;
    }

    @media screen and (max-width: 550px) {
        margin-bottom: 0;
    }
`;

export const DescriptionParagraph = styled.p`
    font-size: 14px;
`;

export const LogosContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 550px) {
        margin-top: 2rem;
    }
`;

export const LogoContainer = styled.a`
    width: 33.33333%;
    padding: 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 550px) {
        width: 100%;
    }
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media screen and (max-width: 550px) {
        height: 75px;

        &.first-logo {
            height: 45px;
        }
    }
`;

export const MobileImage = styled.img`
    display: none;
    width: 60%;
    margin: 1rem auto 3rem;

    @media screen and (max-width: 950px) {
        display: block;
    }

    @media screen and (max-width: 550px) {
        width: 80%;
    }
`;
