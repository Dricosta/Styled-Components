import styled from "styled-components";

interface UserProfileProps {
  status: string;
}

export const UserProfile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Status = styled.div<UserProfileProps>`
  background: ${(props) =>
    props.status === "online"
      ? "#48a869"
      : props.status === "inativo"
      ? "yellow"
      : "#b2b2b2"};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  right: -1px;
  bottom: -1px;
  border: 3px solid ${(props) => props.theme.colors.background};
`;
