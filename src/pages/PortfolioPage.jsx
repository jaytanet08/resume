import '../assets/style/portfolio.css';
import { Card } from 'antd';
const { Meta } = Card;
import { useTranslation } from 'react-i18next';

function Portfolio() {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div id="Portfolio" className="content-wrapper">
                <div className='div-main-portfolio'>
                    <div className='div-label'>
                        <label className='label-portfolio'>{t('portfolio_title_page')}</label>
                    </div>
                    <div className='div-port' >
                        <Card
                            hoverable
                            className='card'
                            onClick={() => { console.log("12312") }}
                            cover={<img alt="example" src="/assets/img/portfolio/a1.png" />}
                        >
                            <Meta title={t('portfolio_title_1')}
                                description={t('portfolio_detail_1')}
                            />
                        </Card>
                        <Card
                            hoverable
                            className='card'
                            cover={<img alt="example" src="/assets/img/portfolio/b1.png" />}
                        >
                            <Meta title={t('portfolio_title_2')}
                                description={t('portfolio_detail_2')}
                            />
                        </Card>
                        <Card
                            hoverable
                            className='card'
                            cover={<img alt="example" src="/assets/img/portfolio/c1.png" />}
                        >
                            <Meta title={t('portfolio_title_3')}
                                description={t('portfolio_detail_3')}
                            />
                        </Card>
                    </div>

                    <div className='div-port' >
                        <Card
                            hoverable
                            className='card'
                            onClick={() => { console.log("12312") }}
                            cover={<img alt="example" src="/assets/img/portfolio/d1.png" />}
                        >
                            <Meta title={t('portfolio_title_4')}
                                description={t('portfolio_detail_4')}
                            />
                        </Card>
                        <Card
                            hoverable
                            className='card'
                            cover={<img alt="example" src="/assets/img/portfolio/f1.png" />}
                        >
                            <Meta title={t('portfolio_title_5')}
                                description={t('portfolio_detail_5')}
                            />
                        </Card>
                        <Card
                            hoverable
                            className='card'
                            cover={<img alt="example" src="/assets/img/portfolio/c1.png" />}
                        >
                            <Meta title={t('portfolio_title_3')}
                                description={t('portfolio_detail_3')}
                            />
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;
