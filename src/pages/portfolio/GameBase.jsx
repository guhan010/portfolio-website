import { useEffect } from "react";
import Game01 from "../../components/Game/Game01";
import Game02 from "../../components/Game/Game02";
import GameImage from "../../components/Game/GameImage";
import Game03 from "../../components/Game/Game03";
import Game04 from "../../components/Game/Game04";
import Game05 from "../../components/Game/Game05";
import Game06 from "../../components/Game/Game06";
import GameImage02 from "../../components/Game/GameImage02";
import Game07 from "../../components/Game/Game07";
import GameImage03 from "../../components/Game/GameImage03";
import GameImage04 from "../../components/Game/GameImage04";
import Game08 from "../../components/Game/Game08";
import GameImage05 from "../../components/Game/GameImage05";
import { Divider } from "@mui/material";
import GameImage07 from "../../components/Game/GameImage07";
import Game09 from "../../components/Game/Game09";
import GameImage08 from "../../components/Game/GameImage08";

const GameBase = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Game01 />
      <Game02 />
      <GameImage />
      <Game03 />
      <Game04 />
      <Game05 />
      <Game06 />
      <GameImage02 />
      <Game07 />
      <GameImage03 />
      <GameImage04 />
      <Game08 />
      <GameImage05 />
      <Divider variant="middle" />
      <GameImage07 />
      <Game09 />
      <GameImage08 />
    </>
  );
};

export default GameBase;
