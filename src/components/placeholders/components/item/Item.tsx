import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";

const Wrapper = styled.div`
  width: max-content;
  display: flex;
  justify-content: center;
  background-color: gray5;
  padding: 6px 12px;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    & > span {
      color: blue;
    }
  }
  &.disabled {
    pointer-events: none;
    user-select: none;
    & > span {
      color: blue;
    }
  }
`;
const Text = styled.span`
  font-size: 12px;
  color: gray1;
  font-weight: bold;
  transition: all 0.3s linear;
`;

export const Item = ({
  value,
  onClick,
  disabled,
}: {
  value: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <Wrapper onClick={onClick} className={disabled ? "disabled" : ""}>
      <Text>{value.toUpperCase()}</Text>
    </Wrapper>
  );
};
