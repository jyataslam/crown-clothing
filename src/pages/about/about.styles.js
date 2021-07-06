import styled from "styled-components";

export const AboutWrapper = styled.div`
    margin: 3rem auto 0;
    padding: 0 12%;
    max-width: 1440px;

    @media screen and (max-width: 550px) {
        padding: 0 1rem;
    }
`;

export const CategoryHeading = styled.h2`
    color: black;
    text-transform: uppercase;
`;

export const CategoryDescription = styled.p`
    color: black;
    margin-bottom: 2rem;

    & a {
        font-style: italic;
    }

    span {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
    }
`;

export const CategoryList = styled.ul`
    list-style-type: circle;
    margin-bottom: 2rem;

    li {
        padding-bottom: 5px;
    }
`;
