import React from "react";

import { GithubProfiles } from "@/components";
import { useBookmark } from "@/hooks";
import * as S from "./GithubProfileBookmarks.styled";

const GithubProfileBookmarks = () => {
  const { bookmarks, handleBookmark, handleCheckBookmark } = useBookmark();

  return (
    <>
      {bookmarks.length ? (
        <GithubProfiles
          profiles={bookmarks}
          handleBookmark={handleBookmark}
          handleCheckBookmark={handleCheckBookmark}
        />
      ) : (
        <S.EmptyBookmarks>북마크에 추가한 유저가 없습니다.</S.EmptyBookmarks>
      )}
    </>
  );
};

export default GithubProfileBookmarks;
