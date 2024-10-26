"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";

const useUsername = () => {
  const [username, setUsername] = useState("");

  const handleUsername = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  return { username, handleUsername };
};

export default useUsername;
