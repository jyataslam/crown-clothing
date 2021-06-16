import styled from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

export const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const FlexContainerColumn = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;
