import styled, { css } from "styled-components";
import { useState } from "react";

// Ensure HMR of styled component alongside other components
export const StyledCode = styled.code`
  color: palevioletred;
`;

export const Counter = ({ primary }: { primary?: boolean }) => {
  const [count, setCount] = useState(0);

  return (
    <button
      css={`
        border-radius: 3px;
        padding: 0.5rem 1rem;
        color: white;
        background: transparent;
        border: 2px solid white;
        ${() =>
          primary &&
          css`
            background: white;
            color: black;
          `}
      `}
      onClick={() => setCount(count + 1)}
    >
      count is {count}
    </button>
  );
};
