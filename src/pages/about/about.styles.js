import styled from "styled-components";

export const AboutWrapper = styled.div`
    margin: 3rem auto 0;
    padding: 0 12%;
    max-width: 1440px;

    @media screen and (max-width: 550px) {
        padding: 0;
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
`;

export const CategoryList = styled.ul`
    list-style-type: circle;
    margin-bottom: 2rem;
`;
