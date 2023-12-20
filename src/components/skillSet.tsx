import { Article } from './article';
import { Skill } from './skill';

export const SkillSet = () => {
  const bestAt = ['HTML/CSS', 'TypeScript', 'JavaScript'];
  const learning = ['React', 'Unit Testing', 'Node JS', 'AWS'];
  const workExperience = ['JavaScript & jQuery', 'HTML/CSS', 'C#', 'Git'];
  const academicFocus = ['Object-Oriented Programming', 'C# & Java', 'RESTful APIs', 'Relational SQL Databases'];

  return (
    <Article
      title={'Skill Set'}
      className={'skills'}
      content={
        <section>
          <Skill
            title={'Best At'}
            skills={bestAt}
          />
          <Skill
            title={'Learning'}
            skills={learning}
          />
          <Skill
            title={'Work Experience'}
            skills={workExperience}
          />
          <Skill
            title={'Academic Focus'}
            skills={academicFocus}
          />
        </section>
      }
    />
  );
}