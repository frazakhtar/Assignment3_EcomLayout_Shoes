import React from "react";
import { AppBar, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Box } from "@mui/material";

const NavBar = () => {
const navItems = ['Home', 'About', 'Contact'];
  return (
    <AppBar position="static" sx={{width:"100vw",left:0,right:0}} style={{ backgroundColor: "#154D71" }}>
      <Toolbar>
        <Typography>Logo</Typography>
         <Box sx={{ ml: "auto" }} />
        <List sx={{display:"flex"}}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
