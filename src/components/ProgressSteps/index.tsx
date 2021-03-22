import React, { useContext, ChangeEvent } from "react";
import * as S from "./styles";
import { StepContext } from "../../contexts/StepContext";

const ProgressSteps = () => {
  const {
    handleNextStep,
    handlePreviousStep,
    previousRoutePage,
    routePage,
    step,
  } = useContext(StepContext);

  const handleCheckPreviousStep = (event: ChangeEvent) => {
    if (step <= 1) event.preventDefault();

    if (step >= 2) {
      handlePreviousStep();
    }
  };

  return (
    <S.ProgressSteps>
      <S.PreviousStep
        disabled={step <= 1}
        to={step >= 2 ? previousRoutePage : "/"}
        onClick={(event: React.ChangeEvent<HTMLInputElement | any>) =>
          handleCheckPreviousStep(event)
        }
      >
        Voltar
      </S.PreviousStep>
      <S.NextStep to={routePage} onClick={() => handleNextStep()}>
        Avançar
      </S.NextStep>
    </S.ProgressSteps>
  );
};

export default ProgressSteps;
