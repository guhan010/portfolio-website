import { Divider } from "@mui/material";
import Calc01 from "../../components/calc01"; // Use lowercase "c" in the import statement
import Calcimage from "../../components/calcimage";

const TennyCalc = () => {
  return (
    <>
      <Calc01 />
      <Divider variant="middle" />
      <Calcimage />
    </>
  );
};

export default TennyCalc;
