import styled from "styled-components";
import { flexCenter } from "../../styles/common";
import { Link } from "react-router-dom";

export const Container = styled.section`
  ${flexCenter};
  width: 100%;
  height: 100vh;
  font-family: Helvetica, sans-serif;
`;

export const WrapperUser = styled.div`
  width: 50%;
  height: 80vh;
  strong {
    color: white;
  }
  h1 {
    color: white;
    font-size: 1.5rem;
    margin: 1em;
    padding: 0.6em 2em;
    border-radius: 30px;
    font-weight: 500;
    text-align: center;
  }
  p {
    text-align: center;
    color: white;
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const GroupHeader = styled.div`
  ${flexCenter};
  width: 100%;
  h1 {
    text-align: center;
  }
`;

export const GroupInput = styled.div`
  ${flexCenter};
  margin-top: 5rem;
`;

export const Input = styled.input`
  width: 80%;
  height: 38px;
  margin-left: 1.5rem;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 0px 15px;
  background: none;
  border: 1px solid #f9f8f9;
  color: #f9f8f9;
  font-size: 1rem;

  &::placeholder {
    color: #f9f8f9;
    opacity: 0.6;
  }
`;

export const RedirectInitial = styled(Link)`
  text-decoration: none;
  background: lightcoral;
  text-align: center;
  padding: 10px 20px;
  border-radius: 20px;
  color: white;
  margin-top: 5rem;
  display: block;
  width: max-content;
  &:hover {
    opacity: 0.8;
  }
`;
