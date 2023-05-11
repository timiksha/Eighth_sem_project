import React from "react";
import { Card, CardBody, CardSubtitle, Container } from "reactstrap";

const Album = ({ album }) => {
  return (
    <>
      <Card>
        <CardBody>
          <CardSubtitle className="font-weight-bold">
            {album.title}
          </CardSubtitle>
          <img
            src={album.coverPhoto} // Attach the onClick prop to the cover photo element
            style={{
              width: "200px",
              height: "150px",
              objectFit: "cover", // Apply the "cover" object-fit property to scale the image within the specified dimensions while maintaining its aspect ratio
            }}
          />
          <Container className="text-center"></Container>
        </CardBody>
      </Card>
    </>
  );
};

export default Album;
