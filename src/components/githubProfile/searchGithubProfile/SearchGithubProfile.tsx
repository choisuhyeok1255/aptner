import React from "react";

import { GithubProfileCardSkeleton, GithubProfiles, Input } from "@/components";
import { useInfinityScroll } from "@/hooks";
import { useGetUsers } from "@/services";
import { CONTENT_NAMES } from "@/constants";
import { useSearchUser, useUsername } from "../hooks";
import * as S from "./SearchGithubProfile.styled";

const SearchGithubProfile = () => {
  const { username, handleUsername } = useUsername();
  const { usernameQuery } = useSearchUser({ username });

  const {
    data: profile,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetUsers(
    { query: { username: usernameQuery || "", page: 1 } },
    !!usernameQuery
  );

  const { lastRef } = useInfinityScroll({
    hasNextPage,
    handleFetchNextPage: fetchNextPage,
  });

  const profiles = profile?.pages.flatMap((item) => item.users) || [];

  return (
    <>
      <Input
        css={S.input}
        placeholder="유저 이름을 입력하세요."
        value={username}
        onChange={handleUsername}
      />
      {!usernameQuery && <S.EmptyList>검색어를 입력하세요.</S.EmptyList>}
      {usernameQuery && isFetching && !profiles.length && (
        <GithubProfileCardSkeleton skeletonCount={8} contents={CONTENT_NAMES} />
      )}
      {usernameQuery && !profiles.length && !isFetching && (
        <S.EmptyList>해당하는 유저가 없습니다.</S.EmptyList>
      )}
      {!!profiles.length && (
        <GithubProfiles ref={lastRef} profiles={profiles} />
      )}
      {isFetchingNextPage && (
        <GithubProfileCardSkeleton skeletonCount={5} contents={CONTENT_NAMES} />
      )}
    </>
  );
};

export default SearchGithubProfile;
