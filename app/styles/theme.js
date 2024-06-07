'use client'

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    .html {
        font-size: 62.5%;
    }
    body {
        background-color: #000;
        color: #333;
    }

`;