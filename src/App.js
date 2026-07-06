import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(PizzaList, {
      name: "Pepperoni Pizza",
      description: "Mozzarella chees, Pepperoni",
    }),
    React.createElement(PizzaList, {
      name: "Four Cheese Pizza",
      description: "Mozzarella, Cheddar, Parmesan, Provolone, fontina ",
    }),
    React.createElement(PizzaList, {
      name: "Veg Pizza",
      description: "Mozzarella chees, Green peppers, olives",
    }),
    React.createElement(PizzaList, {
      name: "Margerita Pizza",
      description: "Mozzarella chees, traditional red sauce, basil",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
