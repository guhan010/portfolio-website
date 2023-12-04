import { useEffect } from "react";
import Roister01 from "../../components/roister/Roister01";

const RoisterMedia = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Roister01 />
    </>
  );
};

export default RoisterMedia;
