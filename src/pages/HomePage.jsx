import '../assets/style/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => (
    <div
        id="Home"
        className='bg-home'
        style={{
            width: '98.9vw',
            height: '100vh',


        }}
    >
        <div style={{ width: "100%", display: "flex" }}>
            <div style={{ width: "50%", marginLeft: "30px", marginTop: "40px", padding: "70px" }}>
                <div className='profile-div'>PROFILE</div>
                <div style={{ fontSize: "45px", fontWeight: "bold", color: "white" }}>
                    Tanet Limsumangkolkul
                </div>
                <div style={{ color: "white", margin: "10px" }}>My major is Information System with experience
                    in project, internship, activities, leaned in university
                    and work. That gave me skills in work experience,
                    communication teamwork and coding skill. I can
                    apply my education and skills to software development.
                </div>
                <div className='div-icon'>
                    <a href="https://github.com/yourusername"
                        className="icon-github" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/yourusername"
                        className="icon-linkin" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
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