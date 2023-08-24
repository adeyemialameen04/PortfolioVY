import "./header.css";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="job-title-container">
          <h1>Frontend Developer</h1>
        </div>
        <p className="bio">
          I’m a front-end developer specializing in the ReactJS ecosystem, with
          a keen eye for detail and a passion for creating intuitive and
          efficient user interfaces.
        </p>
        <button className="center-btn cv-btn">
          <AiOutlineCloudDownload
            style={{
              fontSize: "1.3rem",
            }}
          />{" "}
          Download my CV
        </button>
      </div>
    </header>
  );
};

export default Header;
