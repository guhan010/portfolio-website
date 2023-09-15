import { Box, Divider, Grid, Typography } from "@mui/material";
import about from "../assets/about.webp";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const About = () => {
  return (
    <>
      <Grid display="flex" justifyContent="space-around" margin="60px 110px">
        <Grid2>
          <Box>
            <Typography
              variant="h1"
              sx={{ fontSize: "90px", fontWeight: "700", color: "#333333" }}
            >
              about..
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ marginY: "20px" }}>
              Hi! I&apos;m a Full Stack Developer based in India
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ width: "370px", height: "auto", marginY: "20px" }}
            >
              I channel my meticulousness, passion for creation, and tireless
              commitment towards a purpose-driven work ethic. This fuels my
              eagerness to create a significant impact within a thriving
              organization, ultimately contributing to the transformation of our
              world
            </Typography>
          </Box>
        </Grid2>
        <img
          src={about}
          alt="Profile Picture"
          style={{ width: "280px", height: "auto" }}
        ></img>
      </Grid>
      <Divider variant="middle" />
      <Grid>
        <Grid2>
          <Box sx={{ textAlign: "center", marginTop: "50px" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#333333",
                fontWeight: "700",
                fontSize: "30px",
                padding: "10px",
              }}
            >
              Technologies I&apos;ve Worked with
            </Typography>
          </Box>
          <Grid display="flex" justifyContent="space-around" margin="30px 80px">
            <Box
              sx={{
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ color: "#333333",
                fontWeight: "700",
                fontSize: "20px",bgcolor:'#BFC9CA',justifyContent: "center", textAlign: "center" }}
              >
                frontend
              </Typography>
              
            </Box>
            <Box sx={{ width: "30%" }}>
              <Typography
                sx={{ color: "#333333",
                fontWeight: "700",
                fontSize: "20px",bgcolor:'#BFC9CA', justifyContent: "center", textAlign: "center" }}
              >
                backend
              </Typography>
            </Box>
            <Box sx={{ width: "30%" }}>
              <Typography
                sx={{ color: "#333333",
                fontWeight: "700",
                fontSize: "20px",bgcolor:'#BFC9CA', justifyContent: "center", textAlign: "center" }}
              >
                devops
              </Typography>
            </Box>
          </Grid>
        </Grid2>
      </Grid>
    </>
  );
};

export default About;
