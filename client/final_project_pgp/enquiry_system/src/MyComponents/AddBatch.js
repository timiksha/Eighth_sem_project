import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { FormGroup, Input,  Form, Container, Button } from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootapi';
import {useParams} from 'react-router-dom';

const AddBatch = () => {
    const {course} = useParams();
    const courseName = course.split("-").join(" ");
    const[batch,setBatch]=useState({}); //blank object is passed in useState
    useEffect(()=>{
        document.title="Add Batches";
    },[]);

    //form handler function
    const handleForm=(e)=>
    {
        setBatch({...batch,courseName})
        console.log(batch);
        postDataToServer(batch);
    e.preventDefault();
    };

    const postDataToServer=(data)=>{
        console.log('Add batch:',data)
        const newData = {...data,courseName}
        axios.post(`${base_url}/batches`,newData).then(   //promise
(response)=>{
    console.log(response);
console.log("success");
setBatch({d:"",batch:"",timing:"",finalPresentation:""});
},
(error)=>
{
    console.log(error);
    console.log("error");
}
        );
        
    };
    

    return <Fragment>
    <h1 className="text-center my-3">Fill batch details</h1>
    <Form onSubmit={handleForm}>
    <FormGroup>
                <label for="id" >
Id
                </label>
                <Input type="text" placeholder="Enter id here" id="id" 
                  onChange={(e)=>{
                    setBatch({...batch,id:e.target.value});
                }}/>
            </FormGroup>
     

            <FormGroup>
                <label for="batches" >
Batch
                </label>
                <Input type="text" placeholder="Enter batch here" id="batches" 
                  onChange={(e)=>{
                    setBatch({...batch,batch:e.target.value});
                }}/>
            </FormGroup>

            
            <FormGroup>
                <label for="timing" >
Timing
                </label>
                <Input type="text" placeholder="Enter timing here" id="timing" 
                  onChange={(e)=>{
                    setBatch({...batch,timing:e.target.value});
                }}/>
            </FormGroup>

            <FormGroup>
                <label for="finalPresentation" >
Final Presentation
                </label>
                <Input type="text" placeholder="Enter date of final presentation here" id="finalPresentation" 
                  onChange={(e)=>{
                    setBatch({...batch,finalPresentation:e.target.value});
                }}/>
            </FormGroup>
            
            <Container className="text-center">
                <Button type="submit" color="success" >Add batch</Button>
                
            </Container>

            </Form>
   </Fragment>
};

export default AddBatch;
