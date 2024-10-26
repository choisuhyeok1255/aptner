import React from "react";

import { Input } from "@/components";
import { useGetUsers } from "@/services";
import { GithubProfile } from "./containers";
import { useSearchUser, useUsername } from "./hooks";
import * as S from "./GithubProfileList.styled";

const GithubProfileList = () => {
  const { username, handleUsername } = useUsername();
  const { usernameQuery } = useSearchUser({ username });

  const { data: profiles } = useGetUsers(
    { query: { username: usernameQuery || "", page: 1 } },
    !!usernameQuery
  );

  return (
    <>
      <Input
        placeholder="유저 이름을 입력하세요."
        value={username}
        onChange={handleUsername}
      />
      {profiles ? (
        <S.GithubProfileList>
          {profiles.items.map((profile) => (
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
