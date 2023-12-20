import './styles/index.css';
import { Navbar } from './components/navbar';
import { Intro } from './components/intro';
import { SkillSet } from './components/skillSet';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <SkillSet />
    </>
  )
}

export default App;
