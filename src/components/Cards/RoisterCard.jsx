import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import roisterlogo from "../../assets/roisterlogo.jpg";

const RoisterCard = () => {
  return (
    <Link to="/portfolio/roister-media" style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345, borderRadius: "8px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={roisterlogo}
            alt="Portfolio Website"
            sx={{ width: "100%", height: "100%", borderRadius: "8px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Roister Media
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Social Networking Platform
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default RoisterCard;
