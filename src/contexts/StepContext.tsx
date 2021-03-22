import { createContext, ReactNode, useState, useEffect } from "react";

interface StepContextData {
  routePage: string;
  previousRoutePage: string;
  step: number;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  setPreviousRoutePage: any;
  setStep: any;
}

interface SteproviderProps {
  children: ReactNode;
}

export const StepContext = createContext({} as StepContextData);

export function StepProvider({ children }: SteproviderProps) {
  const [step, setStep] = useState(1);
  const [routePage, setRoutePage] = useState("/vantagens-de-usar");
  const [previousRoutePage, setPreviousRoutePage] = useState("/");

  function handleNextStep() {
    setStep(step + 1);
  }

  function handlePreviousStep() {
    setStep(step - 1);
  }

  useEffect(() => {
    switch (step) {
      case 1:
        setRoutePage("/vantagens-de-usar");
        break;
      case 2:
        setPreviousRoutePage("/");
        setRoutePage("/pontos-positivos");
        break;
      case 3:
        setPreviousRoutePage("/vantagens-de-usar");
        setRoutePage("/o-que-o-styled-components-nao-faz");
        break;
      case 4:
        setPreviousRoutePage("/pontos-positivos");
        setRoutePage("/status-do-usuário");
        break;
      default:
        break;
    }
  }, [step]);

  return (
    <StepContext.Provider
      value={{
        step,
        routePage,
        previousRoutePage,
        handlePreviousStep,
        handleNextStep,
        setPreviousRoutePage,
        setStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}
