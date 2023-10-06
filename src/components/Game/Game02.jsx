import { Box, Divider, Grid, Typography } from "@mui/material";
import "../../styles/FontStyles.css";

const Game02 = () => {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        item
        xs={12}
        sm={12}
        md={12}
        marginTop={3}
      >
        <Box
          style={{
            backgroundColor: "whitesmoke",
            textAlign: "left",
            maxWidth: "600px",
          }}
          marginLeft={3.2}
          marginRight={1}
        >
          <Typography
            variant="h2"
            className="title-02"
            sx={{ fontSize: "25px", fontWeight: "700", color: "#333333" }}
            marginBottom={2.5}
          >
            About Game-Base
          </Typography>
          <Typography
            variant="body1"
            className="title-03"
            sx={{ fontSize: "15px", color: "#757575" }}
          >
            <strong>Game Base</strong> is your one-stop resource for gaming
            information and community engagement. Whether you're a seasoned pro,
            a budding gamer, or a developer seeking insights, we're here to make
            your gaming journey more enjoyable and informative. Dive into Game
            Base and level up your gaming experience today!
          </Typography>
        </Box>
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Divider
          variant="middle"
          sx={{
            marginTop: "30px",
            width: "50%",
          }}
        />
      </div>
    </div>
  );
};

export default Game02;
