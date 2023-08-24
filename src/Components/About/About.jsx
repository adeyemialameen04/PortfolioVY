import "./about.css";

const About = () => {
  return (
    <section className="about--section">
      <div className="container about__container">
        <div className="profile-img-container">
          <img
            className="profile-img"
            src="../../../public/static/assets/dummy-img.jpg"
            alt=""
          />
          <img
            className="fununderline"
            src="../../../public/static/assets/fununderline.svg"
            alt=""
          />
        </div>
        <div className="about-body">
          <h2>ABOUT ME</h2>
          <p>
            Hey there, I'm Yazdun, a web developer with a passion for building
            sleek and modern web applications using React and Next. I love
            working on the front-end of websites and have a sharp eye for UI/UX
            design. If you're looking for someone to help bring your web
            projects to life, you've come to the right place!
          </p>
          <p>
            When I'm not coding away, you can find me throwing punches and kicks
            in the boxing ring or practicing martial arts. I believe that
            physical fitness and mental focus are key to staying sharp and
            focused in all aspects of life, including programming. So, whether
            you need help with your next web project or just want to chat about
            web development or martial arts, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
