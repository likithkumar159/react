import React, { useContext } from 'react'
import Tablebody from './Tablebody'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Filteruni_context } from './Filteruni_context';

const Table_header = () => {
    const { strdata } = useContext(Filteruni_context)
    return (
        <>
            <Tabs>
                <div className='w100 d-flex table_header'>
                    <TabList>
                        <Tab>
                            <div className='header_group'>
                                <h6 className=''>ARCHIVED</h6>
                                <div className='tablelength_div'>
                                    <h6 className=''>01</h6>
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div>
                                <div className='header_group active'>
                                    <h6 className=''>EXECUTION PLAN</h6>
                                    <div className='tablelength_div'>
                                        <h6 className=''>
                                            {strdata}
                                        </h6>
                                    </div>
                                </div>
                                <div className='underline w100'></div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className='header_group'>
                                <h6 className=''>UFR</h6>
                                <div className='tablelength_div'>
                                    <h6 className=''>23</h6>
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className='header_group' title="addd">
                                <h6 className=''>SAVED</h6>
                                <div className='tablelength_div'>
                                    <h6 className=''>02</h6>
                                </div>
                            </div>
                        </Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <h4>ARCHIVED Working</h4>
                </TabPanel>
                <TabPanel>
                    <Tablebody />
                </TabPanel>
                <TabPanel>
                    <h4>UFR Working</h4>
                </TabPanel>
                <TabPanel>
                    <h4>SAVED Working</h4>
                </TabPanel>
            </Tabs>

        </>
    )
}

export default Table_header