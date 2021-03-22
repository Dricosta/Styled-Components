import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface PreviousStepProps {
  disabled: boolean;
}

export const ProgressSteps = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

const steps = css`
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  width: 100px;
  background: lightcoral;
  text-align: center;
  padding: 10px;
  border-radius: 20px;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const NextStep = styled(Link)`
  ${steps}
`;

export const PreviousStep = styled(Link)<PreviousStepProps>`
  ${steps}
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    opacity: ${(props) => (props.disabled ? "0.5" : "0.8")};
  }
`;
