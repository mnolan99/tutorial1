import "./App.css";
import InputEvents from "./events/InputEvents";
import MovementEvents from "./events/MovementEvents";
import "./events/Events.css";
import Card from "./Card.js";
import "./Card.css";
import FormValidation from "./FormValidation";
import ShoppingList from "./ShoppingList";
import "./ShoppingList.css";
import CardStateful from "./addressBook/examples/CardStateful";
import CardStateless from "./addressBook/examples/CardStateless";
import AddressBook from "./addressBook/AddressBook";
import CardHooks from "./addressBook/CardHooks";
import "./Default.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Card />
      <InputEvents />
      <MovementEvents />
      <FormValidation />
      <ShoppingList />
      <CardStateful food="Pizza" />
      <CardStateless food="Ramen" />
      <AddressBook />
      <CardHooks />
      <h1>Hello World</h1>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about/123">About Martin</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<h2>Home Page</h2>} />
          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/about/123" element={<h2>About Martin</h2>} />
          <Route path="/contact" element={<h2>Contact Page</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
