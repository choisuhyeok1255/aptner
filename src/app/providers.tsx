"use client";

import React from "react";
import { Global } from "@emotion/react";

import { Provider } from "@/components";
import { globalStyle } from "@/styles";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <Global styles={globalStyle} />
      <Provider>{children}</Provider>
    </>
  );
};

export default Providers;
