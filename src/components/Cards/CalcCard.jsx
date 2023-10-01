import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import tennycalc from "../../assets/tennycalc.png";

const CalcCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={tennycalc}
          alt="calc logo"
          sx={{ width: "100%", height: "100%" }}
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
  );
};

export default CalcCard;
