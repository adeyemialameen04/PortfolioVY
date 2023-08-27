import { projects } from "../../data/projects";
import Project from "../Project/Project";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects--section">
      <div className="container projects__container">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
