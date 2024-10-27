"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import type { ChangeEvent } from "react";

const useUsername = () => {
  const searchParams = useSearchParams();

  const [username, setUsername] = useState(searchParams.get("username") || "");

  const handleUsername = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  return { username, handleUsername };
};

export default useUsername;
