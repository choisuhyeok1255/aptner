import styled from "@emotion/styled";

import { HEADER_HEIGHT } from "@/constants";
import { css } from "@emotion/react";

export const NotFound = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT});
`;

export const Content = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
`;

export const homeLink = css`
  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px;
  font-size: 24px;
`;
