"use client";

import { SearchGithubProfile } from "@/components";
import * as S from "./page.styled";
import { Suspense } from "react";

const Home = () => {
  return (
    <S.Section>
      <S.Heading>깃허브 유저 검색</S.Heading>
      <Suspense>
        <SearchGithubProfile css={S.searchGithubProfile} />
      </Suspense>
    </S.Section>
  );
};

export default Home;
