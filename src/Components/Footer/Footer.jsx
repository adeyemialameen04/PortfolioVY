import { socials } from "../../data/socials";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <p>
          Designed and Developed by{" "}
          <a
            href="https://alameenadeyemi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            @tech_savvy
          </a>
        </p>
        <div className="socials">
          {socials.map((social) => {
            const { Icon, url } = social;
            return (
              <a href={url} target="_blank">
                <Icon />
              </a>
            );
          })}
        </div>
        <p>{year} &#169; all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
