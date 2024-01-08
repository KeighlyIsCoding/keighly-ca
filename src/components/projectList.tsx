import { Article } from './article';
import { Project } from './project';
import nonogram from '../assets/thumbnails/nonogram.png';
import aquarium from '../assets/thumbnails/aquarium.png';

export const Projects = () => {
  const nonogramDescription = [
    'A website that allows users to create, share, and solve Nonogram puzzles.',
    'Written in React and TypeScript Unit Testing suite developed in TypeScript using the React Testing Library.'
  ];
  const nonogramAPIDescription = [
    'Companion API project for the front-end React TypeScript Nonogram project.',
    'Written in TypeScript using the Express framework; API testing done in Insomnium.'
  ];
  const aquariumAPIDescription = [
    'API project for storing aquariums, the plants and livestock within them, aquarium products, and keeping track of maintenance using DynamoDB.',
    'API written in TypeScript using the Express NodeJS framework; API testing done in Insomnium.'
  ];

  return (
    <Article
      title={'Projects'}
      className={'projects'}
      content={
        <>
          <Project
            title={'Nonogram'}
            link={'https://github.com/ALostCAWs/nonogram'}
            date={'Aug 2023 - Present'}
            skills={['TypeScript', 'React', 'HTML/CSS']}
            description={nonogramDescription}
            image={<img src={nonogram} />}
          />
          <Project
            title={'Nonogram API'}
            link={'https://github.com/ALostCAWs/nonogram-api'}
            date={'Nov 2023 - Present'}
            skills={['TypeScript', 'Node JS', 'Express']}
            description={nonogramAPIDescription}
            image={<img src={nonogram} />}
          />
          <Project
            title={'Aquarium API'}
            link={'https://github.com/ALostCAWs/aquarium-api'}
            date={'Jan 2024 - Present'}
            skills={['TypeScript', 'Node JS', 'Express', 'DynamoDB']}
            description={aquariumAPIDescription}
            image={<img src={aquarium} />}
          />
        </>
      }
    />
  );
}