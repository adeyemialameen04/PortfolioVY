import "./home.css";
import Header from "../Components/Header/Header";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";

const Home = () => {
  return (
    <main className="main__container">
      <Header />
      <About />
      <Projects />
      <Skills />
    </main>
  );
};

export default Home;
