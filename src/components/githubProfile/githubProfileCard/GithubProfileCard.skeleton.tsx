import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import * as S from "./GithubProfileCard.styled";

interface GithubProfileSkeletonProps {
  skeletonCount: number;
  contents: readonly string[];
}

const GithubProfileSkeleton = ({
  skeletonCount,
  contents,
}: GithubProfileSkeletonProps) => {
  return (
    <S.GithubProfileSkeletonWrapper>
      {Array.from({ length: skeletonCount }).map((_, i) => (
        <S.GithubProfileSkeleton key={i}>
          <Skeleton css={S.profile} width={75} height={75} />
          <S.ContentWarpper>
            <Skeleton width={200} />
            {contents.map((_, i) => (
              <Skeleton key={i} width={85} />
            ))}
          </S.ContentWarpper>
          <Skeleton css={S.bookmarkButton} width={24} height={24} />
        </S.GithubProfileSkeleton>
      ))}
    </S.GithubProfileSkeletonWrapper>
  );
};

export default GithubProfileSkeleton;
