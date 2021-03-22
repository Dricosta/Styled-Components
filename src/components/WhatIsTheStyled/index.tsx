import * as S from "./styles";
import ProgressSteps from "../ProgressSteps";
import SwitchTheme from "../SwitchTheme";

const WhatIsTheStyled = () => {
  return (
    <S.WhatIsTheStyled>
      <SwitchTheme />
      <h1 className="title">O que é o Styled-Components?</h1>
      <p>
        Styled-Components é uma biblioteca para React e React Native que permite
        que você use estilos ao nível de componente na sua aplicação. Eles são
        escritos em uma mistura de JavaScript com CSS.
      </p>
      <ProgressSteps />
    </S.WhatIsTheStyled>
  );
};

export default WhatIsTheStyled;
