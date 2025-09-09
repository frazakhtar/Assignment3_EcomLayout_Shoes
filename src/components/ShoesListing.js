import React, { useEffect, useState } from 'react'
import {Card, CardHeader, CardContent, CardMedia, Typography, Grid, Button, Box, Paper, AlertTitle} from "@mui/material"
import "../index.css"
const ShoesListing = ({setCartItem}) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        getData();
    },[])
const getData = async()=>{
    const res = await fetch("/data.json")
    const result = await res.json()
    console.log(result)
    setData(result)
}

const handleAdd=(elem)=>{
    setCartItem((prev)=>{
        return([...prev,{
            
            title: elem.name,
            price: elem.price,
            image: elem.image_url
        }])
    })
} 
  return (
    <Grid container>
        {
            data && data.map((elem)=>{
                return(
                    <Grid xs={12} sm={12} md={6} item key={elem.id}>
                        <Paper sx={{p:2, m:2}}> 
                            <img src = {elem.image_url} style={{height:"10rem", width:"10rem"}} />
                            <br />
                            {elem.name}
                            <br/>
                            {elem.price}
                            <br />
                            <Button variant='contained' onClick={()=>handleAdd(elem)}>Add to cart</Button>
                        </Paper>   
                    </Grid>
                )
            })
        }
    </Grid>
  )
}

export default ShoesListing