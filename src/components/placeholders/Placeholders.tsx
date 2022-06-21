import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { Item } from "./components/item/Item";

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
`;

export const Placeholders = ({
  list,
  message,
  placeholderItemOnclick,
}: {
  list: any[];
  message: string;
  placeholderItemOnclick: (name: string) => void;
}) => {
  return (
    <Wrapper>
      {list.map((item: any, index: number) => {
        const { name } = item;
        return (
          <Item
            key={index}
            value={name}
            onClick={() => {
              placeholderItemOnclick(name);
            }}
            disabled={message.includes(name.toUpperCase())}
          />
        );
      })}
    </Wrapper>
  );
};
