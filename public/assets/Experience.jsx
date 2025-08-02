import React from 'react';
import '../assets/style/experience.css';
import { Timeline } from 'antd';
import { useTranslation } from 'react-i18next';

function Experience() {
    const experienceDetails3 = [
        'experience_detail_3'
    ];
    const experienceDetails1 = [
        'experience_detail_1_1', 'experience_detail_1_2', 'experience_detail_1_3', 
        'experience_detail_1_4', 'experience_detail_1_5', 'experience_detail_1_6', 
        'experience_detail_1_7', 'experience_detail_1_8', 'experience_detail_1_9',
        'experience_detail_1_10'
    ];
    const experienceDetails2 = [
        'experience_detail_2_1', 'experience_detail_2_2', 'experience_detail_2_3', 
        'experience_detail_2_4', 'experience_detail_2_5', 'experience_detail_2_6', 
        'experience_detail_2_7', 'experience_detail_2_8', 'experience_detail_2_9',
        'experience_detail_2_10', 'experience_detail_2_11', 'experience_detail_2_12', 
        'experience_detail_2_13', 'experience_detail_2_14', 'experience_detail_2_15', 
        'experience_detail_2_16', 'experience_detail_2_17', 'experience_detail_2_18', 
        'experience_detail_2_19', 'experience_detail_2_20', 'experience_detail_2_21', 
        'experience_detail_2_22'
    ];

    
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
                                        <div className='labal-position'>{t('experience_title_3')}</div>
                                        {experienceDetails3.map((detailKey, index) => (
                                            <div key={index} className='labal-experience-detail' style={{}}>{t(detailKey)}</div>
                                        ))}
                                       
                                    </>
                                ),
                            },
                            {
                                children: (
                                    <>
                                        <div className='labal-position'>{t('experience_title_1')}</div>
                                        {experienceDetails1.map((detailKey, index) => (
                                            <div key={index} className='labal-experience-detail'>{t(detailKey)}</div>
                                        ))}
                                       
                                    </>
                                ),
                            },
                            {
                                children: (
                                    <>
                                        <div className='labal-position'>{t('experience_title_2')}</div>
                                        {experienceDetails2.map((detailKey, index) => (
                                            <div key={index} className='labal-experience-detail'>{t(detailKey)}</div>
                                        ))}

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
