import { Box, Divider, Grid, Typography } from "@mui/material";

const Game04 = () => {
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
            variant="h3"
            className="title-01"
            sx={{ fontSize: "22px", fontWeight: "500", color: "#333333" }}
            marginY={1}
          >
            Here&apos;s a closer look at what makes Game Base stand out:
          </Typography>
          <Typography
            className="title-03"
            sx={{ fontSize: "15px", color: "#757575" }}
          >
            <ul className="spaced-list">
              <li>
                <strong>React-Powered Dynamism:</strong> I&apos;ve harnessed the
                capabilities of React to create a dynamic and responsive user
                interface that ensures smooth navigation and an engaging user
                experience. Enjoy a seamless journey as you explore the world of
                gaming.
              </li>
              <li>
                <strong>TypeScript Precision: </strong> TypeScript, a statically
                typed superset of JavaScript, ensures code reliability and helps
                us maintain a structured and error-free codebase. It empowers us
                to deliver a robust and secure platform for gamers.
              </li>
              <li>
                <strong>Chakra UI Elegance:</strong> Chakra UI, a modular and
                accessible component library for React, adds an elegant touch to
                our platform&apos;s design. It not only looks great but also
                prioritizes user accessibility, making Game Base user-friendly
                for everyone.
              </li>
              <li>
                <strong>Axios API Integration:</strong> I&apos;ve harnessed the
                power of Axios, a popular HTTP client for JavaScript, to
                seamlessly fetch content from various sources. This integration
                enables us to provide you with up-to-date and comprehensive
                information about your favorite games.
              </li>
            </ul>
          </Typography>
        </Box>
      </Grid>
      <Divider variant="middle" sx={{ marginTop: "30px" }} />
    </div>
  );
};

export default Game04;
