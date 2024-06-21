import React from 'react';
import '../assets/style/experience.css';
import { Timeline } from 'antd';
import { useTranslation } from 'react-i18next';

function Experience() {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div id="Experience" className="content-wrapper">
                <div className='div-main-experience'>
                    <div className='div-label'>
                        <label className='label-experience'>{t('experience_page')}</label>
                    </div>
                    <Timeline
                        items={[

                            {
                                children: (
                                    <>
                                        <div className='labal-position'>{t('experience_title_1')}</div>
                                        <label className='labal-experience-detail'>{t('experience_detail_1_1')}</label>
                                        <div><label className='labal-experience-detail'>{t('experience_detail_1_2')}</label></div>
                                    </>
                                ),
                            },
                            {
                                children: (
                                    <>
                                        <div className='labal-position'>{t('experience_title_2')}</div>
                                        {t('experience_detail_2_1')}
                                        <div>{t('experience_detail_2_2')}</div>
                                        <div>{t('experience_detail_2_3')}</div>
                                        <div>{t('experience_detail_2_4')}</div>
                                        <div className='labal-experience-detail'> {t('experience_detail_2_5')}</div>
                                        <div className='labal-experience-detail'>{t('experience_detail_2_6')} </div>
                                        <div className='labal-experience-detail'>{t('experience_detail_2_7')}</div>
                                        <div>{t('experience_detail_2_8')}</div>
                                        <div> {t('experience_detail_2_9')}</div>
                                        <div> {t('experience_detail_2_10')}</div>
                                        <div>{t('experience_detail_2_11')}</div>
                                        <div className='labal-experience-detail'>{t('experience_detail_2_12')}</div>
                                        <div className='labal-experience-detail'>{t('experience_detail_2_13')}</div>
                                        <div className='labal-experience-detail'>{t('experience_detail_2_14')}</div>
                                        <div className='labal-experience-detail'>{t('experience_detail_2_15')}</div>
                                        <div className='labal-experience-detail'>{t('experience_detail_2_16')}</div>
                                        <div className='labal-experience-detail'>{t('experience_detail_2_17')}</div>
                                        <div className='labal-experience-detail'>{t('experience_detail_2_18')}</div>
                                        <div className='labal-experience-detail'>{t('experience_detail_2_19')}</div>
                                        <div className='labal-experience-detail'>{t('experience_detail_2_20')}</div>
                                        <div className='labal-experience-detail'>{t('experience_detail_2_21')}</div>
                                        <div>{t('experience_detail_2_22')}</div>

                                    </>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Experience;
