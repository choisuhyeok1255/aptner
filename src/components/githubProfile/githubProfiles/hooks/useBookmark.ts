import { useEffect, useState } from "react";

import type { User } from "@/types";

const useBookmark = () => {
  const storageBookmark = localStorage.getItem("bookmark");

  const [bookmarks, setBookmarks] = useState<User[]>(
    storageBookmark ? JSON.parse(storageBookmark) : []
  );

  const handleCheckBookmark = (profile: User): boolean => {
    return !!bookmarks.find((user) => user.login === profile.login);
  };

  const handleBookmark = (profile: User) => (): void => {
    setBookmarks((prevBookmarks) => {
      const isBookmarked = !!prevBookmarks.find(
        (user) => user.login === profile.login
      );

      const updatedBookmarks = isBookmarked
        ? prevBookmarks.filter((user) => user.login !== profile.login)
        : [...prevBookmarks, profile];

      return updatedBookmarks;
    });
  };

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return {
    handleBookmark,
    handleCheckBookmark,
  };
};

export default useBookmark;
