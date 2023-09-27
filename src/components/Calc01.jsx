import { Box, Divider, Grid, Typography } from "@mui/material";
import tennycalc from "./../assets/tennycalc.png";

const Calc01 = () => {
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
              online calculator for quick calculations
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
              href="https://tenny-calc.vercel.app/"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="body1" sx={{ fontSize: "15px" }}>
                Tenny-calc
              </Typography>
            </a>
            <Typography variant="body1" sx={{ fontSize: "15px" }}>
              August 2023
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
              After griding resources for few months i decided to apply all
              those thing so i have planned to do a project, A Online
              Calculator. This is a calculator made up of handmade codings which
              means there is no library imported in it. <br />
              <br />
              Let&apos;s deep dive !
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} marginTop={4}>
          <Box style={{ padding: 16, textAlign: "center" }}>
            <a
              href="https://tenny-calc.vercel.app/"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tennycalc}
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
    </div>
  );
};

export default Calc01;
