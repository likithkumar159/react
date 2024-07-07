import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ParentComponent from './ParentComponent';

const Tabledata = ({ onLengthUpdate, name }) => {
  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);

  const gettabaledata = () => {
    axios.get("http://localhost:8000/posts")
      .then((res) => {
        setData(res.data);
        const newLength = res.data.length;
        setLength(newLength);
        onLengthUpdate(newLength); // Send length to parent component
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    gettabaledata();
  }, []); // Only run on mount

  return (
    <>
      <h1>likith {name}</h1>
      <div className='table_box'>
        <div className='table_tabs'>
          <ParentComponent/>
        </div>
        <div className='table_content'>
          <table>
            <thead className="table_head">
              <tr>
                <th><input type="checkbox" name="" id="" /></th>
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
              {data.map((itemrefferdata) => (
                <tr key={itemrefferdata.id}>
                  <td><input type='checkbox' /></td>
                  <td>{itemrefferdata.title}</td>
                  <td>{itemrefferdata.Base}</td>
                  <td>{itemrefferdata.Group}</td>
                  <td>{itemrefferdata.Unit}</td>
                  <td>{itemrefferdata.Category}</td>
                  <td>{itemrefferdata.Score}</td>
                  <td>{itemrefferdata.Unit_Priority}</td>
                  <td>{itemrefferdata.Req_Amount}</td>
                  <td>{itemrefferdata.Submitted}</td>
                  <td>{itemrefferdata.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Tabledata;
