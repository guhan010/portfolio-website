// Use lowercase "c" in the import statement
import Calcimage from "../../components/Calc/Calcimage";
import Calc02 from "../../components/Calc/Calc02";
import Calc03 from "../../components/Calc/Calc03";
import Calcimage02 from "../../components/Calc/Calcimage02";
import Calc04 from "../../components/Calc/Calc04";
import Calc05 from "../../components/Calc/Calc05";
import Calc01 from "../../components/Calc/Calc01";
import Calcimg03 from "../../components/Calc/Calcimg03";
import Calc06 from "../../components/Calc/Calc06";
import Calcimg04 from "../../components/Calc/Calcimg04";
import { Divider } from "@mui/material";
import { useEffect } from "react";

const TennyCalc = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Calc01 />
      <Calc02 />
      <Calcimage />
      <Calc03 />
      <Calcimage02 />
      <Calc04 />
      <Calc05 />
      <Calcimg04 />
      <Calc06 />
      <Calcimg03 />
      <Divider variant="middle" sx={{ marginTop: "50px" }} />
    </>
  );
};

export default TennyCalc;
