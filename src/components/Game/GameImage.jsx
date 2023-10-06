import { Divider } from "@mui/material";
import gamebase from "../../assets/gamebase.png";

const GameImage = () => {
  return (
    <div className="responsive-image-container" style={{ margin: "40px 30px" }}>
      <img className="responsive-image" src={gamebase} alt="Game-Base Image" />
      <Divider variant="middle" />
    </div>
  );
};

export default GameImage;
