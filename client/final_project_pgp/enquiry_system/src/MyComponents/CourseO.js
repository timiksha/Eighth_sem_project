import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";

const CourseO = ({ course }) => {
  return (
    <>
      <Card>
        <CardBody>
          <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
          <CardText style={{ textDecoration: 'none' }}>{course.description }</CardText>
          <Container className="text-center">
          </Container>
        </CardBody>
      </Card>
    </>
  );
};

export default CourseO;
