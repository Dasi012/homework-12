import { createContext, useReducer, useState } from "react";
import { foods } from "../Utils/Array";

export const AppProvider = createContext(null);

const initialState = {
  newFoods: [],
};
const reduser = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        newFoods: [...state.newFoods, action.payload],
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, initialState);
  const [open, setOpen] = useState(false);

  const addFoods = (id) => {
    const exis = state.newFoods.findIndex((item) => item.id === id);
    if (exis !== -1) {
      return null;
    } else {
      const productToAdd = foods.find((item) => item.id === id);
      dispatch({ type: "ADD", payload: { ...productToAdd, quantity: 1 } });
    }
  };

  //

  const openBasket = () => {
    setOpen(true);
    console.log("aasf");
  };
  const closeModal = () => {
    setOpen(false);
  };

  const store = {
    addFoods,
    newFoods: state.newFoods,
    openBasket,
    open,
    closeModal,
  };
  return <AppProvider.Provider value={store}>{children}</AppProvider.Provider>;
};
