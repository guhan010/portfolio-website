import { Grid } from "@mui/material";
import CalcCard from "./Cards/CalcCard";
import GameCard from "./Cards/GameCard";
import PortfolioCard from "./Cards/PorfolioCard";
import RoisterCard from "./Cards/RoisterCard";

const PortfolioGrid = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={8} justifyContent="center" padding={10}>
        <Grid item xs={12} sm={12} md={4}>
          <RoisterCard />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <PortfolioCard />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <GameCard />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CalcCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default PortfolioGrid;
