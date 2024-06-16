import '../src/assets/style/main.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillPage from './pages/SkillPage';
import PortfolioPage from './pages/PortfolioPage';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';


const App = () => (
  <>
    <div className='layout'>
      <Navbar />
      <HomePage />
      <PortfolioPage />
      <Education />
      <SkillPage />
      <Experience />
      <Contact />
    </div>

  </>
);

export default App;
