import "./home.css";
import Header from "../Components/Header/Header";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";

const Home = () => {
  return (
    <main className="main__container">
      <Header />
      <About />
      <Projects />
    </main>
  );
};

export default Home;
