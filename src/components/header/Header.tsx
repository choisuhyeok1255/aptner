"use client";

import React from "react";
import Link from "next/link";

import { useCurrentPath } from "@/hooks";
import { PATH } from "@/constants/index";
import * as S from "./Header.styled";

const Header = () => {
  const { isCurrentPath } = useCurrentPath();

  return (
    <header>
      <h1 className="a11y">
        깃허브 유저 검색 및 유저 북마크 리스트 관리 페이지
      </h1>
      <S.LinkWrapper aria-label="헤더 내비게이션">
        <Link
          css={S.link(isCurrentPath(PATH.root))}
          href={PATH.root}
          aria-current={isCurrentPath(PATH.root) ? "page" : undefined}
        >
          유저 검색
        </Link>
        <Link
          css={S.link(isCurrentPath(PATH.bookmark))}
          href={PATH.bookmark}
          aria-current={isCurrentPath(PATH.bookmark) ? "page" : undefined}
        >
          북마크
        </Link>
      </S.LinkWrapper>
    </header>
  );
};

export default Header;
