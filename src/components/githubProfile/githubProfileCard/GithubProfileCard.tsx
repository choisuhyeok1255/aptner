"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { capitalize } from "lodash-es";

import { CONTENT_NAMES } from "@/constants";
import { HeartEmptyIcon, HeartFillIcon } from "@public/icon";
import type { User } from "@/types";
import { useProfileDetail } from "./hooks";
import * as S from "./GithubProfileCard.styled";

interface GithubProfileCardProps {
  profile: User;
  isBookmark: boolean;
  handleBookmark: (profile: User) => () => void;
}

const GithubProfileCard = forwardRef<HTMLLIElement, GithubProfileCardProps>(
  ({ profile, isBookmark, handleBookmark }, ref) => {
    const {
      content,
      followers,
      subscriptions,
      organizations,
      handleSearchContent,
    } = useProfileDetail({ name: profile.login });

    return (
      <S.GithubProfile ref={ref}>
        {profile.avatar_url && (
          <Image
            css={S.profile}
            width={75}
            height={75}
            src={profile.avatar_url}
            alt={`${profile.login}님의 프로필`}
            priority
          />
        )}
        <S.ContentWarpper>
          <Link css={S.userName} href={profile.html_url} target="_blank">
            {profile.login}
          </Link>
          {CONTENT_NAMES.map((contentName) => (
            <S.Content key={contentName}>
              <S.ContentName>{`${capitalize(contentName)}`}:</S.ContentName>
              {content[contentName].isOpen ? (
                <S.Count>
                  {contentName === "followers"
                    ? followers?.length
                    : contentName === "subscriptions"
                    ? subscriptions?.length
                    : organizations?.length}
                </S.Count>
              ) : (
                <S.ClickButton
                  type="button"
                  onClick={handleSearchContent(contentName)}
                >
                  Check
                </S.ClickButton>
              )}
            </S.Content>
          ))}
          <S.BookmarkButton type="button" onClick={handleBookmark(profile)}>
            {isBookmark ? <HeartFillIcon /> : <HeartEmptyIcon />}
          </S.BookmarkButton>
        </S.ContentWarpper>
      </S.GithubProfile>
    );
  }
);

GithubProfileCard.displayName = "GithubProfileCard";

export default GithubProfileCard;
