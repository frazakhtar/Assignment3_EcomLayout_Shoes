import { Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const CartComponent = ({ cartItem, setCartItem }) => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    handleCartTotal();
  }, [cartItem]);
  const handleCartTotal = () => {
    const total = cartItem.reduce((acc, cur) => {
      return acc + cur.price * (cur.quantity || 1);
    }, 0);
    setCartTotal(total);
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
    <Paper sx={{ p: 2, backgroundColor: "transparent" }}>
      <Typography sx={{ p: 1, m: 1, fontSize: "20px", fontWeight: "bold" }}>
        Cart - {`${cartTotal} $`}
      </Typography>
      {cartItem.length >= 1 ? (
        cartItem.map((elem, index) => {
          return (
            <Paper key={index} sx={{ p: 2, m: 5, display: "flex" }}>
              <img src={elem.image} style={{ height: "5rem", width: "5rem" }} />
              <div style={{ padding: "10px" }}>{elem.title}</div>
              <div style={{ padding: "10px" }}>{elem.price}</div>
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
              <div style={{ margin: "10px" }}>{cartItem[index].quantity}</div>
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
