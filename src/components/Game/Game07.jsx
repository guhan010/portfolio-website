import { Box, Grid, Typography } from "@mui/material";

const Game07 = () => {
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
            sx={{ fontSize: "25px", fontWeight: "600", color: "#333333" }}
            marginY={1.5}
          >
            Segment Orienting
          </Typography>
          <Typography
            className="title-03"
            sx={{ fontSize: "18px", color: "#757575" }}
          >
            Game Base provides genre filtering and offers two distinct sorting
            choices: by platform or relevance, ensuring a gaming experience that
            suits you best
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default Game07;
