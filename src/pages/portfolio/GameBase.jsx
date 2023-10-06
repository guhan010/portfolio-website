import { useEffect } from "react";
import Game01 from "../../components/Game/Game01";
import Game02 from "../../components/Game/Game02";
import GameImage from "../../components/Game/GameImage";
import Game03 from "../../components/Game/Game03";
import Game04 from "../../components/Game/Game04";

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
    </>
  );
};

export default GameBase;
