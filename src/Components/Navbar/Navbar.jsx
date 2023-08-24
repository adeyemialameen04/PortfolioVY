import { useContext, useEffect, useRef, useState } from "react";
import "./navbar.css";
import { AiFillLinkedin } from "react-icons/ai";
import { BsCloudMoon, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../../App";

const Navbar = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".nav");

    const handleScroll = () => {
      const scrolled = window.scrollY > nav.offsetHeight;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("isScrolled", isScrolled);
  }, [isScrolled]);

  return (
    <nav className={`nav ${isScrolled && "nav-shadow"}`}>
      <div className="container nav__container">
        <div className="logo">Al ameen</div>
        <div className="nav--links">
          <button className="center-btn connect-btn">
            <AiFillLinkedin />
            Connect
          </button>
          <button onClick={handleToggleTheme} className="mode-btn center-btn ">
            {theme === "light" ? <BsCloudMoon /> : <BsFillSunFill />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
