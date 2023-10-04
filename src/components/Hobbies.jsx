import { Box, Divider, Grid, Typography } from "@mui/material";
import hobbies from "../assets/hobbies.jpg";

function Hobbies() {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid container spacing={2} justifyContent="space-evenly" marginY="50px">
        <Grid item xs={12} sm={6} md={4}>
          <Box style={{ padding: 16, textAlign: "center" }}>
            <img
              src={hobbies}
              alt="Profile Picture"
              style={{ width: "120%", height: "auto", borderRadius: "8px" }}
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
              margin: "0 100px", // Center align the content
            }}
          >
            <Typography
              variant="h4"
              className="regular-font"
              sx={{ fontSize: "40px", textAlign: "left", color: "#333333" }}
            >
              Self Insights
            </Typography>
          </Box>
          <Box
            style={{
              padding: 10,
              textAlign: "left",
              maxWidth: "400px", // Adjust the maximum width as needed
              margin: "0 100px", // Center align the content,
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              <ul className="hobbies">
                <li style={{ marginBottom: "10px" }}>
                  Tech&apos;s my thing—I&apos;m a PC enthusiast and techie
                </li>
                <li style={{ marginBottom: "10px" }}>
                  I enjoy coffee more frequently
                </li>
                <li style={{ marginBottom: "10px" }}>
                  Exercising is my zen time
                </li>
                <li style={{ marginBottom: "10px" }}>
                  I&apos;m passionate about exploring the wonders of the ocean
                </li>
                <li style={{ marginBottom: "10px" }}>
                  Cleanliness is a part of my daily routine; it&apos;s like
                  second natur
                </li>
              </ul>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider variant="middle" />
    </div>
  );
}

export default Hobbies;
