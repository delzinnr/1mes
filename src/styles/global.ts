import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    body {
      font: 400 1rem Nunito, sans-serif;
      -webkit-font-smoothing: antialiased;
      background: ${(props) => props.theme.bg};
    }
  }
`;
