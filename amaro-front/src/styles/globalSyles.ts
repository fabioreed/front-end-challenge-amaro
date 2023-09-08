import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #1D70F1;
    --white: #FDFDFE;
    --primary-color-hover: #D9DEEC;
    --secondary-color: #ED9243;
    --gray: #5F7067;
    --light-gray: #D3D3D3;
    --green: #6FD660;
    --orange: #F2D405;
    --blue: #001D4A;
    --alert-negative: #F24D35;
    --alert-negative-hover: #e74c3c6b;
    --red: #FDE0D8;
    --alert-success: #33E897;
    --black: #1D1E2C;
    --light-purple: #D5F2E3;
    --yellow: #FEEA00;
  }
  
  body {
    background-color: var(--white);
  }

  button {
    border-radius: 6px;
  }
`

export default GlobalStyle