import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { Textarea } from "./components/textarea/Textarea";
import { Tab } from "./components/tab/Tab";
import { DeleteButton } from "./components/deleteButton/DeleteButton";
import { Length } from "./components/length/Length";

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;
const TextareaWrapper = styled.div`
  display: flex;
  border: 1px solid;
  border-color: gray3;
  padding: 0 36px 0 12px;
  border-radius: 0 0 6px 6px;
  position: relative;
  z-index: 1;
`;

export const Editor = ({
  message,
  handleChangeMessage,
  handleClearMessage,
  textareaOnClick,
}: {
  message: string;
  handleChangeMessage: (value: string) => void;
  handleClearMessage: () => void;
  textareaOnClick: (cursorPosition: number) => void;
}) => {
  return (
    <Wrapper>
      <Tab name={"Variant 1"} />
      <TextareaWrapper>
        <Textarea
          value={message}
          onChange={handleChangeMessage}
          onClick={textareaOnClick}
          placeholder={"Enter message"}
        />
        {message?.length > 0 && <DeleteButton onClick={handleClearMessage} />}
      </TextareaWrapper>
      <Length count={message?.length} />
    </Wrapper>
  );
};
