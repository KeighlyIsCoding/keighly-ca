import React from "react";

interface SkillProps {
  title: string,
  skills: string[]
}

export const Skill = ({ title, skills }: SkillProps) => {
  return (
    <div>
      <h3>{title}</h3>
      {skills.map((item) =>
        <p>{item}</p>
      )}
    </div>
  );
}