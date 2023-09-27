import { Box, Divider, Grid, Typography } from "@mui/material";

const Calc06 = () => {
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
            Deployment
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: "18px", fontWeight: "500", color: "#333333" }}
            marginY={2.5}
          >
            Github Respository
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "GrayText" }}>
            <ul className="spaced-list">
              <li>
                <strong>Version Control:</strong>I used Git on GitHub to manage
                code versions, branches, and collaborations.
              </li>
              <li>
                <strong>Structure</strong> Code was organized into modules, and
                detailed documentation was maintained.
              </li>
            </ul>
          </Typography>
          <Divider
            variant="middle"
            sx={{
              marginTop: "30px",
              width: "60%",
            }}
          />
          <Typography
            variant="h4"
            sx={{ fontSize: "18px", fontWeight: "500", color: "#333333" }}
            marginY={2.5}
          >
            Vercel Deployment
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "GrayText" }}>
            <ul className="spaced-list">
              <li>
                <strong>Seamless Integration</strong> Vercel integrated with
                GitHub for automated deployments.
              </li>
              <li>
                <strong>Configuration</strong> Deployment settings were tailored
                to match project requirements.
              </li>
              <li>
                <strong>Continous Updates</strong> Code changes triggered
                automatic updates for users.
              </li>
              <li>
                <strong>Scalability</strong> Vercel ensured smooth performance,
                even during peak usage.
              </li>
            </ul>
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default Calc06;
