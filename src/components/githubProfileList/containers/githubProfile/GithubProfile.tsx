"use client";

import React, { forwardRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { capitalize } from "lodash-es";

import {
  useGetUserFollowers,
  useGetUserOrganizations,
  useGetUserSubscriptions,
} from "@/services";
import { CONTENT_NAMES } from "@/constants";
import { HeartEmptyIcon, HeartFillIcon } from "@public/icon";
import * as S from "./GithubProfile.styled";

interface GithubProfileProps {
  name: string;
  githubUrl: string;
  profileUrl?: string;
  isBookmark: boolean;
}

const GithubProfile = forwardRef<HTMLLIElement, GithubProfileProps>(
  ({ name, githubUrl, profileUrl, isBookmark }: GithubProfileProps, ref) => {
    const [content, setContent] = useState<
      Record<(typeof CONTENT_NAMES)[number], boolean>
    >({
      followers: false,
      organizations: false,
      subscriptions: false,
    });

    const { data: followers } = useGetUserFollowers(
      { query: { username: name } },
      content.followers
    );
    const { data: subscriptions } = useGetUserSubscriptions(
      { query: { username: name } },
      content.subscriptions
    );
    const { data: organizations } = useGetUserOrganizations(
      { query: { username: name } },
      content.organizations
    );

    const handleBookmark = (): void => {
      console.log("handleBookmark");
    };

    const handleSearchContent =
      (contentKey: (typeof CONTENT_NAMES)[number]) => (): void => {
        setContent((prevContent) => ({ ...prevContent, [contentKey]: true }));
      };

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
              {content[contentName] ? (
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
          <S.BookmarkButton type="button" onClick={handleBookmark}>
            {isBookmark ? <HeartFillIcon /> : <HeartEmptyIcon />}
          </S.BookmarkButton>
        </S.ContentWarpper>
      </S.GithubProfile>
    );
  }
);

GithubProfile.displayName = "GithubProfile";

export default GithubProfile;
