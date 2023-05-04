import "./App.css";
import ReactDOM from "react-dom";
import { useContext } from "react";
import { Header } from "./Components/header/Header";
import { MealsSummary } from "./Components/meals-summary/MealsSummary";
import { MealsSummaryCard } from "./Components/meals-summary/MealsSummaryCard";
import { Meals } from "./Components/meals/Meals";
import { NewFoodsModal } from "./NewFoods/NewFoodsModal";
import { AppProvider } from "./Components/Context/Context";

function App() {
  const { open } = useContext(AppProvider);
  return (
    <div>
      <Header />
      <MealsSummary />
      <MealsSummaryCard />
      <Meals />
      {open &&
        ReactDOM.createPortal(
          <NewFoodsModal />,
          document.getElementById("modal")
        )}
    </div>
  );
}

export default App;
