import "styled-components";

declare module "styled-components" {
  // Overwrites only the DefaultTheme Styled-Components to access typing
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
    };
  }
}
