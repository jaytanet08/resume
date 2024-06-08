import '../assets/style/contact.css';
import { useSpring, animated } from 'react-spring';
function Contact() {
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
                <animated.div style={springProps}>
                    <div className='div-main-contact'>
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
                        <div className='div-detail-contact'>
                            <div>Tel: 0982846992</div>
                            <div>Email: jaytanet@gmail.com </div>
                            <div>Address: 56 road rama2 alley 51
                                Subdistrict thakam<br />
                                District Bang Khun Thian
                                Bangkok 10150
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>
        </div >
    )
}

export default Contact