import React from 'react'

const Header = () => {
    return (
        <>
            <div className='header border-bottom-black h50'>
                <div className='d-flex mb18'>
                    <div className='pr10 border-right-dashed-black'>
                        <img src='' alt='AETC Logo' />
                    </div>
                    <div className='pl10'>
                        <p className='reviewdate_font'>Next Review Date</p>
                        <h5 className='highlight_color'>05/24/2023</h5>
                    </div>
                </div>
                <div className='d-flex'>
                    <hr className='flowchart_line' />
                    <div className='base_total_group'>
                        <div className='base_group'>
                            <div className='circle_group'>
                                <div className='circle cr1'></div>
                                <p className='circle_group_names'>Submitted</p>
                            </div>
                            <div className='circle_group'>
                                <div className='circle cr2'></div>
                                <p className='circle_group_names'>Unit</p>
                            </div>
                            <div className='circle_group'>
                                <div className='circle cr3'></div>
                                <p className='circle_group_names'>Group</p>
                            </div>
                            <div className='circle_group'>
                                <div className='circle cr4'></div>
                                <p className='circle_group_names'>FWG</p>
                            </div>
                            <div className='circle_group'>
                                <div className='circle cr5'></div>
                                <p className='circle_group_names'>FMB</p>
                            </div>
                        </div>
                        <div className='basegroup_name'>BASE</div>
                    </div>
                    <div className='Majcom_total_group'>
                        <div className='Majcom_group'>
                            <div className='circle_group'>
                                <div className='circle cr6'></div>
                                <p className='circle_group_names'>NAF Panel</p>
                            </div>
                            <div className='circle_group'>
                                <div className='circle cr7'></div>
                                <p className='circle_group_names'>AETC Group</p>
                            </div>
                            <div className='circle_group'>
                                <div className='circle cr8'></div>
                                <p className='circle_group_names'>Board</p>
                            </div>
                            <div className='circle_group'>
                                <div className='circle cr9'></div>
                                <p className='circle_group_names'>Council</p>
                            </div>
                            <div className='circle_group'>
                                <div className='circle cr10'></div>
                                <p className='circle_group_names'>Funded</p>
                            </div>
                        </div>
                        <div className='majcom_name'>MAJCOM</div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='page_header h20 p10'>
                <div className='require'>
                    <h6>Requirements</h6>
                </div>
                <div>
                    <button className='button_beast'>EXPORT To BEAST</button>
                    <button className='button_csv'>EXPORT To CSV</button>
                </div>
            </div>
        </>
    )
}

export default Header