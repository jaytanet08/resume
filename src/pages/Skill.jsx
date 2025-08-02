import React from 'react';
import '../assets/style/skill.css';
import Animation from '../components/Animation';
import { useTranslation } from 'react-i18next';

const Skill = () => {
    const { t } = useTranslation();
    const sections = [
        {
            title: t("skill_title_1"),
            images: ['/assets/img/f1.png', '/assets/img/f2.png', '/assets/img/f8.png', '/assets/img/images.jpeg','/assets/img/f3.png','/assets/img/ts.png', '/assets/img/f5.png' , '/assets/img/f4.png'],
            effect: 'zoomIn',
        },
        {
            title: t("skill_title_2"),
            images: ['/assets/img/b1.png', '/assets/img/b2.png', '/assets/img/b3.png', '/assets/img/t1.png', '/assets/img/t2.png', '/assets/img/t3.png'],
            effect: 'slideLeft',
        },
        {
            title: t("skill_title_3"),
            images: ['/assets/img/db1.png', '/assets/img/db2.png', '/assets/img/db3.png','/assets/img/db5.png', '/assets/img/db4.jpg',  '/assets/img/c.png'],
            effect: 'slideUp',
        },
   
    ];

    return (
        <div className="container">
            <div id="Skill" className='content-wrapper'>
                <div className='div-main-skil'>
                    {sections.map((section, index) => (
                        <Animation
                            key={index}
                            title={section.title}
                            images={section.images}
                            effect={section.effect}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;
