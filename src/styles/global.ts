import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    background: ${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyle;
