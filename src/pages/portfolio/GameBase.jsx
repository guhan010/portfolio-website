import { useEffect } from "react";
import Game01 from "../../components/Game/Game01";

const GameBase = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return <Game01 />;
};

export default GameBase;
