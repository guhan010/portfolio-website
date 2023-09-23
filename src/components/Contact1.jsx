import { Box, Grid, Typography } from "@mui/material";
import about from "../assets/about.webp";

const Contact1 = () => {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid container spacing={2} justifyContent="center" marginY="40px">
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{
              padding: "10px",
              backgroundColor: "#d7d7d7",
              textAlign: "left",
              maxWidth: "400px", // Adjust the maximum width as needed
              margin: "0 auto", // Center align the content
            }}
          >
            <Typography
              variant="h1"
              className="MuiTypography--h1 MuiTypography-responsiveFontSm"
              sx={{ fontSize: "80px", fontWeight: "700", color: "#333333" }}
            >
              contact..
            </Typography>
          </Box>
          <Box
            style={{
              padding: 10,
              backgroundColor: "#d7d7d7",
              textAlign: "left",
              maxWidth: "400px", // Adjust the maximum width as needed
              margin: "0 auto", // Center align the content
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "15px" }}>
              Get in touch with me via social media
              <br /> or email.
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
              sx={{ marginY: "8px", fontSize: "15px" }}
            >
              I channel my meticulousness, passion for creation, and tireless
              commitment towards a purpose-driven work ethic. This fuels my
              eagerness to create a significant impact within a thriving
              organization, ultimately contributing to the transformation of our
              world.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box style={{ padding: 16, textAlign: "center" }}>
            <img
              src={about}
              alt="Profile Picture"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact1;
