import NavBar from "./components/NavBar";
import ShoesListing from "./components/ShoesListing";
import CartComponent from "./components/CartComponent";
import { useState } from "react";

function App() {
  const[cartItem,setCartItem]=useState([])
  return (
    <div className="App">
      <NavBar />
      <div style={{display:"flex", width:"100vw", height:"100vh"}}>
           <div style={{width: "65%"}}>
                <ShoesListing setCartItem={setCartItem}/>
          </div>
          <div style={{width:"35%"}}>
                <CartComponent cartItem={cartItem} setCartItem={setCartItem}/>
          </div>
      </div>
     
    </div>
  );
}

export default App;
