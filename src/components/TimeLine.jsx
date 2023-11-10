import "../styles/TimeLine.css";
import "../styles/FontStyles.css";
import pc from "../assets/pc.png";
import frontend from "../assets/frontend.png";
import reactlogo from "../assets/reactlogo.png";
import mysql from "../assets/mysql.svg";
import backend from "../assets/backend.png";
import tennycalc from "../assets/tennycalc.png";
import GameBaselogo from "../assets/GameBaselogo.png";
import Portfoliologo from "../assets/Portfoliologo.png";
import roister from "../assets/roister.png";

const TimeLine = () => {
  return (
    <div className="timeline">
      <div className="container left-container">
        <img src={pc} alt="" />
        <div className="text-box">
          <h2 className="page-title">Computer Technicals</h2>
          <small className="title-02">March 2023 - April 2023</small>
          <p className="regular-font">
            Gained expertise in technical fundamentals and intricate networking
            dynamics. Expertly fine-tuned PC builds, strategically testing
            hardware synergy to unleash unparalleled performance
          </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="container right-container">
        <img src={frontend} alt="" />
        <div className="text-box">
          <h2 className="page-title">Frontend Development</h2>
          <small className="title-02">May 2023 - June 2023</small>
          <p className="regular-font">
            Elevated my skill set by conquering the trio of HTML, CSS, and
            JavaScript, sculpting the foundation for immersive and visually
            stunning web creations
          </p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="container left-container">
        <img src={reactlogo} alt="" />
        <div className="text-box">
          <h2 className="page-title">React.Js</h2>
          <small className="title-02">June 2013</small>
          <p className="regular-font">
            Embraced the power of React.js, unlocking the ability to design
            immersive and interactive user interfaces, seamlessly merging
            creativity with cutting-edge web development.
          </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="container right-container">
        <img src={mysql} alt="" />
        <div className="text-box">
          <h2 className="page-title">MySQL</h2>
          <small className="title-02">June 2023</small>
          <p className="regular-font">
            Embarked on a database odyssey, mastering the finesse of MySQL.
            Specialized in architecting powerful data solutions, transforming
            raw information into the lifeblood of dynamic and impactful
            applications
          </p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="container left-container">
        <img src={backend} alt="" />
        <div className="text-box">
          <h2 className="page-title">Backend Development</h2>
          <small className="title-02">July 2023 - August 2023</small>
          <p className="regular-font">
            Stepped into the realm of expertise, mastering Node.js, Express.js,
            and MongoDB. Now equipped to architect robust and scalable
            server-side applications, seamlessly blending innovation and
            operational efficiency
          </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="container right-container">
        <img src={tennycalc} alt="" />
        <div className="text-box">
          <h2 className="page-title">Project - Hooks Based Calculator</h2>
          <small className="title-02">August 2023</small>
          <p className="regular-font">
            Tenny -calc(project name) has designed and built an online
            calculator utilizing React and pure hooks, offering a user-friendly
            interface and a range of mathematical functionalities
          </p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="container left-container">
        <img src={GameBaselogo} alt="" />
        <div className="text-box">
          <h2 className="page-title">Project - Video Game Database</h2>
          <small className="title-02">August 2023 - September 2023</small>
          <p className="regular-font">
            Game - Base is an interactive video game database application
            developed using React.js for robust front-end development, Vite for
            optimized bundling, Axios for efficient data handling, and Chakra UI
            for streamlined design implementation, hosted on Vercel
          </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="container right-container">
        <img src={Portfoliologo} alt="" />
        <div className="text-box">
          <h2 className="page-title">Portfolio Website</h2>
          <small className="title-02">September 2023 - October 2023</small>
          <p className="regular-font">
            A dynamic portfolio website using React.js and Vite, accentuated by
            Material UI for an elegant, responsive layout. Hosted the site on
            Vercel, offering a seamless platform to showcase projects and
            skills. It iss being displayed on my domain
          </p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="container left-container">
        <img src={roister} alt="" />
        <div className="text-box">
          <h2 className="page-title">Project - Social Media Platform</h2>
          <small className="title-02">October 2023</small>
          <p className="regular-font">
            A comprehensive social media platform utilizing React.js for the
            client-side interface, Node.js for server operations, and MongoDB
            for data storage. Deployed the server on Render and the client on
            Vercel, ensuring a seamless, high-performance, and responsive user
            experience
          </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
