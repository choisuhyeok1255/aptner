"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { capitalize } from "lodash-es";

import { CONTENT_NAMES } from "@/constants";
import { HeartEmptyIcon, HeartFillIcon } from "@public/icon";
import { useProfileDetail } from "./hooks";
import * as S from "./GithubProfileCard.styled";

interface GithubProfileCardProps {
  name: string;
  githubUrl: string;
  profileUrl?: string;
  isBookmark: boolean;
}

const GithubProfileCard = forwardRef<HTMLLIElement, GithubProfileCardProps>(
  ({ name, githubUrl, profileUrl }, ref) => {
    const {
      content,
      followers,
      subscriptions,
      organizations,
      handleSearchContent,
    } = useProfileDetail({ name });

    const handleUpdateBookmark = () => (): void => {};

    return (
      <S.GithubProfile ref={ref}>
        {profileUrl && (
          <Image
            css={S.profile}
            width={75}
            height={75}
            src={profileUrl}
            alt={`${name}님의 프로필`}
            priority
          />
        )}
        <S.ContentWarpper>
          <Link css={S.userName} href={githubUrl} target="_blank">
            {name}
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
          <S.BookmarkButton type="button" onClick={handleUpdateBookmark}>
            {true ? <HeartFillIcon /> : <HeartEmptyIcon />}
          </S.BookmarkButton>
        </S.ContentWarpper>
      </S.GithubProfile>
    );
  }
);

GithubProfileCard.displayName = "GithubProfileCard";

export default GithubProfileCard;
