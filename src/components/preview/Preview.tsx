import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const Text = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: blue;
  &.message {
    font-size: 16px;
    font-weight: normal;
    color: white;
    white-space: pre-line;
    word-break: break-word;
  }
  &.title {
    margin-bottom: 2px;
  }
`;
const MessageWrapper = styled.div`
  width: 100%;
  min-height: 54px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  padding: 16px;
  background-color: blue1;
  transition: all 0.3s linear;
  border-radius: 0 12px 12px;
  &.centered {
    justify-content: center;
  }
`;

export const Preview = ({ message }: { message: string }) => {
  return (
    <Wrapper>
      <Text className={"title"}>Preview</Text>
      <MessageWrapper
        className={message && message.length === 0 ? "centered" : ""}
      >
        {message && message.length > 0 ? (
          <Text className={"message"}>{message}</Text>
        ) : (
          <Text className={"message"}>{"No message"}</Text>
        )}
      </MessageWrapper>
    </Wrapper>
  );
};
