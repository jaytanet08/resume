import '../assets/style/home.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faLine } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'antd';
import { useSpring, animated } from 'react-spring';
const HomePage = () => {
    const textHelloWorld = "Full Stack Developer";
    const [textEffect, setTextEffect] = useState("")
    const [index, setIndex] = useState(0);

    useEffect(() => {
         setTimeout(() => {
            if (index < textHelloWorld.length) {
                setTextEffect(textHelloWorld.substr(0, index + 1));
                setIndex(index + 1);
            } else {
                setTextEffect("F");
                setIndex(0);
            }
        }, 300); // หน่วงเวลา 500 มิลลิวินาทีต่อตัวอักษรหนึ่งตัว

    }, [index]);


    const springProps = useSpring({
        opacity: 1,
        transform: 'translateX(0px)',
        from: { opacity: 0, transform: 'translateX(0px)' },
        config: { duration: 1000 },

    });
    return (
        <div className="container">

            <div id="Home" className="content-wrapper">
                <div className='div-main-homepage'>


                    <div className='div-home-left'>
                        <div className='div-in-left'>
                            <div className='profile-div'>About Me</div>
                            <div className='div-name-person'>Tanet Limsumangkolkul</div>
                            <div className='div-detail'>
                                My major is Information System with experience
                                in project, internship, activities, leaned in university
                                and work. That gave me skills in work experience,
                                communication teamwork and coding skill. I can
                                apply my education and skills to software development.
                            </div>
                            <div >
                                <label className='label-hello-world'>{textEffect}</label>
                            </div>
                            <div className='div-btn-cv'>
                                <a href="/assets/file/cv_tanet.pdf" download className='btn-cv'>
                                    <Button type="primary" >Download CV</Button>
                                </a>
                            </div>
                            <div className='div-icon'>
                                <a href="https://github.com/jaytanet08" className="icon-github" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                                <a href="https://www.linkedin.com/in/tanet-limsumagkolkun-3039a51b7" className="icon-linkin" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                                <a href="https://line.me/ti/p/่jaytanet" className="icon-line" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLine} size="2x" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='div-img-tanet'>
                        <animated.img className="img-tanet" src="/assets/img/tanetv6.png" alt="Tanet" style={springProps} />
                    </div>

                </div>

            </div>
        </div>
    );
}
export default HomePage;
