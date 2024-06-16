import React from 'react';
import '../assets/style/portfolio.css';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;


function Portfolio() {
    return (
        <div className="container">
            <div id="Portfolio" className="content-wrapper">
                <div className='div-main-portfolio'>
                    <div className='div-label'>
                        <label className='label-portfolio'>Portfolio</label>
                    </div>
                    <div className='div-port' >
                        <Card
                            hoverable
                            className='card'
                            onClick={() => { console.log("12312") }}
                            cover={<img alt="example" src="/assets/img/portfolio/a1.png" />}
                        >
                            <Meta title="Web Admin Anyhos"
                                description="The admin web management system for the online doctor appointment website includes functions for doctor booking, document uploads, viewing appointment details, access permission management, payments, reporting, and a Lalamove car service."
                            />
                        </Card>
                        <Card
                            hoverable
                            className='card'
                            cover={<img alt="example" src="/assets/img/portfolio/b1.png" />}
                        >
                            <Meta title="Application Anyhos"
                                description="I will manage the backend system and create APIs for the Anyhos application. This includes adding, deleting, and modifying data, handling Firebase notifications, integrating APIs with Lalamove and Chiline (a Taiwanese medical equipment company), and designing database structures using Firebase and MongoDB, as well as developing the backend with Node.js."
                            />
                        </Card>
                        <Card
                            hoverable
                            className='card'
                            cover={<img alt="example" src="/assets/img/portfolio/c1.png" />}
                        >
                            <Meta title="Web Checkin JTL"
                                description="The organization's check-in and check-out system includes functions for checking in and out within a designated radius and for off-site check-ins. It also features check-in history viewing and internal announcements."
                            />
                        </Card>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;
