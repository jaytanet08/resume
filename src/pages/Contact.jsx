
import '../assets/style/contact.css';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    const targetLatitude = 13.664389961604185;
    const targetLongitude = 100.4471323290208;
    const springProps = useSpring({
        opacity: 1,
        transform: 'translateX(0px)',
        from: { opacity: 0, transform: 'translateX(-500px)' },
        config: { duration: 1000 },

    });
    return (
        <div className="container">
            <div
                id="Contact"
                className='content-wrapper'

            >


                <div className='div-main-contact'>
                    <animated.div style={springProps}>
                        <div className='div-google-map'>
                            <div className='div-in-google-map'>
                                <iframe
                                    className="google-map"
                                    allowFullScreen
                                    src={`https://www.google.com/maps?q=${targetLatitude},${targetLongitude}&output=embed`}
                                    title="Map"
                                >
                                </iframe>
                            </div>
                        </div>
                    </animated.div>

                    <div className='div-detail-contact'>
                        <div className='contact_detail'>{t('cantact_detail_1')}</div>
                        <div className='contact_detail'>{t('cantact_detail_2')}</div>
                        <div className='contact_detail'>{t('cantact_detail_3')}<br />
                            {t('cantact_detail_4')}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Contact