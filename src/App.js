import "./App.css";
import InputEvents from "./events/InputEvents";
import MovementEvents from "./events/MovementEvents";
import "./events/Events.css";
import Card from "./Card.js";
import "./Card.css";
import FormValidation from "./FormValidation";
import ShoppingList from "./ShoppingList";
import "./ShoppingList.css";

function App() {
  return (
    <div className="App">
      <Card />
      <InputEvents />
      <MovementEvents />
      <FormValidation />
      <ShoppingList />
    </div>
  );
}

export default App;
