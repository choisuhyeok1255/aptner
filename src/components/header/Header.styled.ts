import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const LinkWrapper = styled.nav`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  padding: 15px;
`;

export const link = (isCurrentPage: boolean) => css`
  font-size: 16px;
  font-weight: ${isCurrentPage && "700"};

  :hover {
    font-weight: 700;
  }
`;
