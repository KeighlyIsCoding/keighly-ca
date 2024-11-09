interface ProjectProps {
  title: string,
  link: string,
  date: string,
  skills: string[],
  description: string[],
  image: React.ReactNode
}

export const Project = ({ title, link, date, skills, description, image }: ProjectProps) => {
  const skillList = skills.join(', ');
  return (
    <>
      <article className='project'>
        <div className='thumb'>
          <a href={link} target='_blank'>
            <div className='overlay'>
              <div className='thumb-txt'>{title}</div>
            </div>
            {image}
          </a>
        </div>
        <div className='info-container'>
          <div>
            <h3><a href={link} target='_blank'>{title}</a></h3>
          </div>
          <div className='date-skills-container'>
            <p>{date}</p>
            <p>{skillList}</p>
          </div>
        </div>
        <div className='desc-container'>
          {description.map((item, i) =>
            <p key={`description-${i}`}>{item}</p>
          )}
        </div>
      </article>
    </>
  );
}