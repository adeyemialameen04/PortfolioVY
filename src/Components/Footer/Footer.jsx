import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <p>
          Developed by{" "}
          <a
            href="https://alameenadeyemi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            @tech_shorty
          </a>
        </p>
        <p>{year} &#169; all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
