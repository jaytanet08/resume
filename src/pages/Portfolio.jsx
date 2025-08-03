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

    const portfolioData = [
        {
            id: 1,
            coverImage: "/assets/img/portfolio/a1.png",
            modalImages: ["/assets/img/portfolio/a1.png", "/assets/img/portfolio/a2.png"],
            titleKey: 'portfolio_title_1',
            detailKey: 'portfolio_detail_1',
            skills: ['f5.png', 'f4.png', 'b1.png', 'b2.png', 'db1.png', 'db4.jpg']
        },
        {
            id: 2,
            coverImage: "/assets/img/portfolio/b1.png",
            modalImages: ["/assets/img/portfolio/b1.png"],
            titleKey: 'portfolio_title_2',
            detailKey: 'portfolio_detail_2',
            skills: ['b1.png', 'b2.png', 'db1.png', 'db4.jpg']
        },
        {
            id: 3,
            coverImage: "/assets/img/portfolio/c1.png",
            modalImages: [
                "/assets/img/portfolio/c0.png",
                "/assets/img/portfolio/c1.png",
                "/assets/img/portfolio/c6.png",
                "/assets/img/portfolio/c2.png",
                "/assets/img/portfolio/c3.png",
                "/assets/img/portfolio/c4.png",
                "/assets/img/portfolio/c5.png",
                "/assets/img/portfolio/c7.png",
            ],
            titleKey: 'portfolio_title_3',
            detailKey: 'portfolio_detail_3',
            skills: ['f5.png', 'f4.png', 'b1.png', 'b2.png', 'db5.png', 'db4.jpg']
        },
        {
            id: 4,
            coverImage: "/assets/img/portfolio/d1.png",
            modalImages: ["/assets/img/portfolio/d1.png"],
            titleKey: 'portfolio_title_4',
            detailKey: 'portfolio_detail_4',
            skills: ['f7.png', 'f8.png', 'f4.png', 'db4.jpg']
        },
        {
            id: 5,
            coverImage: "/assets/img/portfolio/f1.png",
            modalImages: ["/assets/img/portfolio/f3.png", "/assets/img/portfolio/f5.png", "/assets/img/portfolio/f2.png", "/assets/img/portfolio/f4.png"],
            titleKey: 'portfolio_title_5',
            detailKey: 'portfolio_detail_5',
            skills: ['f5.png', 'f9.png', 'f4.png', 'b1.png', 'b2.png', 'db1.png', 'db6.png']
        },
        {
            id: 6,
            coverImage: "/assets/img/portfolio/g1.jpeg",
            modalImages: ["/assets/img/portfolio/hitachi-home-page.png"],
            titleKey: 'portfolio_title_6',
            detailKey: 'portfolio_detail_6',
            skills: ['f7.png', 'f4.png', 'db3.png', 'nest-js.png']
        }
    ];

    const handleCardClick = (item) => {
        setOpenModal(true);
        setImageDetail(item.modalImages);
        setTextDetail([t(item.detailKey)]);
    };

    const renderCard = (item) => (
        <div className='div-card' key={item.id}>
            <Card
                hoverable
                className='card'
                onClick={() => handleCardClick(item)}
                cover={<img alt="portfolio" src={item.coverImage} />}
            >
                <Meta 
                    title={t(item.titleKey)}
                    description={t(item.detailKey)}
                />
                <div className='portfolio-icon-skill'>
                    {item.skills.map((skill, index) => (
                        <div className='div-icon-skill' key={index}>
                            <img
                                style={{ width: 30 }}
                                src={`/assets/img/${skill}`}
                                alt={skill}
                            />
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );

    return (
        <>
            <ModalPort 
                isModalOpen={openModal} 
                handleCancel={() => setOpenModal(false)} 
                imageDetail={imageDetail} 
                textDetail={textDetail} 
            />
            <div className="container">
                <div id="Portfolio" className="content-wrapper">
                    <div className='div-main-portfolio'>
                        <div className='div-label'>
                            <label className='label-portfolio'>{t('portfolio_title_page')}</label>
                        </div>
                        
                        <div className='div-port'>
                            {portfolioData.slice(0, 3).map(renderCard)}
                        </div>

                        <div className='div-port'>
                            {portfolioData.slice(3, 6).map(renderCard)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
                                  