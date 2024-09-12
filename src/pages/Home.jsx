import '../assets/style/home.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faLine } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'antd';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';
const Home = () => {
    const textHelloWorld = "Full Stack Developer";
    const [textEffect, setTextEffect] = useState("")
    const [index, setIndex] = useState(0);
    const { t } = useTranslation();
    useEffect(() => {
        let time = 300;
        setTimeout(() => {
            if (index < textHelloWorld.length) {
                setTextEffect(textHelloWorld.substr(0, index + 1));
                setIndex(index + 1);
            } else {
                setTextEffect("Full Stack Developer");
                setIndex(0);
                time = 5000;
            }
        }, time);

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
                            <div >
                                <label className='label-hello-world'>{textEffect}</label>
                            </div>
                            <div className='div-name-person'>{t('about_name')}</div>
                            <div className='div-detail'>
                                <p>{t('about_detail1')}</p>
                            </div>
                            <div className='div-detail'>
                                <p>{t('about_detail2')}</p>
                            </div>

                            <div className='div-btn-cv'>
                                <a href="/assets/file/cv_tanet.pdf" download >
                                    <Button className='btn-cv' type="primary" >{t('about_btn_download')} </Button>
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
export default Home;
