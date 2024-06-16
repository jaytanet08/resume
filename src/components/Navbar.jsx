import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../assets/style/main.css';


function Navbar() {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

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
              offset={-200}
            >
              Profile
            </ScrollLink>
            <ScrollLink
              to="Contact"
              className='label-navber'
              smooth="easeInOutQuart"
              duration={1000}
              offset={-200}
            >
              Contact
            </ScrollLink>

            <ScrollLink
              to="Education"
              className='label-navber'
              smooth="easeInOutQuart"
              duration={1000}
              offset={-200}
            >
              Education
            </ScrollLink>
            
            <ScrollLink
              to="Skill"
              className='label-navber'
              smooth="easeInOutQuart"
              duration={1000}
              offset={-200}
            >
              Skill
            </ScrollLink>
            <ScrollLink
              to="Experience"
              className='label-navber'
              smooth="easeInOutQuart"
              duration={1000}
              offset={-200}
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="Portfolio"
              className='label-navber'
              smooth="easeInOutQuart"
              duration={1000}
              offset={0}
            >
              Portfolio
            </ScrollLink>
         
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
