import { projects } from "../../data/projects";
import Project from "../Project/Project";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects--section">
      <div className="container projects__container">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
        {/* <Project spanGRid={"grid-col-span-2 "} /> */}
        {/* <Project /> */}
        {/* <Project /> */}
        {/* <Project spanGRid={"grid-row-span-2"} /> */}
        {/* <Project /> */}
        {/* <Project /> */}
        {/* <Project /> */}
        {/* <Project /> */}
        {/* <Project /> */}
        {/* <Project /> */}
        {/* <Project /> */}
      </div>
    </section>
  );
};

export default Projects;
