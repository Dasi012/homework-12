import React from "react";
import busket from "../../Image/Icons/Vector.svg";
import styled from "styled-components";

export const OrderBusket = ({ children,onClick }) => {
  return (
    <BtnCartHeader onClick={onClick}>
      <img src={busket} />
      <OrderBusketTitle >{children}</OrderBusketTitle>
      <OrderBusketCount>7</OrderBusketCount>
    </BtnCartHeader>
  );
};
const BtnCartHeader = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  border: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.2s;
  padding: 0 22px;
  &:hover {
    background-color: #4d1601;
  }
`;
const OrderBusketTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;
const OrderBusketCount = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
  color: #fff;
  font-weight: 700;
font-size: 20px;
`;
