import { Box, Divider, Grid, Typography } from "@mui/material";
import about from "../assets/about.webp";

function About1() {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid container spacing={2} justifyContent="space-evenly" marginY="50px">
        <Grid item xs={12} sm={6} md={4}>
          <Box style={{ padding: 16, textAlign: "center" }}>
            <img
              src={about}
              alt="Profile Picture"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{
              padding: 10,
              backgroundColor: "whitesmoke",
              textAlign: "center",
              maxWidth: "400px", // Adjust the maximum width as needed
              margin: "0 auto", // Center align the content
            }}
          >
            <Typography
              variant="h4"
              className="MuiTypography--h1 MuiTypography-responsiveFontSm"
              sx={{ fontSize: "30px", fontWeight: "700", color: "#333333" }}
            >
              Hobbies and Interestes
            </Typography>
          </Box>
          <Box
            style={{
              padding: 10,
              backgroundColor: "whitesmoke",
              maxWidth: "400px", // Adjust the maximum width as needed
              margin: "0 auto", // Center align the content
            }}
          >
            <Typography
              variant="body1"
              textAlign="left"
              sx={{ fontSize: "15px" }}
            >
              Techie with an hobby of building and optimizing computer systems,
              crafting high-performance PCs tailored to perfection
            </Typography>
          </Box>
          <Box
            style={{
              padding: 10,
              textAlign: "left",
              maxWidth: "400px", // Adjust the maximum width as needed
              margin: "0 auto", // Center align the content,
            }}
          >
            <Typography
              variant="body1"
              sx={{ marginY: "8px", fontSize: "14px" }}
            >
              I drink a lot of tea <br />
              I&apos;m into interior design
              <br />
              Gardening is my zen time <br />I love to cook (and eat) <br />
              I&apos;m a bit of a clean freak <br />I want to live on Pandora{" "}
              <br />
              I&apos;m slightly addicted to Twitter
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider variant="middle" />
    </div>
  );
}

export default About1;
