import { Grid } from "@mui/material";
import platformfilter from "../../assets/platformfilter.png";
import sortby from "../../assets/sortby.png";

const GameImage03 = () => {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid container spacing={-1} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <div
            className="responsive-image-container"
            style={{ margin: "20px 50px" }}
          >
            <img
              className="responsive-image"
              src={platformfilter}
              alt="Game-Base Image"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} marginTop={3}>
          <div
            className="responsive-image-container"
            style={{ margin: "40px 40px" }}
          >
            <img
              className="responsive-image"
              src={sortby}
              alt="Game-Base Image"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GameImage03;
