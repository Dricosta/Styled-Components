import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeContextApp } from "../../contexts/ThemeContext";
import Switch from "react-switch";
import * as S from "./styles";

const SwitchTheme = () => {
  const { toggleTheme } = useContext(ThemeContextApp);
  const { title } = useContext(ThemeContext);

  return (
    <S.SwitchTheme>
      <strong>Alterar Tema:</strong>
      <Switch onChange={() => toggleTheme()} checked={title === "dark"} />
    </S.SwitchTheme>
  );
};

export default SwitchTheme;
