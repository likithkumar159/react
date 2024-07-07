import React from 'react'
import Aetc from './../Images/AETC_logo.png'
import Header from './Header'
import Page_content from './Page_content'
import Bottom from './Bottom'
import Rhybus from './Rhybus'

const Requirements = () => {
    return (
        <>
            <div className='left_Menu'>
                <div className='d-flex p15 border-bot-white h50'>
                    <div className='logo'>
                        <img src={Aetc} alt='AETC Logo' />
                    </div>
                    <div className='logo_captions'>
                        <h5>AETC</h5>
                        <h6>BUDGET MANAGEMENT PROCESS</h6>
                    </div>
                </div>
                <div className='left_navigation mt20'>
                    <ul>
                        <li>Dashboard</li>
                        <li>Create Requirement</li>
                        <li>Requirements</li>
                        <li>Knowledge Graph</li>
                        <li>Quick Links</li>
                        <li>Calendar</li>
                        <li>Points of Contact</li>
                        <li>Policy Memos & Guidelines</li>
                    </ul>
                    <div className='left_nav_hr'>
                        <hr />
                    </div>
                    <ul>
                        <li>Settings</li>
                        <li>Site Feedback</li>
                        <li>Version 1.0.1</li>
                    </ul>
                    <div className='left_nav_hr'>
                        <hr />
                    </div>
                    <ul>
                        <li>Collapse</li>
                    </ul>
                </div>
            </div>
            <section className='header_position pos_fixed z1'>
                <Header />
            </section>
            <section className='Page_body'>
                <Page_content />
            </section>
            <section className='bottom'>
                <Bottom />
            </section>
            {/* <section className='bottom akash'>
                <Rhybus name="akash"/>
            </section> */}
        </>
    )
}

export default Requirements