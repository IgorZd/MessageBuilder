import React from "react";
// @ts-ignore
import styled, { useTheme } from "@xstyled/styled-components";
import { ReactComponent as DeleteIcon } from "../../../../assets/delete_icon.svg";

const Icon = styled(DeleteIcon)`
  cursor: pointer;
  position: absolute;
  right: 7px;
  top: 7px;
  & > path {
    transition: all 0.3s linear;
  }
  &:hover {
    & > path {
      stroke: ${(props: any) => props.theme.colors.gray1};
      transition: all 0.3s linear;
    }
  }
`;

export const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  const theme = useTheme();

  return (
    <>
      <Icon onClick={onClick} theme={theme} />
    </>
  );
};
