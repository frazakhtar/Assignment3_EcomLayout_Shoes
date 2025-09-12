import "./index.css"
import NavBar from "./components/NavBar";
import ShoesListing from "./components/ShoesListing";
import CartComponent from "./components/CartComponent";
import { useState } from "react";
import {CartContext} from './Contexts/CartContext'

function App() {
  const [cartItem, setCartItem] = useState([]);
  return (
    <div className="App">
      <NavBar />
      <CartContext.Provider value={{cartItem, setCartItem}}>
      <div className="container">
        <div className="listing">
          <ShoesListing />
        </div>
        <div className="cart">
          <CartComponent />
        </div>
      </div>
      </CartContext.Provider>
    </div>
  );
}

export default App;
