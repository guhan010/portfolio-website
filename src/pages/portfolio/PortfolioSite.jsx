import { useEffect } from "react";
import Port01 from "../../components/Portfolio/port01";

const PortfolioSite = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Port01 />
    </>
  );
};

export default PortfolioSite;
