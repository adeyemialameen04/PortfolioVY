import { projects } from "../../data/projects";
import Project from "../Project/Project";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects--section">
      <div className="container">
        <h5 className="section-header">Projects</h5>
      </div>
      <div className="container projects__container">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
