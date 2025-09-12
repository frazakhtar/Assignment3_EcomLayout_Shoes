import "./index.css"
import NavBar from "./components/NavBar";
import ShoesListing from "./components/ShoesListing";
import CartComponent from "./components/CartComponent";
import { useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="listing">
          <ShoesListing cartItem={cartItem} setCartItem={setCartItem} />
        </div>
        <div className="cart">
          <CartComponent
            cartItem={cartItem}
            setCartItem={setCartItem}
          />
        </div>
     
      </div>
    </div>
  );
}

export default App;
