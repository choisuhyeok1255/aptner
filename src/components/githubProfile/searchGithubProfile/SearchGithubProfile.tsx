"use client";

import React from "react";

import { GithubProfileCardSkeleton, GithubProfiles, Input } from "@/components";
import { useBookmark } from "@/hooks";
import { CONTENT_NAMES } from "@/constants";
import { useUsernameSearchQuery, useUsername, useSearchProfile } from "./hooks";
import * as S from "./SearchGithubProfile.styled";

interface SearchGithubProfileProps {
  className?: string;
}

const SearchGithubProfile = ({ className }: SearchGithubProfileProps) => {
  const { username, handleUsername } = useUsername();
  const { usernameQuery } = useUsernameSearchQuery({ username });
  const { lastRef, profiles, profileStatus } = useSearchProfile({
    usernameQuery: usernameQuery || "",
  });
  const { handleBookmark, handleCheckBookmark } = useBookmark();

  return (
    <S.Wrapper className={className}>
      <Input
        css={S.input}
        placeholder="유저 이름을 입력하세요"
        value={username}
        onChange={handleUsername}
      />
      {!profileStatus.hasQuery && (
        <S.EmptyList>검색어를 입력하세요</S.EmptyList>
      )}
      {profileStatus.isSearchingProfile && (
        <GithubProfileCardSkeleton skeletonCount={8} contents={CONTENT_NAMES} />
      )}
      {profileStatus.isEmptyProfiles && (
        <S.EmptyList>해당하는 유저가 없습니다</S.EmptyList>
      )}
      {profileStatus.hasProfiles && (
        <GithubProfiles
          ref={lastRef}
          profiles={profiles}
          handleBookmark={handleBookmark}
          handleCheckBookmark={handleCheckBookmark}
        />
      )}
      {profileStatus.isFetchingNextPage && (
        <GithubProfileCardSkeleton skeletonCount={5} contents={CONTENT_NAMES} />
      )}
    </S.Wrapper>
  );
};

export default SearchGithubProfile;
