import ProgressSteps from "../ProgressSteps";
import { BoxContent } from "../../styles/common";
import styled from "styled-components";
import SwitchTheme from "../SwitchTheme";

const NotPartOfFunctionality = () => {
  const EndTheory = styled.button`
    color: palevioletred;
    font-size: 1.2rem;
    margin: 1em;
    padding: 0.5em 2em;
    border: 1px solid palevioletred;
    border-radius: 20px;
    background: white;
    outline: none;
  `;

  return (
    <BoxContent>
      <SwitchTheme />
      <h1 className="title">O que o Styled-Components não faz?</h1>
      <p>
        O Styled Components <strong>não</strong> importa componentes de sua
        biblioteca, como Button, Container, Grid, Select, Input, etc.
        <br />
        <br />O Styled-Components <strong>não</strong> substitui o reactstrap -
        material ui ou qualquer outro framework de componentes, ele auxilia
        apenas na estilização desses componentes.
        <br />
        <br />
        <EndTheory>
          vamos para um exemplo de interface e depois veremos o código {`</>`}
        </EndTheory>
      </p>
      <ProgressSteps />
    </BoxContent>
  );
};

export default NotPartOfFunctionality;
