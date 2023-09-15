import { Box, Divider, Typography } from "@mui/material";
import name from "../assets/name.webp";

const Home = () => {
  return (
    <div className="home">
      <img
        src={name}
        alt="Hi! I'm Guhan Eswaran. I'm a Full Stack Developer"
        style={{ width: "1080px", height: "auto" }}
      />
      <Box sx={{ justifyContent: "center", alignItems: "center" }}>
        <Divider
          component="div"
          role="presentation"
          sx={{ margin: "70px 0 35px 0" }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#757575",
              fontSize: "14px",
            }}
          >
            <pre> &nbsp; some of my latest works &nbsp; </pre>
          </Typography>
        </Divider>
      </Box>
    </div>
  );
};

export default Home;
