import '../assets/style/portfolio.css';
import { Card } from 'antd';
import { useState } from 'react';
const { Meta } = Card;
import { useTranslation } from 'react-i18next';
import ModalPort from '../components/ModalPort';

function Portfolio() {
    const [openModal, setOpenModal] = useState(false);
    const [imageDetail, setImageDetail] = useState([]);
    const [textDetail, setTextDetail] = useState([]);
    const { t } = useTranslation();
    const imageSkillPortfolio1 = ['f5.png', 'f4.png', 'b1.png', 'b2.png', 'db1.png', 'db4.jpg']
    const imageSkillPortfolio2 = ['b1.png', 'b2.png', 'db1.png', 'db4.jpg']
    const imageSkillPortfolio3 = ['f5.png', 'f4.png', 'b1.png', 'b2.png', 'db5.png', 'db4.jpg']
    const imageSkillPortfolio4 = ['f7.png', 'f8.png', 'f4.png', 'db4.jpg']
    const imageSkillPortfolio5 = ['f5.png', 'f9.png', 'f4.png', 'b1.png', 'b2.png', 'db1.png', 'db6.png']
    const imageSkillPortfolio6 = ['f7.png', 'f4.png','db3.png','nest-js.png']
    return (
        <>
            <ModalPort isModalOpen={openModal} handleCancel={() => { setOpenModal(false) }} imageDetail={imageDetail} textDetail={textDetail} />
            <div className="container">
                <div id="Portfolio" className="content-wrapper">
                    <div className='div-main-portfolio'>
                        <div className='div-label'>
                            <label className='label-portfolio'>{t('portfolio_title_page')}</label>
                        </div>
                        <div className='div-port' >
                            <div className='div-card'>
                                <Card
                                    hoverable
                                    className='card'
                                    onClick={() => {
                                        setOpenModal(true);
                                        setImageDetail(["/assets/img/portfolio/a1.png", "/assets/img/portfolio/a2.png"]);
                                        setTextDetail([t('portfolio_detail_1')])
                                    }}
                                    cover={<img alt="example" src="/assets/img/portfolio/a1.png" />}
                                >
                                    <Meta title={t('portfolio_title_1')}
                                        description={t('portfolio_detail_1')}
                                    />

                                    <div className='portfolio-icon-skill'>
                                        {imageSkillPortfolio1.map((value, index) => {
                                            return (
                                                <div className='div-icon-skill' key={index}>
                                                    <img
                                                        style={{ width: 30 }}
                                                        src={'/assets/img/' + value}
                                                    />
                                                </div>
                                            )
                                        })}

                                    </div>
                                </Card>
                            </div>
                            <div className='div-card'>
                                <Card
                                    hoverable
                                    onClick={() => {
                                        setOpenModal(true);
                                        setImageDetail(["/assets/img/portfolio/b1.png"]);
                                        setTextDetail([t('portfolio_detail_2')])
                                    }}

                                    className='card'
                                    cover={<img alt="example" src="/assets/img/portfolio/b1.png" />}
                                >
                                    <Meta title={t('portfolio_title_2')}
                                        description={t('portfolio_detail_2')}
                                    />
                                    <div className='portfolio-icon-skill'>
                                        {imageSkillPortfolio2.map((value, index) => {
                                            return (
                                                <div className='div-icon-skill' key={index}>
                                                    <img
                                                        style={{ width: 30 }}
                                                        src={'/assets/img/' + value}
                                                    />
                                                </div>
                                            )
                                        })}

                                    </div>
                                </Card>
                            </div>
                            <div className='div-card'>
                                <Card
                                    hoverable
                                    className='card'
                                    onClick={() => {
                                        setOpenModal(true);
                                        setImageDetail([
                                            "/assets/img/portfolio/c0.png",
                                            "/assets/img/portfolio/c1.png",
                                            "/assets/img/portfolio/c6.png",
                                            "/assets/img/portfolio/c2.png",
                                            "/assets/img/portfolio/c3.png",
                                            "/assets/img/portfolio/c4.png",
                                            "/assets/img/portfolio/c5.png",
                                            "/assets/img/portfolio/c7.png",
                                        ]);
                                        setTextDetail([t('portfolio_detail_1')])
                                    }}
                                    cover={<img alt="example" src="/assets/img/portfolio/c1.png" />}
                                >
                                    <Meta title={t('portfolio_title_3')}
                                        description={t('portfolio_detail_3')}
                                    />
                                    <div className='portfolio-icon-skill'>
                                        {imageSkillPortfolio3.map((value, index) => {
                                            return (
                                                <div className='div-icon-skill' key={index}>
                                                    <img
                                                        style={{ width: 30 }}
                                                        src={'/assets/img/' + value}
                                                    />
                                                </div>
                                            )
                                        })}

                                    </div>
                                </Card>
                            </div>
                        </div>

                        <div className='div-port' >
                            <div className='div-card'>
                                <Card
                                    className='card'
                                    onClick={() => {
                                        setOpenModal(true);
                                        setImageDetail(["/assets/img/portfolio/d1.png"]);
                                        setTextDetail([t('portfolio_detail_4')])
                                    }}
                                    cover={<img alt="example" src="/assets/img/portfolio/d1.png" />}
                                >
                                    <Meta title={t('portfolio_title_4')}
                                        description={t('portfolio_detail_4')}
                                    />
                                    <div className='portfolio-icon-skill'>
                                        {imageSkillPortfolio4.map((value, index) => {
                                            return (
                                                <div className='div-icon-skill' key={index}>
                                                    <img
                                                        style={{ width: 30 }}
                                                        src={'/assets/img/' + value}
                                                    />
                                                </div>
                                            )
                                        })}

                                    </div>
                                </Card>
                            </div>
                            <div className='div-card'>
                                <Card
                                    hoverable
                                    className='card'
                                    onClick={() => {
                                        setOpenModal(true);
                                        setImageDetail(["/assets/img/portfolio/f3.png", "/assets/img/portfolio/f5.png", "/assets/img/portfolio/f2.png", "/assets/img/portfolio/f4.png"]);
                                        setTextDetail([t('portfolio_detail_5')])
                                    }}
                                    cover={<img alt="example" src="/assets/img/portfolio/f1.png" />}
                                >
                                    <Meta title={t('portfolio_title_5')}
                                        description={t('portfolio_detail_5')}
                                    />
                                    <div className='portfolio-icon-skill'>
                                        {imageSkillPortfolio5.map((value, index) => {
                                            return (
                                                <div className='div-icon-skill' key={index}>
                                                    <img
                                                        style={{ width: 30 }}
                                                        src={'/assets/img/' + value}
                                                    />
                                                </div>
                                            )
                                        })}

                                    </div>
                                </Card>
                            </div>
                            <div className='div-card'>
                                <Card
                                    hoverable
                                    className='card'
                                    onClick={() => {
                                        setOpenModal(true);
                                        setImageDetail(["/assets/img/portfolio/hitachi-home-page.png"]);
                                        setTextDetail([t('portfolio_detail_6')])
                                    }}
                                    cover={<img alt="example" src="/assets/img/portfolio/g1.jpeg" />}
                                >
                                    <Meta title={t('portfolio_title_6')}
                                        description={t('portfolio_detail_6')}
                                    />
                                    <div className='portfolio-icon-skill'>
                                        {imageSkillPortfolio6.map((value, index) => {
                                            return (
                                                <div className='div-icon-skill' key={index}>
                                                    <img
                                                        style={{ width: 30 }}
                                                        src={'/assets/img/' + value}
                                                    />
                                                </div>
                                            )
                                        })}

                                    </div>
                                </Card>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
