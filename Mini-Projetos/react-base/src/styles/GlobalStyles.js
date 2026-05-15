import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { primaryColor, primaryDarkColor } from "../config/colors";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    background: #eee;
    background: ${primaryDarkColor};
    color: #fff
}

html, body, #root {
    height: 100%;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    cursor: pointer;
    background-color: ${primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
}
`;

export const Conteiner = styled.section`
    max-width: 360px;
    background: #fff;
    color: #333;

    margin: 30px auto;
    padding: 30px;

    border-radius: 4px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


