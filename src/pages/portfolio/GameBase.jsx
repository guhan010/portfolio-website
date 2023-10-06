import { useEffect } from "react";
import Game01 from "../../components/Game/Game01";
import Game02 from "../../components/Game/Game02";

const GameBase = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Game01 />
      <Game02 />
    </>
  );
};

export default GameBase;
