import React,{useState, useEffect} from "react";
import CourseO from "./CourseO";
import axios from "axios";
import base_url from "../api/bootapi";
import { Link } from "react-router-dom";
import CourseP from "./CourseP";

const CoursesOffered = ()=>{
    useEffect(()=>{
        document.title="Courses We Offer";
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
  
        return (
            <>
            <div>
                <h1 align="center ">All Courses</h1>
                {courses.length>0? courses.filter(({id})=>id!==0).map((item)=><Link to={`/singlecourse/${item.id}`}><CourseO key={item.id} course={item} /></Link>)
               :"No courses" }          
            </div>
            

            </>
        );
    };

export default CoursesOffered;