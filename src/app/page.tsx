"use client";

import { SearchGithubProfile } from "@/components";
import * as S from "./page.styled";

const Home = () => {
  return (
    <S.Section>
      <S.Heading>깃허브 유저 검색</S.Heading>
      <SearchGithubProfile />
    </S.Section>
  );
};

export default Home;
