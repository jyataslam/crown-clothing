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
            margin-top: 50px;
        }
    }

    .large {
        height: 600px !important;

        @media screen and (max-width: 800px) {
            height: 520px !important;
        }
    }

    .small {
        height: 500px !important;

        @media screen and (max-width: 800px) {
            height: 300px !important;
        }
    }

    .text-width-50 {
        width: 50%;

        @media screen and (max-width: 550px) {
            width: 100%;
        }
    }

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
`;
