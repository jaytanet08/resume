import React from 'react';
import '../assets/style/education.css';
import { SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { ReadOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div id="Education" className="content-wrapper">
                <div className='div-main-education'>
                    <div className='div-label'>
                        <label className='label-education'>{t("education_title_page")}</label>
                    </div>
                    <Steps
                        items={[
                            {
                                title: t("education_title_1"),
                                status: 'finish',
                                description: (<label style={{ fontSize: "0.8rem" }}>
                                    {t("education_detail_1")}
                                </label>),
                                icon: <ReadOutlined />, // เปลี่ยนเป็นไอคอนที่เหมาะสม
                            },

                            {
                                title: t("education_title_2"),
                                status: 'finish',
                                description: (<label style={{ fontSize: "0.8rem" }}>
                                    {t("education_detail_2")}<br />              {t("education_detail_2_1")}
                                </label>),

                                icon: <SolutionOutlined />, // เปลี่ยนเป็นไอคอนที่เหมาะสม
                            },
                            {
                                title: t("education_title_3"),
                                status: 'finish',
                                description: (<label style={{ fontSize: "0.8rem" }}>
                                   {t("education_detail_3")}<br />{t("education_detail_3_1")}
                                </label>),
                                icon: < UserOutlined />, // เปลี่ยนเป็นไอคอนที่เหมาะสม
                            },

                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Education;
