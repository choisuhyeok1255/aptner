import { useEffect, useState } from "react";

import type { User } from "@/types";
import useMounted from "./useMounted";

const useBookmark = () => {
  const { isMounted } = useMounted();

  const [bookmarks, setBookmarks] = useState<User[]>(() => {
    if (typeof window !== "undefined") {
      const storageBookmark = localStorage.getItem("bookmark");
      return storageBookmark ? JSON.parse(storageBookmark) : [];
    }
    return [];
  });

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
    bookmarks: isMounted ? bookmarks : [],
    handleBookmark,
    handleCheckBookmark,
  };
};

export default useBookmark;
