import { Box, Divider, Fade, Grid, Typography } from "@mui/material";
import name from "../assets/name.webp";
import { useEffect, useState } from "react";
import PortfolioGrid from "../components/PortfolioGrid";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ flexGrow: 1, padding: 16 }} className="home">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{ opacity: isVisible ? 1 : 0, transition: "opacity 4s" }}
        >
          <img
            src={name}
            alt="Hi! I'm Guhan Eswaran. I'm a Full Stack Developer"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
