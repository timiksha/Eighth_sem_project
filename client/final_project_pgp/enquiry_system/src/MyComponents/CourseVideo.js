import React from 'react';

const CourseVideo = ({ courseVideo }) => {
  console.log(courseVideo.title.replace('watch?v=','embed/'))

  return (
    <>
      <iframe style={{margin:"20px"}} height={"250px"} width={"350px"} src={courseVideo.title} 
       ></iframe>
    </>
  );
};

export default CourseVideo;