import React from "react";
import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: InputProps) => {
  return <input className={className} {...props} />;
};

export default Input;
