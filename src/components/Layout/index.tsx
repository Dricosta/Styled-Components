import React, { ReactNode, useContext } from "react";
import * as S from "./styles";
import { StepProvider } from "../../contexts/StepContext";

import { ThemeProvider } from "styled-components";
import { ThemeContextApp } from "../../contexts/ThemeContext";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { theme } = useContext(ThemeContextApp);

  return (
    <ThemeProvider theme={theme}>
      <StepProvider>
        <S.Layout>
          <S.LogoIkatec
            src="https://www.ikatec.com.br/assets/images/logo-branca-site-240x154.png"
            alt="logo ikatec"
          />
          {children}
        </S.Layout>
      </StepProvider>
    </ThemeProvider>
  );
};

export default Layout;
