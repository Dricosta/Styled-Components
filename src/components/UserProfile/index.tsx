import React from "react";
import * as S from "./styles";

interface UserProfileProps {
  status: string;
}

const UserProfile = ({ status }: UserProfileProps) => {
  return (
    <S.UserProfile>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg"
        alt="anonymous"
      />
      <S.Status status={status} />
    </S.UserProfile>
  );
};

export default UserProfile;
