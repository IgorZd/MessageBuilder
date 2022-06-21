import React, { useState } from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { Editor } from "../components/editor/Editor";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMessage,
  selectReview,
  setMessage,
  setReview,
} from "./state/messageBuilderSlice";
import { Preview } from "../components/preview/Preview";
import { Placeholders } from "../components/placeholders/Placeholders";
import { useGetPlaceholders } from "../api/placeholders";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
`;

function App({ classes, ...props }: any) {
  const [cursorPosition, setCursorPosition] = useState(0);

  const dispatch = useDispatch();
  const placeholders = useGetPlaceholders();
  const message = useSelector(selectMessage);
  const review = useSelector(selectReview);

  const placeholdersList = Object.values(placeholders);

  const formatMessage = (message: string) => {
    const replaceAll = (str: string, mapObj: any) => {
      const re = new RegExp(Object.keys(mapObj).join("|"), "g");
      return str.replace(re, (matched) => mapObj[matched]);
    };
    const mapObj = placeholdersList
      .map((item: any) => ({
        key: item.name.toUpperCase(),
        value: item.example,
      }))
      .reduce(
        (obj, item) => Object.assign(obj, { [item.key]: item.value }),
        {}
      );
    const reWithoutBrackets = /[[\]']+/g;
    const result = replaceAll(message, mapObj).replace(reWithoutBrackets, "");
    return result;
  };

  const handleChangeMessage = (value: string) => {
    dispatch(setMessage({ message: value }));
    dispatch(setReview({ review: formatMessage(value) }));
  };
  const handleClearMessage = () => {
    dispatch(setMessage({ message: "" }));
    dispatch(setReview({ review: "" }));
  };
  const textareaOnClick = (cursorPosition: number) => {
    setCursorPosition(cursorPosition);
  };

  const placeholderItemOnclick = (name: string) => {
    const preparedMessage =
      message.length === 0
        ? `${message.slice(0, cursorPosition)}[${name.toUpperCase()}]`
        : cursorPosition < message.length
        ? `${message.slice(
            0,
            cursorPosition
          )}[${name.toUpperCase()}]${message.slice(
            cursorPosition,
            message.length
          )}`
        : `${message.slice(
            0,
            cursorPosition + 2
          )}[${name.toUpperCase()}]${message.slice(
            cursorPosition + 2,
            message.length
          )}`;
    handleChangeMessage(preparedMessage);
    setCursorPosition(message.length + name.length + 2);
  };

  return (
    <Wrapper>
      <Editor
        message={message}
        handleChangeMessage={handleChangeMessage}
        handleClearMessage={handleClearMessage}
        textareaOnClick={textareaOnClick}
      />
      <Placeholders
        list={placeholdersList}
        message={message}
        placeholderItemOnclick={placeholderItemOnclick}
      />
      <Preview message={review} />
    </Wrapper>
  );
}

export default App;
