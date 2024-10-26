import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const GithubProfile = styled.li`
  position: relative;
  display: flex;
  width: 300px;
  border: 1px solid #dadada;
  border-radius: 8px;
  padding: 10px;
`;

export const profile = css`
  margin-right: 2cqmin;
  border-radius: 50px;
`;

export const ContentWarpper = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 5px;
`;

export const userName = css`
  display: block;
  width: 150px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContentName = styled.span`
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

export const BookmarkButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;
`;
