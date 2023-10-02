import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import GameBaselogo from "../../assets/GameBaselogo.png";
import { Link } from "react-router-dom";

const GameCard = () => {
  return (
    <Link to="/portfolio/game-base" style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={GameBaselogo}
            alt="calc logo"
            sx={{ width: "100%", height: "100%" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Game Base
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A Game Database
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default GameCard;
