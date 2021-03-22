import ProgressSteps from "../ProgressSteps";
import { BoxContent } from "../../styles/common";
import SwitchTheme from "../SwitchTheme";

const AdvantagesOfUsing = () => {
  return (
    <BoxContent>
      <SwitchTheme />
      <h1 className="title">Vantagens de usar Styled-Components</h1>
      <p>
        Styled-Components permite que você use todas as regras do CSS comum
        assim como todas as regras do SCSS/SASS, como encadeamento de estrutura
        por exemplo.
        <br />O Styled-Components lida muito bem com propriedades no React
        (Props) que são passadas entre os componentes, o styled consegue acessar
        internamente essas props e manipular o comportamento de estilo do seu
        componente, de uma forma que não precise inserir className em tudo.
      </p>
      <ProgressSteps />
    </BoxContent>
  );
};

export default AdvantagesOfUsing;
