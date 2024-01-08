import './styles/index.css';
import { Navbar } from './components/navbar';
import { Intro } from './components/intro';
import { SkillSet } from './components/skillSet';
import { Projects } from './components/projectList';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <SkillSet />
      <Projects />
    </>
  )
}


export default App;
