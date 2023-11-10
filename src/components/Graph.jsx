import { Box, Divider, Grid, Slide, Typography } from "@mui/material";
import graph from "../assets/graph.gif";
import "../styles/FontStyles.css";

const Graph = () => {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid container spacing={2} justifyContent="space-evenly" marginY="40px">
        <Slide in={true} direction="right" timeout={700}>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              style={{
                padding: 10,
                backgroundColor: "whitesmoke",
                textAlign: "left",
                maxWidth: "400px", // Adjust the maximum width as needed
              }}
              marginTop="-20px"
            >
              <Typography
                variant="h1"
                className="page-title"
                sx={{ fontSize: "60px", fontWeight: "700", color: "#333333" }}
              >
                Career Trajectory
              </Typography>
            </Box>
            <Box
              style={{
                padding: 10,
                backgroundColor: "whitesmoke",
                textAlign: "left",
                maxWidth: "400px", // Adjust the maximum width as needed
              }}
            >
              <Typography
                variant="body1"
                className="title-02"
                sx={{ color: "#757575", fontWeight: 400, fontSize: "16px" }}
              >
                A career evolution graph showcasing a progressive journey of
                accomplishments, skill enrichment, and continuous upward
                mobility in the professional landscape.
              </Typography>
            </Box>
          </Grid>
        </Slide>
        <Slide in={true} direction="left" timeout={700}>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <img
                src={graph}
                alt="Profile Picture"
                style={{ width: "100%", height: "100%", borderRadius: "8px" }}
              />
            </Box>
          </Grid>
        </Slide>
      </Grid>
      <Divider variant="middle" />
    </div>
  );
};

export default Graph;
