import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Lobster&family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&family=Sedgwick+Ave+Display&display=swap');

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
    font-family: 'Nunito Sans', sans-serif;
    /* font-family: 'Open sans', sans-serif; */
  }

  button {
    border-radius: 6px;
  }
`

export default GlobalStyle