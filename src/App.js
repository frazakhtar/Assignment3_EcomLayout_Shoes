import { Grid, Paper } from "@mui/material";
import NavBar from "./components/NavBar";
import ShoesListing from "./components/ShoesListing";
import CartComponent from "./components/CartComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <ShoesListing />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <CartComponent />
          </Paper>
        </Grid>
      </Grid>
      </div>
  );
}

export default App;
