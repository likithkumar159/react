import React, { useContext} from 'react'
import { Filteruni_context } from './Filteruni_context';

const Kip_cards = (props) => {
    const {  setSearchData, data, kpiData,setabc } = useContext(Filteruni_context);
    // const superfilterdata = (searchData.length > 0 ? searchData : data)
    const handleSearch = (e) => {
        var cards_name = e.currentTarget.getAttribute('data-value');
        console.log(cards_name);
        if (cards_name === "Waiting for unit" || cards_name === "Waiting for AETC Group" || cards_name === "Waiting for FMB" || cards_name === "Waiting for NAF PANEL" || cards_name === "Waiting for BOARD" || cards_name === "Waiting for COUNCIL") {
            const filteredData = kpiData.filter(item =>
                item.Status && item.Status.toLowerCase().includes(cards_name.toLowerCase())
            );
            // const superthing = filteredData == "" ? "No Data Found" : filteredData;
            // const finalfilterdata = superthing? superthing : superfilterdata;
            // console.log(superthing);
            // setStrdata(superthing)
            setSearchData(filteredData);
            setabc(false);
        } else {

            setSearchData(data);
        }
    }
    return (
        <div className='card2_group' data-value={props.value} onClick={handleSearch}>
            <div className={`card2_line ${props.cards_background_color}`}></div>
            <div className={`${props.cards_color}`}>
                <p className='card2_num'>{(props.num)?props.num:0}</p>
                <p className='card2_name'>WAITING FOR {props.name}</p>
            </div>
        </div>
    )
}

export default Kip_cards