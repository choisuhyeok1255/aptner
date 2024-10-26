import React from "react";

import type { User } from "@/types";
import { GithubProfile } from "./containers";
import * as S from "./GithubProfileList.styled";

interface GithubProfileListProps {
  profiles?: User[];
}

const GithubProfileList = ({ profiles }: GithubProfileListProps) => {
  return (
    <>
      {profiles ? (
        <S.GithubProfileList>
          {profiles.map((profile) => (
            <GithubProfile
              key={profile.id}
              name={profile.login}
              githubUrl={profile.html_url}
              profileUrl={profile.avatar_url}
              isBookmark={false}
            />
          ))}
        </S.GithubProfileList>
      ) : (
        <div>유저 이름을 검색해보세요.</div>
      )}
    </>
  );
};

export default GithubProfileList;
