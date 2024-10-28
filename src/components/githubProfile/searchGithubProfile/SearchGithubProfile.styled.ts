import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow: auto;
`;

export const input = css`
  width: 400px;
  margin: 10px 0;
`;

export const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 20px;
`;
