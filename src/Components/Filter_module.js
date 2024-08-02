import React, { useContext, useState } from 'react'
import Kip_cards from './Kip_cards'
import Funding_module from './Funding_module'
import { Filteruni_context } from './Filteruni_context'

const Filter_module = () => {
    const { searchData, setSearchData, data ,statusCount} = useContext(Filteruni_context)
    const [inputvalue, setInputValue] = useState("");
    const [filters, setFilters] = useState({
        year: "All",
        base: "All",
        group: "All",
        unit: "All",
        category: "All",
        reqamount: "All",
        submitted: "All"
    });


    const superfilterdata = (searchData.length > 0 ? searchData : data)
    const handleSearchChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setInputValue(value);
        if (value === "") {
            setSearchData(data);
        } else {
            const searchedData = superfilterdata.filter(item =>
                item.title && item.title.toLowerCase().includes(value.toLowerCase())
            );
            setSearchData(searchedData);
        }
    };
    const totalrequirements = searchData.reduce((previousamount, currentamount) => {
        return (
            previousamount + (currentamount.Req_Amount === "-" ? 0 : currentamount.Req_Amount)
        );

    }, 0)

    const totalnumber = searchData.length

    const handleyearchange = (e) => {
        const year = e.target.value;
        if (year === "All") {
            setSearchData(data);
        } else {
            const searchedData = data.filter(item =>
                new Date(item.Submitted).getFullYear().toString() === year
            );
            setSearchData(searchedData);
        }
    }

    const handleBase = (e) => {
        const base = e.target.value;
        if (base === "All") {
            setSearchData(data);
        } else {
            const searchedData = superfilterdata.filter(item =>
                item.Base && item.Base.toLowerCase().includes(base.toLowerCase())
            );
            setSearchData(searchedData);
        }
    }

    const handleGroup = (e) => {
        const group = e.target.value;
        // console.log(group);
        if (group === "All") {
            setSearchData(data);
        } else {
            const searchedData = superfilterdata.filter(item =>
                item.Group && item.Group.toLowerCase().includes(group.toLowerCase())
            );
            setSearchData(searchedData);
        }
    }

    const handleUnit = (e) => {
        const unit = e.target.value;
        // console.log(group);
        if (unit === "All") {
            setSearchData(data);
        } else {
            const searchedData = superfilterdata.filter(item =>
                item.Unit && item.Unit.toLowerCase().includes(unit.toLowerCase())
            );
            setSearchData(searchedData);
        }
    }

    const handleCatogory = (e) => {
        const category = e.target.value;
        // console.log(group);
        if (category === "All") {
            setSearchData(data);
        } else {
            const searchedData = superfilterdata.filter(item =>
                item.Category && item.Category.toLowerCase().includes(category.toLowerCase())
            );
            setSearchData(searchedData);
        }
    }
    const handleReqamount = (e) => {
        const reqamount = e.target.value;
        // console.log(group);
        if (reqamount === "All") {
            setSearchData(data);
        } else {
            const searchedData = superfilterdata.filter(item => {
                const reqAmountStr = item.Req_Amount ? String(item.Req_Amount) : "";
                return reqAmountStr.includes(reqamount);
            });
            setSearchData(searchedData);
        }
    }
    const handleSubmitteddate = (e) => {
        const submitted = e.target.value;
        // console.log(group);
        if (submitted === "All") {
            setSearchData(data);
        } else {
            const searchedData = superfilterdata.filter(item =>
                item.Submitted && item.Submitted.toLowerCase().includes(submitted.toLowerCase())
            );
            setSearchData(searchedData);
        }
    }

    const handlereset = () => {
        setFilters({
            inputvalue: "",
            year: "All",
            base: "All",
            group: "All",
            unit: "All",
            category: "All",
            reqamount: "All",
            submitted: "All"
        });
    }

    return (
        <div className='Filter_module_box'>
            <div className='form_div'>
                <form method="post" action="">
                    <div className='d-flex justify_space_between'>
                        <span className="icon-filter filter_icon"> <label className='filtername'>Filter by</label></span>
                        <a href='' onClick={handlereset}>Clear All</a>
                    </div>
                    <div>
                        <input type='text' className='input_filter' placeholder='Search ID/Title' value={inputvalue} onChange={handleSearchChange} />
                        <span className="p_search icon-search"></span>
                    </div>
                    <div className=''>
                        <div className='d-flex mrt5'>
                            <div className='mr14'>
                                <label className='fw600'>Fiscal Year</label>
                                <div className="select-wrapper">
                                    <select className='customize_select' onChange={handleyearchange}>
                                        <option>All</option>
                                        <option value='2024'>2024</option>
                                        <option value='2023'>2023</option>
                                        <option value='2022'>2022</option>
                                    </select>
                                    {/* {tabledata.map((item) => {
                                            return <option key={item.id}>{item.Submitted}</option>
                                        })} */}
                                </div>
                            </div>
                            <div className='mr14'>
                                <label className='fw600'>Drill</label>
                                <div className="select-wrapper">
                                    <select className='customize_select'>
                                        <option>All</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mrt5'>
                            <div className='mr14'>
                                <label className='fw600'>Base</label>
                                <div className="select-wrapper">
                                    <select className='customize_select' onChange={handleBase}>
                                        <option value='All'>All</option>
                                        {[...new Set(superfilterdata.map(item => item.Base))]
                                            .map((base, index) => (
                                                <option key={index} value={base}>{base}</option>
                                            ))}
                                    </select>

                                </div>
                            </div>
                            <div className='mr14'>
                                <label className='fw600'>Group</label>
                                <div className="select-wrapper">
                                    <select className='customize_select' onChange={handleGroup}>
                                        <option>All</option>
                                        {[...new Set(superfilterdata.map((item) => item.Group))]
                                            .map((group, index) => (<option key={index} value={group}>{group}</option>
                                            ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mrt5'>
                            <div className='mr14'>
                                <label className='fw600'>Unit</label>
                                <div className="select-wrapper">
                                    <select className='customize_select' onChange={handleUnit}>
                                        <option>All</option>
                                        {[...new Set(superfilterdata.map((item) => item.Unit))]
                                            .map((unit, index) => (
                                                <option key={index} value={unit}>{unit}</option>
                                            ))}
                                    </select>
                                </div>
                            </div>
                            <div className='mr14'>
                                <label className='fw600'>Category</label>
                                <div className="select-wrapper">
                                    <select className='customize_select' onChange={handleCatogory}>
                                        <option>All</option>
                                        {[...new Set(superfilterdata.map((item) => item.Category))]
                                            .map((category, index) => (
                                                <option key={index} value={category}>{category}</option>
                                            ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mrt5'>
                            <div className='mr14'>
                                <label className='fw600'>Requirement Amount</label>
                                <div className="select-wrapper">
                                    <select className='customize_select' onChange={handleReqamount}>
                                        <option>All</option>
                                        {[...new Set(superfilterdata.map((item) => item.Req_Amount))]
                                            .map((reqamount, index) => (
                                                <option key={index} value={reqamount}>{reqamount}</option>
                                            ))}
                                    </select>
                                </div>
                            </div>
                            <div className='mr14'>
                                <label className='fw600'>Submitted Date</label>
                                <div className="select-wrapper">
                                    <select className='customize_select' onChange={handleSubmitteddate}>
                                        <option>All</option>
                                        {[...new Set(superfilterdata.map((item) => item.Submitted))]
                                            .map((submitted, index) => (
                                                <option key={index} value={submitted}>{submitted}</option>
                                            ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div>
                    <hr className="dashed-line" />
                </div>
                <div className='cards_module'>
                    <div className='card1'>
                        <div className=''>
                            <p>TOTAL REQUIREMENTS</p>
                            <p>{"$" + Number(totalrequirements).toFixed(2)}</p>
                        </div>
                        <div className=''>
                            <span>{totalnumber}</span>
                        </div>
                    </div>
                    {/* <div className='card2'>
                        {data.map((item) => (
                            <Kip_cards num={item.num} name={item.name} cards_background_color={item.cards_background_color} cards_color={item.cards_color} />
                        ))
                        }
                        {/* <Kip_cards/> *
                    </div> */}
                    <div className='card2'>
                        <Kip_cards num={statusCount['Waiting for unit']} value="Waiting for unit" name="UNIT" cards_background_color="kpcard1" cards_color="kpcards1" />
                        <Kip_cards num={statusCount['Waiting for FMB']} value="Waiting for FMB" name="FMB" cards_background_color="kpcard2" cards_color="kpcards2" />
                        <Kip_cards num={statusCount['Waiting for NAF PANEL']} value="Waiting for NAF PANEL" name="NAF PANEL" cards_background_color="kpcard3" cards_color="kpcards3" />
                        <Kip_cards num={statusCount['Waiting for AETC Group']} value="Waiting for AETC Group" name="AETC GROUP" cards_background_color="kpcard4" cards_color="kpcards4" />
                        <Kip_cards num={statusCount['Waiting for BOARD']} value="Waiting for BOARD" name="BOARD" cards_background_color="kpcard5" cards_color="kpcards5" />
                        <Kip_cards num={statusCount['Waiting for COUNCIL']} value="Waiting for COUNCIL" name="COUNCIL" cards_background_color="kpcard6" cards_color="kpcards6" />
                    </div>
                </div>
                <div>
                    <hr className="dashed-line" />
                </div>
                <div className='funding_module'>
                    <Funding_module />
                </div>
            </div>
        </div>
    )
}

export default Filter_module
