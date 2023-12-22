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
  const imgSrc = `assets/thumbnails/${image}.png`;
  console.log(imgSrc)
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
          <h3><a href={link} target='_blank'>{title}</a></h3>
          <div className='date-skills-container'>
            <p>{date}</p>
            <p>{skillList}</p>
          </div>
        </div>
        <div className='desc-container'>
          {description.map((item) =>
            <p>{item}</p>
          )}
        </div>
      </article>
    </>
  );
}