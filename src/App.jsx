
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillPage from './pages/SkillPage';
import PortfolioPage from './pages/PortfolioPage';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Layout from './pages/Layout';

const App = () => (
  <>
    <Navbar />
    <HomePage />
    <Contact />
    <Education />
    <SkillPage />
    <Experience/>
    <PortfolioPage /> 
    <Layout/>
  </>
);

export default App;
