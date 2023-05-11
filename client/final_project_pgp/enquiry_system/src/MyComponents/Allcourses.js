import React,{useState, useEffect} from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "../api/bootapi";

const Allcourses = ()=>{
    useEffect(()=>{
        document.title="All Courses";
    },[]);

    //function to call server
    const getAllCoursesFromServer=()=>
    {
        axios.get(`${base_url}/courses`).then (   //promise
         (response)=>
         {
            //success
            console.log(response.data);
            setCourses(response.data);
         },
         (error)=>{
            //for error
            console.log(error);
         }
        );
    };

    useEffect(()=>
    {
        getAllCoursesFromServer();
    },[]
    );
    
    const[courses,setCourses]=useState([
    ]);

const removeCourseById=(id)=>{
    setCourses(courses.filter((c )=>c.id  !==id));
}

    return (<>
        <div>
            <h1 align="center ">All Courses</h1>
            {courses.length>0? courses.filter(({id})=>id!==0).map((item)=><Course key={item.id} course={item} remove={removeCourseById}/>)
           :"No courses" }
        </div>
</>
    );
};

export default Allcourses;