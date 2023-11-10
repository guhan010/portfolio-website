import Graph from "../components/Graph";
import TimeLine from "../components/TimeLine";
import "../styles/FontStyles.css";

const TimeLinePage = () => {
  return (
    <>
      <Graph />
      <h1
        className="page-title"
        style={{
          textAlign: "center",
          color: "#333333",
          marginTop: "20px",
          marginBottom: "15px",
          fontSize: "50px",
        }}
      >
        Temporal Overview
      </h1>
      <TimeLine />
    </>
  );
};

export default TimeLinePage;
