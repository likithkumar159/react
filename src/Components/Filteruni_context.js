import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const Filteruni_context = createContext(null);

export const Filteruniversal = ({ children }) => {
    const [searchData, setSearchData] = useState([]);
    const [checkedData, setCheckedData] = useState([]);
    const [data, setData] = useState([]);
    const [strdata, setStrdata] = useState("")
    useEffect(() => {
        axios.get('http://localhost:8500/tabledata')
            .then((res) => {
                setData(res.data);
                const rowlength = res.data.length;
                setStrdata(rowlength);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <Filteruni_context.Provider value={{ searchData, setSearchData, strdata, setStrdata, checkedData, setCheckedData, data, setData }}>
            {children}
        </Filteruni_context.Provider>
    );
};


