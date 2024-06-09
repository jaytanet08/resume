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
                                        - The systems that I am responsible for are
                                        CRA ERP EDU (MA). is an educational system of Chulabhorn Royal Academy.
                                        MUIC (MA). is the educational system of Mahidol University.
                                        SIRIRAJ, an education system for Siriraj Hospital,
                                        TSRI_HR, which is a welfare system for the Office of the Higher Education Commission,
                                        MRTA_HR, a welfare system for the Mass Rapid Transit Authority of Thailand.
                                        My responsibilities include adding new functions or modifying the systems according to customer requirements , Send up email notifications in various formats, creating functions to import data from Excel to the database, and generating Word files in different formats.

                                    </>
                                ),
                            },
                            {
                                children: (
                                    <>
                                        - I have written test cases to test websites, SBM Wallet,
                                        KEX Wallet, Sabuy Wash application and vending machine.
                                        <br />
                                        - Write test results and Write down the found defect.
                                        <br />
                                        - Report results and prepare documents for the next test.
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
