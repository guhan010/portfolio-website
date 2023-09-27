import calculator from "./../assets/calculator.png";

const calcimage = () => {
  return (
    <div className="responsive-image-container" style={{ margin: "40px 30px" }}>
      <img
        className="responsive-image"
        src={calculator}
        alt="Calculator Image"
      />
    </div>
  );
};

export default calcimage;
