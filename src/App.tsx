import './styles/index.css';
import { Navbar } from './components/navbar';
import { Intro } from './components/intro';
import { Skills } from './components/skills';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
    </>
  )
}

export default App;
