import "./skill.css";

const Skill = ({ skill }) => {
  const { Icon, name } = skill;

  return (
    <article className="skill">
      <Icon className="icon" />
      <p>{name}</p>
    </article>
  );
};

export default Skill;
