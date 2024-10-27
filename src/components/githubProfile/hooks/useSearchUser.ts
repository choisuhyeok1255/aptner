"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash-es";

interface UseSearchUserProps {
  username: string;
}

const useSearchUser = ({ username }: UseSearchUserProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateUsernameQuery = debounce((value): void => {
    const params = new URLSearchParams(searchParams);

    const trimUsername = value.trim();

    if (trimUsername) {
      params.set("username", trimUsername);
    } else {
      params.delete("username");
    }

    router.push(params.toString() ? `?${params.toString()}` : "/");
  }, 700);

  useEffect(() => {
    updateUsernameQuery(username);

    return () => {
      updateUsernameQuery.cancel();
    };
  }, [username]);

  return {
    usernameQuery: searchParams.get("username"),
  };
};

export default useSearchUser;
