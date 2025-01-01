import { Box, Divider, Grid, Slide, Typography } from "@mui/material";
import about from "../assets/about.png";
import "../styles/FontStyles.css";

function About1() {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid container spacing={2} justifyContent="center" marginY="40px">
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
                sx={{ fontSize: "100px", fontWeight: "700", color: "#333333" }}
              >
                about
              </Typography>
            </Box>
            <Box
              style={{
                padding: 10,
                backgroundColor: "whitesmoke",
                textAlign: "left",
                maxWidth: "400px", // Adjust the maximum width as needed
                marginY: "-10px",
              }}
            >
              <Typography
                variant="body1"
                className="title-02"
                sx={{ fontSize: "25px", color: "#757575", fontWeight: 400 }}
              >
                I&apos;m a Full Stack Developer based in India.
              </Typography>
            </Box>
            <Box
              style={{
                padding: 10,
                textAlign: "left",
                maxWidth: "500px", // Adjust the maximum width as needed
              }}
            >
              <Typography
                variant="body1"
                className="title-03"
                sx={{ marginY: "0px", color: "#333333", fontSize: "20px" }}
              >
                I channel my meticulousness, passion for creation, and tireless
                commitment towards a purpose-driven work ethic. This fuels my
                eagerness to create a significant impact within a thriving
                organization, ultimately contributing to the transformation of
                our world.
              </Typography>
            </Box>
          </Grid>
        </Slide>

        <Slide in={true} direction="left" timeout={700}>
          <Grid item xs={12} sm={6} md={4}>
            <Box style={{ padding: 16, textAlign: "center" }}>
              <img
                src={about}
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
