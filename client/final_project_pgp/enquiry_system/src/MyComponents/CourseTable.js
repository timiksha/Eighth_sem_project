import React, {useState} from "react";
import { Container } from "reactstrap";
import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from 'axios';
import { useEffect } from "react";
import { Link } from "react-router-dom";
const CourseTable = ({ course }) => {
  const [batches,setBatches] = useState([]);
  console.log(course.title)

  const getBatches = () => {
    axios
      .get(`${base_url}/batches`)
      .then((response) => {
        //success
        console.log(response.data);
        setBatches(response.data.filter(batch=>batch.courseName==course.title));
      })
      .catch((error) => {
        //for error
        console.log(error);
      });
  };

  useEffect(() => {
    getBatches();
  }, [])
  

  return (<>
    <table style={{ borderWidth: "1px", borderStyle:"solid",borderColor:"black",bordeCollapse:"collapse"}}>
      <thead>
        <tr style={{ borderWidth: "1px", borderStyle:"solid",borderColor:"black",bordeCollapse:"collapse"}}>
          
          <th  style={{ borderWidth: "1px", borderStyle:"solid",borderColor:"black",bordeCollapse:"collapse"}}>Batch</th>
          <th  style={{ borderWidth: "1px", borderStyle:"solid",borderColor:"black",bordeCollapse:"collapse"}}>Timing</th>
          <th  style={{ borderWidth: "1px", borderStyle:"solid",borderColor:"black",bordeCollapse:"collapse"}}>Final Presentation</th>
        </tr>
      </thead>
      <tbody >
        {batches.map((batch)=>
          <tr key={batch.id}>
            
            <td  style={{ borderWidth: "1px", borderStyle:"solid",borderColor:"black",bordeCollapse:"collapse"}}>{batch.batch}</td>
            <td  style={{ borderWidth: "1px", borderStyle:"solid",borderColor:"black",bordeCollapse:"collapse"}}>{batch.timing}</td>
            <td  style={{ borderWidth: "1px", borderStyle:"solid",borderColor:"black",bordeCollapse:"collapse"}}>{batch.finalPresentation}</td>
          </tr>
        )}
        
      </tbody>
    </table>
    <Container  >
  
    
    </Container>
</>
  );
};

export default CourseTable;
