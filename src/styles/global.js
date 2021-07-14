import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, figure, div, input, textarea, p, h1, h2, h3, h4, h5, h6, ul, a{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto Condensed', sans-serif;
    body {
      background: var(--black);
    }
}


:root{
  --alt-font: 'Poppins', sans-serif; 
  --dark-green: #0D2818;
  --green: #14AF5A;
  --light-green: #16DB65;
  --lighter-green: #A9FDAC;
  --gray: #605F5F;
  --black: #1C1B1B;
}

`;

export default GlobalStyle;
