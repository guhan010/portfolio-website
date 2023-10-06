import { Box, Grid, Typography } from "@mui/material";

const Game08 = () => {
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
        marginTop={1}
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
            Skeleton Loading
          </Typography>
          <Typography
            className="title-03"
            sx={{ fontSize: "18px", color: "#757575" }}
          >
            Enhance your experience on Game Base with our new skeleton loading
            placeholder, ensuring seamless content loading and a more engaging
            user interface
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default Game08;
