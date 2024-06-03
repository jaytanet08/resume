import '../assets/style/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'antd';

const HomePage = () => (
    <div
        id="Home"

        style={{
            width: '98.9vw',
            height: '1000px',

        }}
    >
        <div className='div-main-homepage'>
            <div className='div-home-left'>
                <div className='profile-div'>PROFILE</div>
                <div className='div-name-person'> Tanet Limsumangkolkul</div>
                <div className='div-detail'>My major is Information System with experience
                    in project, internship, activities, leaned in university
                    and work. That gave me skills in work experience,
                    communication teamwork and coding skill. I can
                    apply my education and skills to software development.
                </div>
                <div className='div-btn-cv'>
                    <Button className='btn-cv' type="primary">Download CV</Button>
                </div>
                <div className='div-icon'>
                    <a href="https://github.com/yourusername"
                        className="icon-github" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                    <a href="https://www.linkedin.com/in/yourusername"
                        className="icon-linkin" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>


                </div>


            </div>



            <div className='div-img-tanet' >
                <img className="img-tanet" src="../../public/assets/img/tanet.jpg" />
            </div>


        </div>


    </div >
);

export default HomePage;