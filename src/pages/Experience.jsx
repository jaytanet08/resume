import React from 'react';
import '../assets/style/experience.css';
import { Timeline } from 'antd';




function Experience() {
    return (
        <div className="container">
            <div id="Experience" className="content-wrapper">
                <div className='div-main-experience'>
                    <div className='div-label'>
                        <label className='label-experience'>Experience</label>
                    </div>
                    <Timeline
                        items={[

                            {
                                children: (
                                    <>
                                        <div className='labal-position'>Programer | Bizpotentail  (Mar 2022 - Nov 2022) </div>
                                        <label className='labal-experience-detail'>- I am responsible for managing and developing several systems, including CRA ERP EDU (MA), an educational system for Chulabhorn Royal Academy, and MUIC (MA), the educational system for Mahidol University. I also handle SIRIRAJ, an educational system for Siriraj Hospital, TSRI_HR, a welfare system for the Office of the Higher Education Commission, and MRTA_HR, a welfare system for the Mass Rapid Transit Authority of Thailand.</label>
                                        <div><label className='labal-experience-detail'> - My responsibilities include adding new functionalities or modifying the systems according to customer requirements, sending email notifications in various formats, creating functions to import data from Excel to the database, and generating Word files in different formats.</label></div>
                                    </>
                                ),
                            },
                            {
                                children: (
                                    <>
                                        <div className='labal-position'>Full Stack Developer | Rama 2 Medical Group  (Sep 2023 - Present) </div>
                                        API Creation for the Anyhos Application
                                        <div> Adding, deleting, and modifying data</div>
                                        <div>  Handling Firebase notifications</div>
                                        <div>  Integrating APIs with</div>
                                        <div className='labal-experience-detail'> - Lalamove API</div>
                                        <div className='labal-experience-detail'> - Chiline( Taiwanese medical equipment company) </div>
                                        <div className='labal-experience-detail'> - Connecting to the LINE Notify API </div>
                                        <div>  Designing database structures using Firebase and MongoDB</div>
                                        <div>  Developing the backend with Node.js</div>
                                        <div>  Enhancing security with JWT tokens and password encryption</div>
                                        <div>  Additionally, I developed the Anyhos admin website, including:</div>
                                        <div className='labal-experience-detail'> -   Managing the backend system</div>
                                        <div className='labal-experience-detail'> - Providing an overview of patient visits</div>
                                        <div className='labal-experience-detail'> - Generating case reports</div>
                                        <div className='labal-experience-detail'> - Implementing Lalamove functionality</div>
                                        <div className='labal-experience-detail'> - Sending documents to patient chat channels through the web</div>
                                        <div className='labal-experience-detail'> - Adding patient information</div>
                                        <div className='labal-experience-detail'> - Cropping advertisement images according to specified layouts</div>
                                        <div className='labal-experience-detail'> - Managing payment systems</div>
                                        <div className='labal-experience-detail'> - Managing access rights</div>
                                        <div className='labal-experience-detail'> - Uploading advertisement clips</div>
                                        <div> Deploy the backend system to the cloud platform. The system runs on Ubuntu Linux and uses Docker to containerize the Node.js application.</div>

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
