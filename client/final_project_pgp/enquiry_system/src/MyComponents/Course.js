import React from "react";
import{
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import {toast} from "react-toastify";

const Course = ({course,remove}) => {
  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        toast.success("course deleted");
        remove(id);
      },
      (error)=>{
        toast.error("Course not deleted");
      }
    );
  };
  
  return (<>
    <Card>
      <CardBody>

<CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
<CardText>{course.description}</CardText>
<Container className="text-center">
           
<Button color="danger" onClick={()=>
{
  deleteCourse(course.id);
}}>Delete</Button>

</Container>
</CardBody>
</Card>
</>
  );
};

export default Course;