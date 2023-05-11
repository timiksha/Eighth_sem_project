import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactUs from './ContactUs';
import base_url from "../api/bootapi";
import { Button, Form, Input, Label , FormGroup} from 'reactstrap';

const Query = () => {
  useEffect(() => {
    document.title = 'All Queries';
  }, []);

  const [queries, setQueries] = useState([]);
  const [currentQuery, setCurrentQuery] = useState({email:"",name:"",mobile:"",followUp:""})

  const handleSubmitFollowUp = async (e) => {
    const response = await axios.put(`${base_url}/queries`,currentQuery)
    await getAllQueries();
  }
  
//   const handleChangeFollowUp = (e) => {
//     const query = e.target.getAttribute('data');
//     const updatedQuery = {...query,followUp:e.target.value}
//     setQueries(prevState => prevState.map(item=>item.email==query.email?updatedQuery:item))
//     console.log(queries[0].followUp)
//   }

  //function to call server
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
              <td><Form>
            <FormGroup>
            <Input type="text" name="text" id="exampleEmail" data={query} placeholder="Enter feedback" value={currentQuery.email==query.email?currentQuery.followUp:query.followUp} onChange={(e)=>setCurrentQuery({...query,followUp:e.target.value})} />
            </FormGroup>    
            <Button data={currentQuery} onClick={handleSubmitFollowUp}>Submit</Button>
        </Form></td>
            </tr>
        </tbody>
        </>
        ))}
      </table>
    </div>
    : "Loading Queries"}
    </>
  );
};

export default Query;
