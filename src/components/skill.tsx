interface SkillProps {
  title: string,
  skills: string[]
}

export const Skill = ({ title, skills }: SkillProps) => {
  return (
    <div>
      <h3>{title}</h3>
      {skills.map((item) =>
        <p key={`skill-${item}`}>{item}</p>
      )}
    </div>
  );
}