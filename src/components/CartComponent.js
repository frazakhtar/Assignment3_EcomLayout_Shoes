import { Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const CartComponent = ({ cartItem, setCartItem }) => {
  const [count, setCount] = useState(1);
  const handleAddClick = () => {
    setCount(count + 1);
  };
  return (
    <Paper sx={{ p: 2, backgroundColor: "transparent" }}>
      <Typography>Cart</Typography>
      {cartItem.length >= 1 ? (
        cartItem.map((elem) => {
          return (
            <Paper sx={{ p: 2, m: 5, display: "flex" }}>
              <img src={elem.image} style={{ height: "5rem", width: "5rem" }} />
              <div style={{ padding: "10px" }}>{elem.title}</div>
              <div style={{ padding: "10px" }}>{elem.price}</div>
              <Button
                variant="contained"
                sx={{
                  minWidth: 0,
                  padding: "4px 8px",
                  margin: "10px",
                  height: "20px",
                }}
              >
                -
              </Button>
             <div style={{margin:'10px'}}>{count}</div> 
              <Button
                onClick={handleAddClick}
                variant="contained"
                sx={{
                  minWidth: 0,
                  padding: "4px 8px",
                  margin:"10px",
                  height: "20px",
                }}
              >
                +
              </Button>
            </Paper>
          );
        })
      ) : (
        <p>Your Cart Is Empty!!!</p>
      )}
    </Paper>
  );
};

export default CartComponent;
