import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
    }
    
    html, body, .App {
        height: 100%;
        background-color: var(--body-background);
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Montserrat', sans-serif;
      }

    :root {
        --body-background: #0e0e0e;
        --color-logo: #ff5b50;
        --card-color: #252525;
        --text-color: #fff;
        --subtitle-color: #5a5757;
        --black-text: #000;
        --color-input: #0D0D0D;
    }
` 