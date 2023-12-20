interface ProjectProps {
  title: string,
  date: string,
  skills: string[],
  description: string,
  image: string
}

export const Project = ({ title, date, skills, description, image }: ProjectProps) => {
  const link = '';
  const skillList = skills.join(', ');
  return (
    <>
      <article>
        <div className='thumb'>
          <a href={link}>
            <div className='overlay'>
              <div className='thumb-txt'>{title}</div>
            </div>
            <img src={`../assets/${image}.png`} alt={`${title} thumbnail image`} />
          </a>
        </div>
        <div className='info-container'>
          <h3><a href={link}>{title}</a></h3>
          <div>
            <h4>{date}</h4>
            <h4>{skillList}</h4>
          </div>
          <p>{description}</p>
        </div>
      </article>
    </>
  );
}