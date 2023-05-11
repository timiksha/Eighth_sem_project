import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap';
import { Navigate, useNavigate} from "react-router-dom";
import axios from 'axios';
import base_url from "../api/bootapi";

const ContactUs = () => {
  useEffect(()=>{
    document.title="Contact Us";
},[]);

  const [pname, setPname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [query, setQuery] = useState('');
  const history = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {name,email,mobile,queryName:query,followUp:""}
    axios.post(`${base_url}/queries`,data)
    .then(function (response) {
      console.log(response);
      // redirect to the Query component to display all queries
      Navigate('/query');
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <Container>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>

        <FormGroup>
           <label for="pname" >Parent's Name</label>
          <Input
            type="text"
            name="pname"
            id="pname"
            placeholder="Enter name here"
            value={pname}
            onChange={(e) => setPname(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
           <label for="name" >Your Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
        <label for="email" >E-mail</label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
        <label for="mobile" >Mobile</label>
          <Input
            type="number"
            name="mob"
            id="mobile"
            placeholder="Enter mobile here"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
        <label for="query" >Your Query</label>
          <Input
            type="textarea"
            name="query"
            id="query"
            placeholder="Your message"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </FormGroup>

        <Button type="submit" color="success">Submit</Button>
      </Form>
      <br/>
  <br/>
      <p ><b> Vidyanidhi InfoTech Academy</b>
      <br/>  5th floor , Vidyanidhi Education Complex, JVPD Scheme, Juhu, Mumbai-400049
      <br/><b>Tel:</b> 26255629/26705498/61504639 
      <br/><b>Mobile:</b> 9029435311
      <br/><b>E-mail:</b> comps4every1@gmail.com</p>
    </Container>
  );
};

export default ContactUs;
