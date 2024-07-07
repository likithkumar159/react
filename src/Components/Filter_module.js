import React from 'react'
import Kip_cards from './Kip_cards'
import Funding_module from './Funding_module'

const Filter_module = () => {
    return (
        <div className='Filter_module_box'>
            <div className='form_div'>
                <from method="post" action="">
                    <div className='d-flex justify_space_between'>
                        <label>Filter by</label>
                        <a href=''>Clear All</a>
                    </div>
                    <input type='text' className='input_filter' placeholder='Search ID/Title' />
                    <div className=''>
                        <div className='d-flex mrt5'>
                            <div className='mr14'>
                                <label className='fw600'>Fiscal Year</label>
                                <div class="select-wrapper">
                                    <select className='customize_select'>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mr14'>
                                <label className='fw600'>Drill</label>
                                <div class="select-wrapper">
                                    <select className='customize_select'>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mrt5'>
                            <div className='mr14'>
                                <label className='fw600'>Base</label>
                                <div class="select-wrapper">
                                    <select className='customize_select'>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mr14'>
                                <label className='fw600'>Group</label>
                                <div class="select-wrapper">
                                    <select className='customize_select'>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mrt5'>
                            <div className='mr14'>
                                <label className='fw600'>Unit</label>
                                <div class="select-wrapper">
                                    <select className='customize_select'>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mr14'>
                                <label className='fw600'>Category</label>
                                <div class="select-wrapper">
                                    <select className='customize_select'>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mrt5'>
                            <div className='mr14'>
                                <label className='fw600'>Requirement Amount</label>
                                <div class="select-wrapper">
                                    <select className='customize_select'>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mr14'>
                                <label className='fw600'>Submitted Date</label>
                                <div class="select-wrapper">
                                    <select className='customize_select'>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </from>
                <div>
                    <hr class="dashed-line" />
                </div>
                <div className='cards_module'>
                    <div className='card1'>
                        <div className=''>
                            <p>TOTAL REQUIREMENTS</p>
                            <p>$ 100,200,000.00</p>
                        </div>
                        <div className=''>
                            <span>103</span>
                        </div>
                    </div>
                    <div className='card2'>
                        <Kip_cards num="15" name="UNIT" cards_background_color="kpcard1" cards_color="kpcards1"/>
                        <Kip_cards num="20" name="FMB" cards_background_color="kpcard2" cards_color="kpcards2"/>
                        <Kip_cards num="20" name="NAF PANEL" cards_background_color="kpcard3" cards_color="kpcards3"/>
                        <Kip_cards num="10" name="AETC GROUP" cards_background_color="kpcard4" cards_color="kpcards4"/>
                        <Kip_cards num="10" name="BOARD" cards_background_color="kpcard5" cards_color="kpcards5"/>
                        <Kip_cards num="10" name="COUNCIL" cards_background_color="kpcard6" cards_color="kpcards6"/>
                        <Kip_cards num="10" name="COUNCIL" cards_background_color="kpcard6" cards_color="kpcards6"/>
                        <Kip_cards num="10" name="COUNCIL" cards_background_color="kpcard6" cards_color="kpcards6"/>
                        <Kip_cards num="10" name="COUNCIL" cards_background_color="kpcard6" cards_color="kpcards6"/>
                        <Kip_cards num="10" name="COUNCIL" cards_background_color="kpcard6" cards_color="kpcards6"/>
                        <Kip_cards num="10" name="COUNCIL" cards_background_color="kpcard6" cards_color="kpcards6"/>
                        <Kip_cards num="10" name="COUNCIL" cards_background_color="kpcard6" cards_color="kpcards6"/>
                        <Kip_cards num="10" name="COUNCIL" cards_background_color="kpcard6" cards_color="kpcards6"/>
                        <Kip_cards num="10" name="COUNCIL" cards_background_color="kpcard6" cards_color="kpcards6"/>
                    </div>
                </div>
                <div>
                    <hr class="dashed-line" />
                </div>
                <div className='funding_module'>
                    <Funding_module/>
                </div>
            </div>
        </div>
    )
}

export default Filter_module