import skeleton from "../../assets/skeleton.png";

const GameImage05 = () => {
  return (
    <div className="responsive-image-container" style={{ margin: "40px 30px" }}>
      <img
        className="responsive-image"
        src={skeleton}
        alt="Skeleton-Loading Image"
      />
    </div>
  );
};

export default GameImage05;
