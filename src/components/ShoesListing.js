import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Grid, Button, Paper } from "@mui/material";
import "../index.css";
const ShoesListing = () => {
  const { cartItem, setCartItem } = useContext(CartContext);
  const [data, setData] = useState([]);
  const [added, setAdded]=useState([]);
  useEffect(() => {
    getData();
  }, []);

    useEffect(() => {
    setAdded((prevAdded) => {
      return prevAdded.filter((name) =>
        cartItem.some((item) => item.title === name)
      );
    });
  }, [cartItem]);

  const getData = async () => {
    const res = await fetch("/data.json");
    const result = await res.json();
    setData(result);
  };

  const handleAdd = (elem) => {
    const found = cartItem.find((item) => item.title === elem.name);
    if (found) {
      setCartItem((prev) =>
        prev.map((item) =>
          item.title === elem.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem((prev) => {
        return [
          ...prev,
          {
            title: elem.name,
            price: elem.price,
            image: elem.image_url,
            quantity: 1,
          },
        ];
      });
      setAdded((prev)=>[...prev,elem.name])
      console.log(elem.name)
    }
  };
  return (
    <>
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Available Products
      </h2>
      <Grid className="gridContainer" container>
        {data &&
          data.map((elem, i) => {
            return (
              <Grid xs={12} sm={12} md={6} item key={elem.id}>
                <Paper elevation={24} sx={{ p: 4, m: 2, borderRadius:"8px" }}>
                  <img
                    src={elem.image_url}
                    style={{ height: "10rem", width: "10rem" }}
                  />
                  <div style={{ fontSize: "20px" }}>{elem.name}</div>
                  <div
                    style={{
                      margin: "2px",
                      padding: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    {elem.price}
                    {`$`}
                  </div>
                  <Button
                    sx={{mt:2}}
                    disabled={added.includes(elem.name)}
                    variant="contained"
                    onClick={() => handleAdd(elem)}
                  >
                   {added.includes(elem.name) ? "Product Added": "Add to cart"} 
                  </Button>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default ShoesListing;
