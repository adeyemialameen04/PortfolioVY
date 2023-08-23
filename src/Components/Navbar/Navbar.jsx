import "./navbar.css";
import { AiFillLinkedin } from "react-icons/ai";
import { BsCloudMoon } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container nav__container">
        <div className="logo">Al ameen</div>
        <div className="nav--links">
          <button className="center-btn connect-btn">
            <AiFillLinkedin />
            Connect
          </button>
          <button className="mode-btn center-btn ">
            <BsCloudMoon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
