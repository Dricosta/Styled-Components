import ProgressSteps from "../ProgressSteps";
import { BoxContent } from "../../styles/common";
import SwitchTheme from "../SwitchTheme";

const Strengths = () => {
  return (
    <BoxContent>
      <SwitchTheme />
      <h1 className="title">Pontos positivos do Styled-Components</h1>
      <p>
        <ul>
          <li>Mantém o JSX do React mais limpo, separando o JS do CSS</li>
          <li>
            Mantém todas as features do SCSS e inclui a manipulações de props,
            sem necessidade se usar className, mas podendo usar.
          </li>
          <li>
            Tem uma boa integração com Typescript, facilitando a manipulação das
            props.
          </li>
          <li>
            Implementação nativa de DarkTheme, facilitando o desenvolvimento
            dessa feature
          </li>
          <li>
            Styled Components cria um prefixo único para cada elemento no html
            gerado, por exemplo: sc-dlfnbm jOqeOD, isso impede que tenha
            conflitos de classes css alterando onde não deveria alterar.
          </li>
        </ul>
      </p>
      <ProgressSteps />
    </BoxContent>
  );
};

export default Strengths;
