import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { media } from "../../../../styles/media";

const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  height: 100%;
  font-family: Poppins, sans-serif;

  box-sizing: border-box;
  background-color: white;
  color: gray1;
  ::placeholder {
    font-family: "Poppins", sans-serif;
    color: gray;
  }
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  border: none;
  padding: 8px 0;
  outline: none;
  resize: none;
  }
  -webkit-text-fill-color: gray2;
  opacity: 1; /* required on iOS */
  transition: all 0.3s linear;
  overflow: hidden;
  ${media.tablet`
    -webkit-appearance: caret;
    -moz-appearance: caret; /* mobile firefox too! */
    -webkit-text-fill-color: ${(props: any) => props.theme.colors.gray1};
`}
`;

export const Textarea = ({
  value,
  onChange,
  onClick,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  onClick: (cursorPosition: number) => void;
  placeholder: string;
}) => {
  return (
    <>
      <StyledTextarea
        onClick={(e: any) => {
          onClick(e.target.selectionStart);
        }}
        onKeyUp={(e: any) => {
          onClick(e.target.selectionStart);
        }}
        value={value}
        onChange={(e: any) => {
          onChange(e.target.value);
        }}
        placeholder={placeholder}
      />
    </>
  );
};
