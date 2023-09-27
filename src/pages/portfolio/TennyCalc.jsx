import { Divider } from "@mui/material";
import Calc01 from "../../components/calc01"; // Use lowercase "c" in the import statement
import Calcimage from "../../components/calcimage";
import Calc02 from "../../components/Calc02";
import Calc03 from "../../components/Calc03";
import Calcimage02 from "../../components/Calcimage02";
import Calc04 from "../../components/Calc04";
import Calc05 from "../../components/Calc05";

const TennyCalc = () => {
  return (
    <>
      <Calc01 />
      <Divider variant="middle" />
      <Calc02 />
      <Calcimage />
      <Calc03 />
      <Calcimage02 />
      <Calc04 />
      <Calc05 />
    </>
  );
};

export default TennyCalc;
