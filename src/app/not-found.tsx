"use client";

import React from "react";

import * as S from "./not-found.styled";
import Link from "next/link";
import { PATH } from "@/constants";

const NotFound = () => {
  return (
    <S.NotFound>
      <S.Content>존재 하지 않는 페이지 입니다</S.Content>
      <Link css={S.homeLink} href={PATH.root}>
        홈으로 돌아가기
      </Link>
    </S.NotFound>
  );
};

export default NotFound;
