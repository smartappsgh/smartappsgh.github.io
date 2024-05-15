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

    .container {
        max-width: 1200px;
        width: 90%;
        margin: auto;
    }

    body {
        background-color: #000;
        color: #333;
    }

`;