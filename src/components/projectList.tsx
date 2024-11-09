import { Article } from './article';
import { Project } from './project';
import nonogram from '../assets/thumbnails/nonogram.png';
import aquarium from '../assets/thumbnails/aquarium.png';
import keighly from '../assets/thumbnails/keighly.png';

export const Projects = () => {
  const aquariumAPIDescription = [
    'API project for storing aquariums, the plants and livestock within them, aquarium products, and keeping track of maintenance using DynamoDB.',
    'API written in TypeScript using the Express NodeJS framework; API testing done in Insomnium.'
  ];
  const aquariumDescription = [
    'Frontend project built in Vue JS 2 for to provide UI for communicating with the Aquarium Management API.'
  ];
  const nonogramDescription = [
    'A website that allows users to create, share, and solve Nonogram puzzles.',
    'Written in React and TypeScript Unit Testing suite developed in TypeScript using the React Testing Library.'
  ];
  const nonogramAPIDescription = [
    'Companion API project for the front-end React TypeScript Nonogram project.',
    'Written in TypeScript using the Express framework; API testing done in Insomnium.'
  ];
  const keighlyCADescription = [
    'This small portfolio website, built to feature & provide additional context for my projects.'
  ];

  return (
    <Article
      title={'Projects'}
      className={'projects'}
      content={
        <>
          <Project
            title={'Aquarium Management API'}
            link={'https://github.com/KeighlyIsCoding/aquarium-management-api'}
            date={'Jan 2024 - Present'}
            skills={['TypeScript', 'Node JS', 'Express', 'DynamoDB', 'AWS Lambda']}
            description={aquariumAPIDescription}
            image={<img src={aquarium} />}
          />
          <Project
            title={'Aquarium Management'}
            link={'https://github.com/KeighlyIsCoding/aquarium-management'}
            date={'Jan 2024 - Present'}
            skills={['JavaScript', 'Vue JS 2', 'HTML/CSS', 'API Communication']}
            description={aquariumDescription}
            image={<img src={aquarium} />}
          />
          <Project
            title={'Nonogram'}
            link={'https://github.com/KeighlyIsCoding/nonogram'}
            date={'Aug 2023 - Present'}
            skills={['TypeScript', 'React', 'HTML/CSS']}
            description={nonogramDescription}
            image={<img src={nonogram} />}
          />
          <Project
            title={'Nonogram API'}
            link={'https://github.com/KeighlyIsCoding/nonogram-api'}
            date={'Nov 2023 - Present'}
            skills={['TypeScript', 'Node JS', 'Express']}
            description={nonogramAPIDescription}
            image={<img src={nonogram} />}
          />
          <Project
            title={'Keighly.ca'}
            link={'https://github.com/KeighlyIsCoding/keighly-ca'}
            date={'Dec 2023'}
            skills={['TypeScript', 'React', 'HTML/CSS', 'Vite', 'ESLint']}
            description={keighlyCADescription}
            image={<img src={keighly} />}
          />
        </>
      }
    />
  );
}