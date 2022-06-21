import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";

const Wrapper = styled.div`
  width: max-content;
  padding: 8px 12px;
  background-color: gray5;
  border-radius: 6px 6px 0 0;
  border: 1px solid;
  border-bottom: none;
  border-color: gray3;
  position: relative;
  top: 1px;
  z-index: 2;
`;
const Name = styled.span`
  color: blue;
`;

export const Tab = ({ name }: { name: string }) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
    </Wrapper>
  );
};
