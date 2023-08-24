import "./about.css";

const About = () => {
  return (
    <section id="about" className="about--section">
      <div className="container about__container">
        <div className="profile-img-container">
          <img
            className="profile-img"
            // src="/static/assets/dummy-img.jpg"
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            className="fununderline"
            src="/static/assets/fununderline.svg"
            alt=""
          />
        </div>
        <div className="about-body">
          <h2>ABOUT ME</h2>
          <p>
            Hey there, I'm Al-ameen, a web developer with a passion for building
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
