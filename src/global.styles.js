import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 1px;
        font-size: 14px;

        @media screen and (max-width: 800px) {
            // padding: 10px;
        }
    }

    p {
        letter-spacing: .02rem;
        font-weight: 300;
        line-height: 1.4;
    }

    h1, h2, h3, h4, h5, h6 {
        letter-spacing: 1px;
        font-weight: 400;
    }

    a {
        text-decoration: none;
        color: black;
    }

    #root {
        @media screen and (max-width: 800px) {
            // margin-top: 50px;
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
        width: 100% !important;

        @media screen and (max-width: 800px) {
            height: 400px !important;
            justify-content: flex-end;
        }
    }

    .x-small {
        height: 300px !important;
        width: 100% !important;
    }

    .text-width-50 {
        width: 50%;

        @media screen and (max-width: 550px) {
            width: 100%;
        }
    }

    .background-position-center {
        background-position: top center !important;
    }

    .background-center {
        background-position: center !important;
    }

    .space-between {
        display: flex;
        justify-content: space-between;
    }

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }

    [data-aos=fade-up] {
        transform: translate3d(0,20px,0)
    }
`;
