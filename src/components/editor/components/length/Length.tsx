import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";

const Text = styled.span`
  width: max-content;
  color: gray2;
  font-size: 12px;
  margin-top: 8px;
  transition: all 0.3s linear;
  &.bold {
    font-weight: bold;
  }
`;

export const Length = ({ count }: { count: number }) => {
  return (
    <>
      <Text>
        Length <Text className={"bold"}>{count}</Text> chars
      </Text>
    </>
  );
};
