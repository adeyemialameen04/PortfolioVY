import "./project.css";

const Project = ({ project, spanGRid }) => {
  return (
    <article className="project">
      <div className="top">
        <h1>{project.name}</h1>
        <div className="links">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </div>
      <div className="desc">{project.desc}</div>
      <div className="tech-stack">
        <h5>Stacks Used:</h5>
        <div>
          {project.stacksUsed.map((stack) => {
            return <small>{stack}</small>;
          })}
        </div>
      </div>
    </article>
  );
};

export default Project;
