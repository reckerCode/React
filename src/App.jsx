import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import Order from "./Order";


const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza – Order Now</h1>
      <Order />
    </div>
  );
};

// const App = () => {
//   return createElement("div", {}, [
//     createElement("h1", {}, "Padre Gino's"),
//     createElement(PizzaList, {
//       name: "Pepperoni Pizza",
//       description: "Mozzarella chees, Pepperoni",
//     }),
//     createElement(PizzaList, {
//       name: "Four Cheese Pizza",
//       description: "Mozzarella, Cheddar, Parmesan, Provolone, fontina ",
//     }),
//     createElement(PizzaList, {
//       name: "Veg Pizza",
//       description: "Mozzarella chees, Green peppers, olives",
//     }),
//     createElement(PizzaList, {
//       name: "Margerita Pizza",
//       description: "Mozzarella chees, traditional red sauce, basil",
//     }),
//   ]);
// };

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
