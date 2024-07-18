import axios from 'axios';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Filteruni_context } from './Filteruni_context';

const Tablebody_1 = ({ toparent }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Track if more data is available
    const observer = useRef();

    const sum = data.reduce((total, item) => total + item.Req_Amount, 0);
    localStorage.setItem("totalReq", JSON.stringify(sum));

    const { searchData } = useContext(Filteruni_context);

    const getTableData = (page) => {
        setLoading(true);
        axios.get(`http://localhost:8500/tabledata?page=${page}`)
            .then((res) => {
                if (res.data.length > 0) {
                    setData(prevData => [...prevData, ...res.data]);
                    console.log(`Fetched data for page ${page}:`, res.data);
                } else {
                    setHasMore(false); // If no more data, set hasMore to false
                }
                const rowlength = res.data.length;
                toparent(rowlength);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        if (hasMore) {
            getTableData(page);
        }
    }, [page]);

    const lastRowRef = useRef();

    useEffect(() => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1);
            }
        });

        if (lastRowRef.current) {
            observer.current.observe(lastRowRef.current);
        }
    }, [loading, hasMore]);

    return (
        <div className='table_content'>
            <table>
                <thead className="table_head">
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>ID/Title </th>
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
                    {(searchData.length > 0 ? searchData : data).map((item, index) => (
                        <tr key={item.id} ref={index === data.length - 1 ? lastRowRef : null}>
                            <td><input type='checkbox' /></td>
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
                    ))}
                </tbody>
            </table>
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default Tablebody_1;
