import { Box, Divider, Grid, Typography } from "@mui/material";
import darkmode from "../../assets/darkmode.png";

const Game06 = () => {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid container spacing={-1} justifyContent="center">
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{
              padding: "10px",
              backgroundColor: "whitesmoke",
              textAlign: "left",
              maxWidth: "350px", // Adjust the maximum width as needed
              margin: "0 auto", // Center align the content
            }}
          >
            <Typography
              variant="h2"
              className="title-02"
              sx={{ fontSize: "25px", fontWeight: "600", color: "#333333" }}
              marginY={2}
            >
              Dark Mode Toggle
            </Typography>
            <Typography
              className="title-03"
              sx={{ fontSize: "18px", color: "#757575" }}
            >
              Game Base lets you switch to Dark Mode with a simple toggle,
              ensuring a comfortable gaming experience even in low-light
              conditions.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} marginTop={4}>
          <Box style={{ padding: 16, textAlign: "center" }}>
            <img
              src={darkmode}
              alt="Profile Picture"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Game06;
