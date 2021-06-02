import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        letter-spacing: 1px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    #root {
        @media screen and (max-width: 800px) {
            margin-top: 80px;
        }
    }
`;
