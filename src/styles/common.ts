import styled, { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexColumCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
`;

export const BoxContent = styled.div`
  width: 50%;

  text-align: center;
  padding: 5rem 0;
  font-family: Helvetica, sans-serif;
  color: white;
  .title {
    font-size: 24px;
  }
  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    margin-top: 40px;
  }

  ul {
    li {
      text-align: left;
    }
  }
`;
