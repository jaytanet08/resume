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
                            <Meta title="Web Admin Anyhos" description="www.instagram.com" />
                        </Card>

                        <Card
                            hoverable
                            className='card'
                            cover={<img alt="example" src="/assets/img/portfolio/c1.png" />}
                        >
                            <Meta title="Web Checkin JTL" description="www.instagram.com" />
                        </Card>

                        <Card
                            hoverable
                            className='card'
                            cover={<img alt="example" src="/assets/img/portfolio/c3.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;
