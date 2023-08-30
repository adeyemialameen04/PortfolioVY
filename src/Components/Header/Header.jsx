import "./header.css";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Header = () => {
  return (
    // <>
    <header className="header">
      <a className="container header__container">
        <div className="job-title-container">
          <h1>
            Frontend{" "}
            <span>
              Developer
              <img
                className="curved-underline"
                src="/static/assets/curved-underline.svg"
                alt=""
              />
              <img
                className="three-lines"
                src="/static/assets/three-lines.svg"
                alt=""
              />
            </span>
          </h1>
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
        <div className="arr-down-container">
          <img src="/static/assets/arr-down.svg" alt="" />
        </div>
      </a>
    </header>
    // </>
  );
};

export default Header;
