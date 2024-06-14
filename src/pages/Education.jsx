import React from 'react';
import '../assets/style/education.css';
import { SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { BookOutlined, LaptopOutlined, ReadOutlined, ScheduleOutlined } from '@ant-design/icons';

import { Steps } from 'antd';


function Education() {
    return (
        <div className="container">
            <div id="Education" className="content-wrapper">
                <div className='div-main-education'>
                    <div className='div-label'>
                        <label className='label-education'>Education</label>
                    </div>
                    <Steps
                        items={[
                            {
                                title: 'High School',
                                status: 'finish',
                                description: 'Rattanakosinsomphod Bangkhunthian School',
                                icon: <ReadOutlined />, // เปลี่ยนเป็นไอคอนที่เหมาะสม
                            },

                            {
                                title: 'Vocational Certificate Level',
                                status: 'finish',
                                description: (<>
                                    Witthayalai Theknoloyi Mit Phon Borihan Thurakit College<br /># Computer bussiness
                                </>),

                                icon: <SolutionOutlined />, // เปลี่ยนเป็นไอคอนที่เหมาะสม
                            },
                            {
                                title: "Bachelor's degree",
                                status: 'finish',
                                description: (<>
                                  Rajamangala University of Technology Krungthep<br /># Information system
                                </>),
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
