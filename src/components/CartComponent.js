import { Box, Button, Paper, Typography } from "@mui/material";
import { CartContext } from "../Contexts/CartContext";
import React, { useContext, useEffect, useState } from "react";

const CartComponent = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const { cartItem, setCartItem } = useContext(CartContext)
  useEffect(() => {
    handleCartTotal();
  }, [cartItem]);

  const handleCartTotal = () => {
    const total = cartItem.reduce((acc, cur) => {
      return acc + cur.price * (cur.quantity || 1);
    }, 0);
    setCartTotal(total.toFixed(2));
  };
  const handleMinusClick = (elem) => {
    setCartItem((prev) =>
      prev.reduce((acc, item) => {
        if (item.title === elem.title) {
          if ((item.quantity || 0) > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const handleAddClick = (elem) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.title === elem.title
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      )
    );
  };

  return (
      <>
      <h2 style={{display: "flex", alignItems:"center", justifyContent:"center"}}>Cart</h2>
      <Paper
        elevation={24}
        className="paperUnderCart"
        sx={{
          p:2,
          m:2,
          mt:4,
          border: "2px solid white",
          backgroundColor: "transparent",
        }}
      >
      {
        cartItem.length>0? <Button sx={{ display: 'flex', float: "right",mt:0,mb:1}} variant="contained" onClick={()=>setCartItem([])}>Empty Cart</Button>:""
      }
       
        {cartItem.length >= 1 ? (
          cartItem.map((elem, index) => {
            return (
              <Paper
                elevation={24}
                key={index}
                sx={{
                  p: 2,
                  mt:2,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent:"space-between",
                  alignItems: { xs: "center", sm: "center" },
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src={elem.image}
                  style={{ height: "5rem", width: "5rem" }}
                />
                <div style={{ padding: "10px" }}>{elem.title}</div>
                <div style={{ padding: "10px" }}>{elem.price}</div>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    onClick={() => handleMinusClick(elem)}
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
                  <div style={{ margin: "10px" }}>
                    {elem.quantity || 1}
                  </div>
                  <Button
                    onClick={() => handleAddClick(elem)}
                    variant="contained"
                    sx={{
                      minWidth: 0,
                      padding: "4px 8px",
                      margin: "10px",
                      height: "20px",
                    }}
                  >
                    +
                  </Button>
                </Box>
              </Paper>
            );
          })
        ) : (
          <p>Your Cart Is Empty!!!</p>
        )}
          <Typography sx={{ p: 1, m: 1, fontSize: "20px", fontWeight: "bold" }}>
          Cart Total - {`${cartTotal} $`}
        </Typography>
      </Paper>
    </>
  );
};

export default CartComponent;
