import { Box, Grid, Typography } from "@mui/material";
import "../../styles/FontStyles.css";

const Game03 = () => {
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
            className="title-02"
            sx={{ fontSize: "25px", fontWeight: "700", color: "#333333" }}
            marginY={2.5}
          >
            Game Base Architecture
          </Typography>
          <Typography
            className="regular-font"
            sx={{ fontSize: "18px", color: "#333333" }}
          >
            The Ultimate Gaming Hub Powered by React, TypeScript, and Chakra UI
            with Axios API Integration
          </Typography>
          <Typography
            className="title-03"
            sx={{ color: "#757575" }}
            marginY={2}
          >
            At Game Base, I take gaming seriously, and I&apos;ve crafted a
            top-tier gaming hub with the latest technologies to enhance your
            gaming experience. This platform has been meticulously designed and
            developed using React, TypeScript, and Chakra UI, three powerful
            tools that bring together aesthetics, functionality, and
            performance.
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default Game03;
