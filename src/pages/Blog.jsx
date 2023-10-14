import { Typography } from "@mui/material";
import "../styles/FontStyles.css";

const Blog = () => {
  return (
    <div className="animation">
      <Typography
        variant="h1"
        className="page-title"
        sx={{
          fontSize: "95px",
          fontWeight: "500",
          color: "#333333",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        hold on
      </Typography>
      <Typography
        variant="h3"
        className="regular-font"
        sx={{
          fontSize: "95px",
          fontWeight: "500",
          color: "#333333",
          textAlign: "center",
        }}
      >
        darling
      </Typography>
      <Typography
        variant="h3"
        className="title-02"
        sx={{
          fontSize: "50px",
          fontWeight: "500",
          color: "#333333",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        this page is under construction
      </Typography>
    </div>
  );
};

export default Blog;
