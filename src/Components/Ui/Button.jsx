import React from "react";
import styled from "styled-components";

export const Button = ({
  children,
  width,
  border,
  backgroundColor,
  color,
  onClick,
}) => {
  return (
    <div>
      <Btton
        onClick={onClick}
        style={{
          width,
          backgroundColor,
          border,
          color
        }}
      >
        {children}
      </Btton>
    </div>
  );
};
const Btton = styled.button`
  width: 99px;
  height: 41px;
  background: #8a2b06;
  border-radius: 20px;
  border: 0;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  &:hover {
    background-color: #7e2a0a;
  }
`;
