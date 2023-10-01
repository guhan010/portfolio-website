import { Grid } from "@mui/material";
import CalcCard from "./Cards/CalcCard";
import GameCard from "./Cards/GameCard";
import PortfolioCard from "./Cards/PorfolioCard";

const PortfolioGrid = () => {
  return (
    <div
      style={{
        flexGrow: 1,
        display: "flex",
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{
          display: "flex",
          justifyContent: "center", // Center-align content horizontally
          gap: 3,
          margin: " 30px 150px ",
        }}
      >
        <PortfolioCard />
        <GameCard />
        <CalcCard />
      </Grid>
    </div>
  );
};

export default PortfolioGrid;
