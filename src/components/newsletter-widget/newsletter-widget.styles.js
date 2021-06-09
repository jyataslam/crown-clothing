import styled from "styled-components";

export const NewsLetterWidgetMain = styled.div`
    width: 100%;
    max-width: 260px;
    height: auto;
    color: #131313;
    display: flex;
    flex-direction: column;
    padding: 10px 0;

    a {
        min-width: 100%;
    }
`;

export const Header = styled.p`
    margin: 0;
    padding: 0;
    padding-bottom: 14px;
    font-size: 14px;
`;

export const EmailInput = styled.input`
    padding: 12px 16px;
    margin-bottom: 20px;
    background: none;
    border: none;
    border-bottom: 1px solid #131313;
    padding-left: 0;
    text-transform: uppercase;
`;
