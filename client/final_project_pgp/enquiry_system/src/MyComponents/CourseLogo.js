import React from 'react';

import { Card, CardBody, Container } from "reactstrap";

const CourseLogo = ({courseLogo}) => {
   return (<>
    <Card>
      <CardBody>
        <img src={courseLogo.title}  // Attach the onClick prop to the cover photo element
         style={{
          // Set the width to 200 pixels
          height: '150px', // Set the height to 150 pixels
          objectFit: 'cover' // Apply the "cover" object-fit property to scale the image within the specified dimensions while maintaining its aspect ratio
        }}  />
<Container className="text-center">
</Container>
</CardBody>
</Card>
</>
  );
  };

export default CourseLogo;