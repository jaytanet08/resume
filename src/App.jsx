import '../src/assets/style/main.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillPage from './pages/SkillPage';
import PortfolioPage from './pages/PortfolioPage';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import '../src/setting/i18n'; 

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


// import React from 'react';
// import { useTranslation } from 'react-i18next';

// function App() {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div>
//       <h1>{t('welcome')}</h1>
//       <p>{t('thankYou')}</p>
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('th')}>ไทย</button>
//     </div>
//   );
// }

// export default App;
