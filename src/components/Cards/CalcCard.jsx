import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import tennycalc from "../../assets/tennycalc.png";
import { Link } from "react-router-dom";

const CalcCard = () => {
  return (
    <Link to="/portfolio/tenny-calc" style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={tennycalc}
            alt="calc logo"
            sx={{ width: "100%", height: "auto" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tenny - Calc
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An Online Calculator
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CalcCard;
