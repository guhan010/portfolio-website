import { Box, Divider, Grid, Typography } from "@mui/material";

const Calc04 = () => {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        item
        xs={12}
        sm={12}
        md={12}
      >
        <Box
          style={{
            backgroundColor: "whitesmoke",
            textAlign: "left",
            maxWidth: "600px",
          }}
          marginLeft={3.2}
          marginRight={1}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "25px", fontWeight: "700", color: "#333333" }}
            marginY={2.5}
          >
            Built Schema
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "GrayText" }}>
            I opted for a hands-on approach by utilizing React hooks to perform
            calculations manually. Rather than relying on external libraries or
            built-in browser functions, I&apos;ve harnessed the power of React
            hooks to handle calculations within this application.
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default Calc04;
