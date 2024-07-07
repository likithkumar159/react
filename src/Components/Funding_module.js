import React from 'react'

const Funding_module = () => {
    return (
        <div className='fundeed'>
            <div className='funded'>
                <h2 className='funded_num funded_textcolor'>10</h2>
                <div className='amount'>
                    <h2>FUNDED</h2>
                    <h2 className='funded_textcolor'>$230,000.00</h2>
                </div>
            </div>
            <div className='partilly_funded'>
                <div className='fundedboth'>
                    <h2 className='funded_num partial_textcolor'>06</h2>
                    <div className='amount'>
                        <h2>PARTIALLY FUNDED</h2>
                        {/* <h2 className=''>$230,000.00</h2> */}
                    </div>
                </div>
                <div className='both'>
                    <div>
                        <h2 className='fw600'>FUNDED</h2>
                        <h2 className='fw600 funded_textcolor'>$10,000.00</h2>
                    </div>
                    <div>
                        <h2 className='fw600'>UNFUNDED</h2>
                        <h2 className='fw600 unfunded_textcolor'>$5,000.00</h2>
                    </div>
                </div>
            </div>
            <div className='funded'>
                <h2 className='funded_num unfunded_textcolor'>02</h2>
                <div className='amount'>
                    <h2>UNFUNDED</h2>
                    <h2 className='unfunded_textcolor'>$70,000.00</h2>
                </div>
            </div>
        </div>
    )
}

export default Funding_module