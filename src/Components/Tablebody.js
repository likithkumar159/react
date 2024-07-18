import React, { useContext, useState } from 'react'
import { Filteruni_context } from './Filteruni_context';

const Tablebody = () => {
    const { searchData, setSearchData, checkedData, setCheckedData, data } = useContext(Filteruni_context);
    const [allChecked, setAllChecked] = useState(false);

    const handleMainCheck = (e) => {
        const Checked = e.target.checked;
        setAllChecked(Checked);
        if (Checked) {
            setCheckedData(data);
            setSearchData(data);
        } else {
            setCheckedData([]);
            setSearchData([]);
        }
    }

    const handleCheck = (e, item) => {
        // console.log(item);
        if (e.target.checked) {
            setCheckedData(prevState => [...prevState, item]);
        } else {
            setCheckedData(prevState => prevState.filter(i => i.id !== item.id));
        }
    }

    return (
        <div className='table_content'>
            <table>
                <thead className="table_head">
                    <tr>
                        <th><input type="checkbox" checked={allChecked} onChange={handleMainCheck} /></th>
                        <th>ID/Title</th>
                        <th>Base</th>
                        <th>Group</th>
                        <th>Unit</th>
                        <th>Category</th>
                        <th>Score</th>
                        <th>Unit Priority</th>
                        <th>Req. Amount</th>
                        <th>Submitted</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (searchData.length > 0 ? searchData : data).map((item) => (
                            <tr key={item.id}>
                                <td><input type="checkbox" checked={checkedData.includes(item)} onChange={(e) => handleCheck(e, item)} /></td>
                                <td>{item.title}
                                    <p>{item.Description}</p>
                                </td>
                                <td>{item.Base}</td>
                                <td>{item.Group}</td>
                                <td>{item.Unit}</td>
                                <td>{item.Category}</td>
                                <td>{item.Score}</td>
                                <td>{item.Unit_Priority}</td>
                                <td>{item.Req_Amount === "-" ? <span className='Req_Amount'>-</span> : `$ ${item.Req_Amount}`}</td>
                                <td>{item.Submitted}</td>
                                <td>{item.Status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tablebody;
