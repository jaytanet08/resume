import '../src/assets/style/main.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skill from './pages/Skill';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import '../src/setting/i18n'; 

const App = () => (
  <>
    <div className='layout'>
      <Navbar />
      <Home />
      <Portfolio />
      <Education />
      <Skill />
      <Experience />
      <Contact />
    </div>

  </>
);

export default App;
