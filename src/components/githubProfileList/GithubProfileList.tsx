import React, { useCallback } from "react";

import { Input } from "@/components";
import { useGetUsers } from "@/services";
import { GithubProfile } from "./containers";
import { useSearchUser, useUsername } from "./hooks";
import * as S from "./GithubProfileList.styled";

const GithubProfileList = () => {
  const { username, handleUsername } = useUsername();
  const { usernameQuery } = useSearchUser({ username });

  const {
    data: profile,
    fetchNextPage,
    hasNextPage,
  } = useGetUsers(
    { query: { username: usernameQuery || "", page: 1 } },
    !!usernameQuery
  );

  const lastProfileRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (!node) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        { threshold: 1 }
      );

      observer.observe(node);

      return () => {
        observer.unobserve(node);
      };
    },
    [fetchNextPage, hasNextPage]
  );

  return (
    <>
      <Input
        css={S.input}
        placeholder="유저 이름을 입력하세요."
        value={username}
        onChange={handleUsername}
      />
      {profile?.pages.length ? (
        <S.GithubProfileList>
          {profile?.pages
            .flatMap((item) => item.users)
            .map((profile, i, profiles) => {
              return (
                <GithubProfile
                  key={profile.id}
                  ref={i === profiles.length - 1 ? lastProfileRef : null}
                  name={profile.login}
                  githubUrl={profile.html_url}
                  profileUrl={profile.avatar_url}
                  isBookmark={false}
                />
              );
            })}
        </S.GithubProfileList>
      ) : (
        <S.EmptyList>검색어를 입력하세요.</S.EmptyList>
      )}
    </>
  );
};

export default GithubProfileList;
