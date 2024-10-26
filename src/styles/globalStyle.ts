import emotionReset from "emotion-reset";
import { css } from "@emotion/react";

const globalStyles = css`
  ${emotionReset}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%; // 10px
  }
  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;

    &[disabled] {
      cursor: not-allowed;
    }
  }
  input {
    outline: 0;
  }
`;

export default globalStyles;
