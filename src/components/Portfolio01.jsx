import { Box, Divider, Grid, Slide, Typography } from "@mui/material";
import portfolio2 from "../assets/portfolio2.jpg";
import "../styles/FontStyles.css";

function About1() {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid container spacing={2} justifyContent="space-around" marginY="40px">
        <Slide in={true} direction="right" timeout={700}>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              style={{
                padding: "10px",
                backgroundColor: "whitesmoke",
                textAlign: "left",
                maxWidth: "400px", // Adjust the maximum width as needed
              }}
              marginTop="-20px"
            >
              <Typography
                variant="h1"
                className="page-title"
                sx={{ fontSize: "100px", fontWeight: "700", color: "#333333" }}
              >
                portfolio..
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
                sx={{ color: "#757575", fontWeight: 400, fontSize: "25px" }}
              >
                Check out some of my latest development projects and
                contributions.
              </Typography>
            </Box>
            <Box
              style={{
                padding: 10,
                textAlign: "left",
                maxWidth: "450px", // Adjust the maximum width as needed
              }}
            >
              <Typography
                variant="body1"
                className="title-03"
                sx={{ color: "#333333", fontSize: "18px" }}
              >
                I started with minor project tweaks and grew into creating my
                own software projects. These personal endeavors have shaped me
                as a developer, honing my skills and fueling my passion for
                coding.
              </Typography>
            </Box>
          </Grid>
        </Slide>
        <Slide in={true} direction="left" timeout={700}>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <img
                src={portfolio2}
                alt="Profile Picture"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>
          </Grid>
        </Slide>
      </Grid>
      <Divider variant="middle" />
    </div>
  );
}

export default About1;
