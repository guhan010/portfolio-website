import { Box, Divider, Grid, Typography } from "@mui/material";
import GameBaselogo from "../../assets/GameBaselogo.png";

const Game01 = () => {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid container spacing={2} justifyContent="center" marginY="30px">
        <Grid item xs={12} sm={6} md={6} marginTop={3}>
          <Box
            style={{
              padding: "10px",
              backgroundColor: "whitesmoke",
              textAlign: "left",
              maxWidth: "400px", // Adjust the maximum width as needed
              margin: "0 auto", // Center align the content
            }}
          >
            <Typography
              variant="h3"
              className="MuiTypography--h1 MuiTypography-responsiveFontSm"
              sx={{ fontSize: "30px", fontWeight: "500", color: "#333333" }}
            >
              online database for video games
            </Typography>
            <Divider
              variant="fullwidth"
              sx={{
                marginTop: "10px",
                borderWidth: "1.4px",
                borderColor: "rgba(0, 0, 0, 0.4)",
              }}
            />
          </Box>
          <Box
            style={{
              padding: 10,
              backgroundColor: "whitesmoke",
              textAlign: "left",
              maxWidth: "400px", // Adjust the maximum width as needed
              margin: "-10px auto",
            }}
            display="flex"
            justifyContent="space-between"
          >
            <a
              href="https://game-base-kappa.vercel.app/"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="body1" sx={{ fontSize: "15px" }}>
                Game Base
              </Typography>
            </a>
            <Typography
              variant="body1"
              sx={{ color: "GrayText", fontSize: "15px" }}
            >
              September 2023
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
              sx={{ marginY: "8px", color: "GrayText", fontSize: "15px" }}
            >
              Game Base is an efficient online database powered by React and
              Chakra UI for seamless storage and retrieval of gaming data
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginY: "8px",
                marginTop: "21px",
                color: "darkslategray",
                fontSize: "15px",
              }}
            >
              Swipe down to see the detailed information!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} marginTop={4}>
          <Box style={{ padding: 16, textAlign: "center" }}>
            <a
              href="https://game-base-kappa.vercel.app/"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GameBaselogo}
                alt="Profile Picture"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                }}
              />
            </a>
          </Box>
        </Grid>
      </Grid>
      <Divider variant="middle" />
    </div>
  );
};

export default Game01;
