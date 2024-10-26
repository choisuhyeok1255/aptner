import React from "react";
import type { InputHTMLAttributes } from "react";

import * as S from "./Input.styled";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: InputProps) => {
  return <S.Input className={className} {...props} />;
};

export default Input;
