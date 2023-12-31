import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Portfoliologo from "../../assets/Portfoliologo.png";
import { Link } from "react-router-dom";
const PortfolioCard = () => {
  return (
    <Link to="/portfolio/portfolio-site" style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={Portfoliologo}
            alt="Portfolio Website"
            sx={{ width: "100%", height: "100%" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Portfolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              My Portfolio Website
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default PortfolioCard;
