import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled.footer`
    width: 100%;
    max-width: 1440px;
    margin: 3rem auto 0;
    padding: 7rem 4.16667% 7rem;
    display: flex;
    justify-content: center;
    background-color: #fafafa;
    text-transform: uppercase;
    flex-wrap: wrap;

    @media screen and (max-width: 800px) {
        padding-top: 2rem;
    }
`;

export const FourthContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    @media screen and (max-width: 800px) {
        width: 50%;
        padding-bottom: 2rem;
        border-bottom: 1px solid #d8d8d8;
        margin-top: 2.5rem;
        align-items: center;

        &:nth-child(3),
        &:nth-child(4) {
            border: none;
        }
    }

    @media screen and (max-width: 560px) {
        width: 100%;

        &:nth-child(3) {
            border-bottom: 1px solid #d8d8d8;
        }
    }
`;

export const Logo = styled.img`
    height: auto;
    width: 200px;
`;

export const SectionHeader = styled.h4`
    margin-bottom: 14px;
    margin-top: 0;
`;

export const QuickLink = styled(Link)`
    color: #565454;
    font-size: 0.875rem;
    padding: 5px 0;
`;

export const SocialIconContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`;
