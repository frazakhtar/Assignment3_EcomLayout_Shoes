import React, { useEffect, useState } from "react";
import { Grid, Button, Paper } from "@mui/material";
import "../index.css";
const ShoesListing = ({ cartItem, setCartItem }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  
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
    }
  };
  return (
    <Grid container>
      {data &&
        data.map((elem) => {
          return (
            <Grid xs={12} sm={12} md={6} item key={elem.id}>
              <Paper sx={{ p: 2, m: 2 }}>
                <img
                  src={elem.image_url}
                  style={{ height: "10rem", width: "10rem" }}
                />
                <div style={{ fontSize: "20px" }}>{elem.name}</div>
                <div
                  style={{ margin: "2px", padding: "2px", fontWeight: "bold" }}
                >
                  {elem.price}
                  {`$`}
                </div>
                <Button
                  sx={{ margin: "10px" }}
                  variant="contained"
                  onClick={() => handleAdd(elem)}
                >
                  Add to cart
                </Button>
              </Paper>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default ShoesListing;
