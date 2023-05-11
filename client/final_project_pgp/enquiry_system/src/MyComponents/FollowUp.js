import React, { useEffect, useState } from 'react';
import axios from 'axios';
import base_url from "../api/bootapi";
import { Button, Form, Input, Label , FormGroup} from 'reactstrap';

const FollowUp = () => {
  const [queries, setQueries] = useState([]);
  const getAllQueries = () => {
    axios
      .get(`${base_url}/queries`)
      .then((response) => {
        //success
        console.log(response.data);
        setQueries(response.data);
      })
      .catch((error) => {
        //for error
        console.log(error);
      });
  };

  const handleDeleteQuery = async (query) => {
    
    console.log(query)
    const response = await axios.delete(`${base_url}/queries/${query.email}`,query)
    await getAllQueries();
  }

  useEffect(() => {
    getAllQueries();
  }, []);
  return (
    <>
    {queries ? 
    <div>
      <h1 align="center">All Queries</h1>
      <table className="table">
        <thead>
          <tr>

            <th>Your Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Query</th>
            <th>Feedback</th>
          </tr>
        </thead>
        {queries.map((query) => (
        <>
        <tbody>
            <tr key={query.email}>
              <td>{query.name}</td>
              <td>{query.email}</td>
              <td>{query.mobile}</td>
              <td>{query.queryName}</td>
              <td>{query.followUp}</td>
              <td><Button onClick={()=>{handleDeleteQuery(query);}} color="danger">Delete</Button></td>
            </tr>
        </tbody>
        </>
        ))}
      </table>
    </div>
    : "No queries"}
    </>
  )
}

export default FollowUp;
