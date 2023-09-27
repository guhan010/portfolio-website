import calcvercel from "../../assets/calcvercel.png";

const Calcimg03 = () => {
  return (
    <div className="responsive-image-container" style={{ margin: "40px 0" }}>
      <img
        className="responsive-image"
        src={calcvercel}
        alt="Vercel Deployment Photo"
        style={{ borderRadius: "15px", width: "70%", marginBottom: "30px" }}
      />
    </div>
  );
};

export default Calcimg03;
