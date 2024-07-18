import React, { useContext, useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import { Filteruni_context } from './Filteruni_context';

const Test = () => {
    const { searchData, checkedData } = useContext(Filteruni_context);
    const [dataForDownload, setDataForDownload] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8500/tabledata');
            const data = await response.json();
            const exceldata = (checkedData.length > 0) ? checkedData : (searchData.length > 0) ? searchData : data;
            setDataForDownload(exceldata);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchData, checkedData]);

    return (
        <>
            <CSVLink
                data={dataForDownload}
                filename={`Likith.csv`}
                target="_blank"
            >
                <button className='button_csv' type='button'>
                    <span className="icon-exportexcel"> Export to CSV</span>
                </button>
            </CSVLink>
        </>
    );
};

export default Test;

































































































// const Test = ({ surveyId }) => {
//     const { searchData, checkedData } = useContext(Filteruni_context);
//     const [dataForDownload, setDataForDownload] = useState([]);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:8500/tabledata');
//             const data = await response.json();
//             const exceldata = (checkedData.length > 0) ? checkedData : (searchData.length > 0) ? searchData : data;
//             setDataForDownload(exceldata);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [searchData, checkedData]);

//     return (
//         <>
//             <CSVLink
//                 data={dataForDownload}
//                 filename={`Likith_${surveyId}.csv`}
//                 target="_blank"
//             >
//                 <button className='button_csv' type='button'>
//                     <span className="icon-exportexcel"> Export to CSV</span>
//                 </button>
//             </CSVLink>
//         </>
//     );
// };

// export default Test;
