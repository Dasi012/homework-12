import styled from "styled-components";
import React, { useContext } from "react";
import { OrderBusket } from "./OrderBusket";
import { AppProvider } from "../Context/Context";

export const Header = () => {
  const {openBasket} = useContext(AppProvider)
  return (
    <Container>
      <h1>React Meals</h1>
      <OrderBusket onClick={openBasket}>Your Cart</OrderBusket>
    </Container>
  );
};
const Container = styled.div`
  background-color: #8a2b06;
  width: 100%;
  height: 101px;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

