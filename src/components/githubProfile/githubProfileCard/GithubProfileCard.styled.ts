import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const GithubProfile = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
  height: 105px;
  border: 1px solid #dadada;
  border-radius: 8px;
  padding: 10px;
  transition: transform 0.2s ease;

  :hover {
    transform: scale(1.07);
  }
`;

export const profile = css`
  margin-right: 25px;
  border-radius: 50px;
  transition: transform 0.3s ease;

  :hover {
    transition-delay: 0.5s;
    transform: scale(1.5);
  }
`;

export const ContentWarpper = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 5px;
`;

export const userName = css`
  display: block;
  width: 250px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContentName = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
`;

export const Content = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const Count = styled.span`
  font-size: 13px;
`;

export const ClickButton = styled.button`
  font-size: 13px;
`;

export const bookmarkButton = css`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;
`;

export const BookmarkButton = styled.button`
  ${bookmarkButton}
`;
