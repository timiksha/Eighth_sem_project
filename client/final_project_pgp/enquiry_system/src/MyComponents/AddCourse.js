import React, {Fragment, useEffect,useState} from "react";
import {Form,Input, FormGroup , Button , Container} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";

const AddCourse=()=>{

    useEffect(()=>{
        document.title="Add Courses";
    },[]);

const[course,setCourse]=useState({}); //blank object is passed in useState
    //form handler function
    const handleForm=(e)=>
    {
        console.log(course);
        postDataToServer(course);
    e.preventDefault();
    };

    const postDataToServer=(data)=>{
        console.log('Add course:',data)
        axios.post(`${base_url}/courses`,data).then(   //promise
(response)=>{
    console.log(response);
console.log("success");
setCourse({id:"",title: "",description:"",age:"",hours:"",fees:""});
},
(error)=>
{
    console.log(error);
    console.log("error");
}
        );
        
    };

    return <Fragment>
        <h1 className="text-center my-3">Fill course details</h1>
        <Form onSubmit={handleForm}>

            <FormGroup>
                <label for="userId" >Course Id</label>
                <Input type="text"
                placeholder="Enter here"
                name="userId"
                id="userId"
                onChange={(e)=>{
                    setCourse({...course,id:e.target.value});
                }}
                />
            </FormGroup>

            <FormGroup>
                <label for="title" >Course Title</label>
                <Input type="text"
                placeholder="Enter title here"
                id="title"
                onChange={(e)=>{
                    setCourse({...course,title:e.target.value});
                }}
                />
            </FormGroup>

            <FormGroup>
                <label for="description" >
Course Description
                </label>
                <Input type="textarea" placeholder="Enter description here" id="description" style={{height:200}}
                  onChange={(e)=>{
                    setCourse({...course,description:e.target.value});
                }}/>
            </FormGroup>

            <FormGroup>
                <label for="age" >
Student's Age
                </label>
                <Input type="text" placeholder="Enter age here" id="age" 
                  onChange={(e)=>{
                    setCourse({...course,age:e.target.value});
                }}/>
            </FormGroup>

            
            <FormGroup>
                <label for="hours" >
Course Duration
                </label>
                <Input type="text" placeholder="Enter hours here" id="hours" 
                  onChange={(e)=>{
                    setCourse({...course,hours:e.target.value});
                }}/>
            </FormGroup>

            <FormGroup>
                <label for="fees" >
Fees
                </label>
                <Input type="text" placeholder="Enter fees here" id="fees" 
                  onChange={(e)=>{
                    setCourse({...course,fees:e.target.value});
                }}/>
            </FormGroup>

           

            <Container className="text-center">
                <Button type="submit" color="success" >Add course</Button>
                <Button type="reset" onClick={()=>
                {
                    setCourse({id:"",title: "",description:""})
                }}
                color="warning ml-2" >Clear</Button>
            </Container>

        </Form>
    </Fragment>
};
export default AddCourse;