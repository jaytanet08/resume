import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../assets/style/main.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; // ตัวอย่างไอคอน Language

function Navbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false); // ปิดเมนูทันทีหลังจากที่เลือกภาษา
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${isNavbarFixed ? 'fixed' : ''}`}>
      <div className='anchor-body'>
        <div className='div-nav'>
          <div className="nav-links">
            <ScrollLink
              to="Home"
              className='label-navber'
              smooth="easeInOutQuart"
              duration={1000}
              offset={-100}
            >
              {t('navbar_menu_about')}
            </ScrollLink>

            <ScrollLink
              to="Portfolio"
              className='label-navber'
              smooth="easeInOutQuart"
              duration={1000}
              offset={-100}
            >
              {t('navbar_menu_portfolio')}
            </ScrollLink>

            <ScrollLink
              to="Education"
              className='label-navber'
              smooth="easeInOutQuart"
              duration={1000}
              offset={-100}
            >
              {t('navbar_menu_education')}
            </ScrollLink>

            <ScrollLink
              to="Skill"
              className='label-navber'
              smooth="easeInOutQuart"
              duration={1000}
              offset={-100}
            >
              {t('navbar_menu_skill')}
            </ScrollLink>
            <ScrollLink
              to="Experience"
              className='label-navber'
              smooth="easeInOutQuart"
              duration={1000}
              offset={-100}
            >
              {t('navbar_menu_experience')}
            </ScrollLink>


            <ScrollLink
              to="Contact"
              className='label-navber'
              smooth="easeInOutQuart"
              duration={1000}
              offset={-100}
            >
              {t('navbar_menu_contact')}
            </ScrollLink>
          </div>
          <div className="language-menu">
            <div onClick={toggleMenu}>
              <FontAwesomeIcon className='iconGlobe' icon={faGlobe} />
            </div>
            <ul className={menuOpen ? 'active' : ''}>
              <li onClick={() => changeLanguage('en')}>English</li>
              <li onClick={() => changeLanguage('th')}>ไทย</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
