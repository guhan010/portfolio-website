import name from "../assets/name.webp";

const Home = () => {
  return (
    <div className="home">
      <img
        src={name}
        alt="Hi! I'm Guhan Eswaran. I'm a Full Stack Developer"
        style={{ width: "1080px", height: "auto" }}
      />
    </div>
  );
};

export default Home;
