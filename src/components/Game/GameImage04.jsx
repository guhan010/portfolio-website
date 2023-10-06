import genresort from "../../assets/genresort.png";

const GameImage04 = () => {
  return (
    <div className="responsive-image-container" style={{ margin: "40px 30px" }}>
      <img
        className="responsive-image"
        src={genresort}
        alt="Genre sorting Image"
      />
    </div>
  );
};

export default GameImage04;
