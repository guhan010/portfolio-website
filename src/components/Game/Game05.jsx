import { Box, Grid, Typography } from "@mui/material";

const Game05 = () => {
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
            marginY={2.5}
          >
            Compelling Highlights of Game Base
          </Typography>
          <Typography
            className="regular-font"
            sx={{ fontSize: "18px", color: "#333333" }}
          >
            Game Base offers a plethora of enticing features designed to enhance
            your experience. Here is some of the attractive features:
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default Game05;
