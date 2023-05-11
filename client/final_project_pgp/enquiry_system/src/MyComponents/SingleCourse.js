import { useState } from 'react';
import { useEffect} from 'react';
import CourseLogo from "./CourseLogo";
import CourseVideo from "./CourseVideo";
import CourseP from "./CourseP";
import React  from 'react';
import base_url from '../api/bootapi';
import axios from 'axios';
import CourseTable from './CourseTable';
import {useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button } from "reactstrap";


const SingleCourse = ({adminLoggedIn}) => {
   const {id:courseId} = useParams();
   const [courseName,setCourseName] = useState();
    const getAllCourseLogosFromServer=()=>
    {
    axios.get(`${base_url}/courselogos`).then (   //promise
    (response)=>
    {
       //success
       //console.log(response);
       console.log(response.data);       
       setCourseLogos(response.data);
    },
    (error)=>{
       //for error
       console.log(error);
    }
   );
};

useEffect(()=>
{
    getAllCourseLogosFromServer();
},[]
);


    //function to call server
    const getSingleCourseDetailsFromServer=()=>
    {
        axios.get(`${base_url}/courses`).then (   //promise
         (response)=>
         {
            //success
            console.log(response.data);
            setCourses(response.data);
            for(let i=0; i<response.data.length;i++){
               if(response.data[i].id==parseInt(courseId)){
                  setCourseName(response.data[i].title)
               }
            }
         },
         (error)=>{
            //for error
            console.log(error);
         }
        );
    };

    useEffect(()=>
    {
        getSingleCourseDetailsFromServer();
    },[]
    );
   

const getAllCourseVideosFromServer=()=>
{
axios.get(`${base_url}/coursevideos`).then (   //promise
(response)=>
{
   //success
   console.log(response.data);       
   setCourseVideos(response.data);
},
(error)=>{
   //for error
   console.log(error);
}
);
};

useEffect(()=>
{
getAllCourseVideosFromServer();
},[]
);
const[courselogos,setCourseLogos]=useState([
]);

const[courses,setCourses]=useState([
]);
const[coursevideos,setCourseVideos]=useState([
]);

  return (<>
    <div>
    {courselogos.length>0? courselogos.filter(({id})=>id!==0).map((item)=><CourseLogo key={item.id} courseLogo={item} />)
               :"No course logos" }   
    </div>

    <div>
    {courses.length>0? courses.filter(({id})=>id!==0 && id==parseInt(courseId)).map((item)=><CourseP key={item.id} course={item} />)
           :"No courses" }
        </div>

        <div>
            {courses.length>0? courses.filter(({id})=>id!==0 && id==parseInt(courseId)).map((item)=><CourseTable key={item.id} course={item} />)
           :"No courses" }
        </div>
        {adminLoggedIn==="true" && 
        
        
        <Link to={`/add-batches/${courseName}`}>
    <Button type="submit" color="success" ml-3>Add batch</Button>
      </Link> }
<div>   
<h1 align="center ">Creative Corner</h1>
{coursevideos.length>0? coursevideos.filter(({id})=>id!==0).map((item)=><CourseVideo key={item.id} courseVideo={item}
  courseVideos={coursevideos}
  setCourseVideos={setCourseVideos} />)
:"No course videos" }
</div>

</>
  )
}

export default SingleCourse
