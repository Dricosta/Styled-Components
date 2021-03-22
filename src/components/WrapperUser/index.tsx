import React, { useState, useContext } from "react";
import * as S from "./styles";
import UserProfile from "../UserProfile";
import { StepContext } from "../../contexts/StepContext";
import SwitchTheme from "../SwitchTheme";

const WrapperUser = () => {
  const [userStatus, setUserStatus] = useState("offline");
  const { step, setStep } = useContext(StepContext);

  return (
    <S.Container>
      <S.WrapperUser>
        <S.GroupHeader>
          <SwitchTheme />
          <h1>Styled Components</h1>
        </S.GroupHeader>

        <S.GroupInput>
          <UserProfile status={userStatus} />
          <S.Input
            value={userStatus}
            placeholder="Digite o status do usuário"
            onChange={(e) => setUserStatus(e.target.value)}
          />
        </S.GroupInput>
        {step === 5 && (
          <S.RedirectInitial to="/" onClick={() => setStep(1)}>
            Voltar ao inicio
          </S.RedirectInitial>
        )}
      </S.WrapperUser>
    </S.Container>
  );
};

export default WrapperUser;
