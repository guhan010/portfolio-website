import { Box, Divider, Grid, Slide, Typography } from "@mui/material";
import portfolio1 from "./../assets/portfolio1.jpg";

function About1() {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid container spacing={2} justifyContent="center" marginY="40px">
        <Slide in={true} direction="right" timeout={700}>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              style={{
                padding: "10px",
                backgroundColor: "whitesmoke",
                textAlign: "left",
                maxWidth: "500px", // Adjust the maximum width as needed
                margin: "0 auto", // Center align the content
              }}
            >
              <Typography
                variant="h1"
                className="MuiTypography--h1 MuiTypography-responsiveFontSm"
                sx={{ fontSize: "80px", fontWeight: "700", color: "#333333" }}
              >
                portfolio..
              </Typography>
            </Box>
            <Box
              style={{
                padding: 10,
                backgroundColor: "whitesmoke",
                textAlign: "left",
                maxWidth: "500px", // Adjust the maximum width as needed
                margin: "0 auto", // Center align the content
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "GrayText", fontSize: "20px" }}
              >
                Check out some of my latest development <br />
                projects and contributions.
              </Typography>
            </Box>
            <Box
              style={{
                padding: 10,
                textAlign: "left",
                maxWidth: "500px", // Adjust the maximum width as needed
                margin: "0 auto", // Center align the content,
              }}
            >
              <Typography
                variant="body1"
                sx={{ marginY: "7px", color: "GrayText", fontSize: "15px" }}
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
            <Box style={{ padding: 16, textAlign: "center" }}>
              <img
                src={portfolio1}
                alt="Profile Picture"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
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
