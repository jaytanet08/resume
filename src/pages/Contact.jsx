import '../assets/style/contact.css';
function Contact() {
    const targetLatitude = 13.664389961604185;
    const targetLongitude = 100.4471323290208;

    return (
        <div
            id="Contact"
            style={{
                width: '98.9vw',
                height: '1000px',

            }}
        >
            {/* <label className='labal-contact'> Contact</label> */}
            <div className='div-main-contact'>

                <div className='div-google-map'>
                    <iframe
                        className="google-map"
                        allowFullScreen
                        src={`https://www.google.com/maps?q=${targetLatitude},${targetLongitude}&output=embed`}
                        title="Map"
                    >
                    </iframe>
                </div>
                <div className='div-detail-contact'>
                    <div>Tel: 0982846992</div>
                    <div>Email: jaytanet@gmail.com </div>
                    <div>Address: 56 road rama2 alley 51
                        Subdistrict thakam<br/>
                        District Bang Khun Thian
                        Bangkok 10150
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact