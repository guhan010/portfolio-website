import { Box, Grid, Typography } from "@mui/material";
import home from "../assets/home.png";

const Home = () => {
  return (
    <div style={{ flexGrow: 1, padding: 16 }} className="home">
      <Grid container spacing={2} justifyContent="space-evenly" marginY="30px">
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{
              padding: 10,
              backgroundColor: "whitesmoke",
              textAlign: "left",
              maxWidth: "500px",
            }}
          >
            <Typography
              variant="body1"
              className="page-title"
              sx={{
                fontSize: "40px",
                color: "#262626",
                fontWeight: 600,
                marginTop: "30px",
              }}
            >
              hello. I&apos;m
            </Typography>
            <Typography
              variant="body2"
              className="page-title"
              sx={{ fontSize: "60px", color: "#262626", fontWeight: 600 }}
            >
              Guhan Eswaran
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
              className="title-02"
              sx={{
                marginY: "-10px",
                color: "#333333",
                fontSize: "25px",
                fontWeight: 600,
              }}
            >
              I craft digital experiences on the web, bringing ideas to life
              through code.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box style={{ padding: 10, textAlign: "center" }}>
            <img
              src={home}
              alt="Profile Picture"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                marginTop: "-10px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
