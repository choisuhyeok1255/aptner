import React from "react";

import { Input } from "@/components";
import { useGetUsers } from "@/services";
import { GithubProfile } from "./containers";
import { useSearchUser, useUsername } from "./hooks";
import * as S from "./GithubProfileList.styled";

const GithubProfileList = () => {
  const { username, handleUsername } = useUsername();
  const { usernameQuery } = useSearchUser({ username });

  const { data: profile } = useGetUsers(
    { query: { username: usernameQuery || "", page: 1 } },
    !!usernameQuery
  );

  return (
    <>
      <Input
        css={S.input}
        placeholder="유저 이름을 입력하세요."
        value={username}
        onChange={handleUsername}
      />
      {profile ? (
        <S.GithubProfileList>
          {profile.items.map((profile) => (
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
        <S.EmptyList>리스트가 비어 있습니다.</S.EmptyList>
      )}
    </>
  );
};

export default GithubProfileList;
