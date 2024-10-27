"use client";

import { GithubProfileBookmarks } from "@/components";
import * as S from "./page.styled";

const Bookmark = () => {
  return (
    <S.Section>
      <S.Heading>즐겨찾기 리스트</S.Heading>
      <GithubProfileBookmarks />
    </S.Section>
  );
};

export default Bookmark;
