import React from 'react';
import '../assets/style/skill.css';
import Animation from '../components/Animation';


const SkillPage = () => {
    const sections = [
        {
            title: 'Frontend',
            images: ['/assets/img/f1.png', '/assets/img/f2.png', '/assets/img/f3.png', '/assets/img/f5.png', '/assets/img/f6.png', '/assets/img/f4.png'],
            effect: 'slideRight',
        },
        {
            title: 'Backend/Tool',
            images: ['/assets/img/b1.png', '/assets/img/b2.png', '/assets/img/b3.png','/assets/img/t1.png', '/assets/img/t2.png','/assets/img/t3.png'],

            effect: 'slideLeft',
        },
        {
            title: 'Database/Cloud',
            images: ['/assets/img/db1.png', '/assets/img/db2.png', '/assets/img/db3.png', '/assets/img/db4.jpg','/assets/img/c.png'],
            effect: 'zoomIn',
        },
        // {
        //     title: 'Tool',
        //     images: ['/assets/img/t1.png', '/assets/img/t2.png'],
        //     effect: 'rotate',
        // },
        // {
        //     title: 'Cloud',
        //     images: ['/assets/img/c.png'],
        //     effect: 'slideUp',
        // },
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

export default SkillPage;
