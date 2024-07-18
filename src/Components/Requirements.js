import React from 'react'
import Aetc from './../images/AETC_logo.png'
import Header from './Header'
import Page_content from './Page_content'
import Bottom from './Bottom'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import CreateReq from './CreateReq'
import Qlinks from './Qlinks'
import Calender from './Calender'
import Poc from './Poc'
import Sitefeedback from './Sitefeedback'
import Version from './Version'
import Kgraph from './Kgraph'
import Setting from './Setting'
import Policy_guidelines from './Policy_guidelines'
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
                        <Link to="/dashboard"> <li><span className='icon-dashboard2'></span>Dashboard</li></Link>
                        <Link to="/createreq"><li><span className='icon-create'></span>Create Requirement<div className='ml1-5rem icon-right-arrow'></div></li></Link>
                        <div className='loaded_page'></div>
                        <Link to="/"> <li><span className='icon-requirements'></span>Requirements</li></Link>
                        <Link to="/kgraph"><li><span className='icon-knowledge-graph'></span>Knowledge Graph</li></Link>
                        <Link to="/qlinks"><li><span className='icon-quicklinks2'></span>Quick Links</li></Link>
                        <Link to="/calender"><li><span className='icon-Calendarmenuicon'></span>Calendar</li></Link>
                        <Link to="/poc"><li><span className='icon-poc'></span>Points of Contact</li></Link>
                        <Link to="/Policy_guidelines"><li><span className='icon-pmg'></span>Policy Memos & Guidelines</li></Link>
                    </ul>
                    <div className='left_nav_hr'>
                        <hr />
                    </div>
                    <ul>
                        <Link to="/setting"> <li><span className='icon-settingsmenuicon'></span>Settings</li></Link>
                        <Link to="/sitefeedback"> <li><span className='icon-SiteFeedback'></span>Site Feedback</li></Link>
                        <Link to="/version"><li><span className='icon-version'></span>Version 1.0.1</li></Link>
                    </ul>
                    <div className='left_nav_hr'>
                        <hr />
                    </div>
                    <ul>
                        <li><span className='icon-list-arrow collapse'></span>Collapse</li>
                    </ul>
                </div>
            </div>
            <section className='header_position pos_fixed z2'>
                <Header />
            </section>
            <section className='Page_body'>
                {/* <Page_content /> */}
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/createreq" element={<CreateReq />} />
                    <Route path="/" element={<Page_content />} />
                    <Route path="/kgraph" element={<Kgraph />} />
                    <Route path="/qlinks" element={<Qlinks />} />
                    <Route path="/calender" element={<Calender />} />
                    <Route path="/poc" element={<Poc />} />
                    <Route path="/Policy_guidelines" element={<Policy_guidelines />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/sitefeedback" element={<Sitefeedback />} />
                    <Route path="/version" element={<Version />} />
                </Routes>
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