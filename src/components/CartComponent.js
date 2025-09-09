import { Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const CartComponent = ({cartItem}) => {
  console.log(cartItem)
  return (
    <Paper sx={{p:2,backgroundColor:"transparent"}}>
      <Typography>Cart</Typography>
      {cartItem && cartItem.map((elem)=>{
            return( 
            <Paper sx={{p:2,m:5}}>
              <img src={elem.image} style={{height:"50px", width:"50px"}}/>
              <br/>
              {elem.title}
              <br/>
              {elem.price}
            </Paper>
            )
      })}
     
    </Paper>
  )
}

export default CartComponent