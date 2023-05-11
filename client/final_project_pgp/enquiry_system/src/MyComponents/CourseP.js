import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import { useTable, Table } from 'react-table';

const CourseP = ({ course }) => {
  return (
    <>
      <Card>
        <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
          <CardText>{course.description}</CardText>
          <CardText>{course.age}</CardText>
          <CardText>{course.hours}</CardText>
          <CardText>{course.fees}</CardText>
          


          <Container className="text-center">
            
          
          </Container>
        </CardBody>
      </Card>
    </>
  );
};

export default CourseP;
