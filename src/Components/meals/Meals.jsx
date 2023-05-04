import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "../Ui/Button";
import { foods } from "../Utils/Array";
import { AppProvider } from "../Context/Context";

export const Meals = () => {
 
  const {addFoods} = useContext(AppProvider)

  return (
    <DfDivMeals>
      <DivMeals>
        {foods.map((el) => (
          <ContainerMapMeals key={el.id}>
            <DivTitPr>
              <h3>{el.title}</h3>
              <i>{el.from}</i>
              <p>${el.price}</p>
            </DivTitPr>
            <DivBtnAmo>
              <span>Amount</span>
              <div>
                <input type="number" />
                <Button onClick={() => addFoods(el.id)}>+ Add</Button>
              </div>
            </DivBtnAmo>
          </ContainerMapMeals>
        ))}
      </DivMeals>
    </DfDivMeals>
  );
};
const DfDivMeals = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const DivMeals = styled.div`
  width: 1039px;
  height: 564px;
  background: #ffffff;
  border-radius: 16px;
  padding: 0 40px;
`;
const ContainerMapMeals = styled.div`
  margin-top: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px;
`;
const DivTitPr = styled.div`
  width: 200px;
  height: 89px;
  h3 {
    font-weight: 600;
    font-size: 18px;
    color: #222222;
  }
  i {
    font-weight: 400;
    font-size: 16px;
    color: #222222;
  }
  p {
    font-weight: 700;
    font-size: 20px;
    color: #ad5502;
  }
`;
const DivBtnAmo = styled.div`
  width: 155px;
  height: 85px;
  display: flex;
  span {
    font-weight: 600;
    font-size: 18px;
    color: #222222;
    margin-left: 20px;
  }
  input {
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    margin-bottom: 12px;
    margin-left: 20px;
  }
`;
