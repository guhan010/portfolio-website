import { Grid } from "@mui/material";
import CalcCard from "./Cards/CalcCard";
import GameCard from "./Cards/GameCard";
import PortfolioCard from "./Cards/PorfolioCard";
import RoisterCard from "./Cards/RoisterCard";

const PortfolioGrid = () => {
  return (
    <div style={{ flexGrow: 1, margin: "70px 150px" }}>
      <Grid container spacing={10} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <RoisterCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PortfolioCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GameCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CalcCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default PortfolioGrid;
