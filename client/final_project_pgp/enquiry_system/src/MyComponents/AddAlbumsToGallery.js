import React, { Fragment, useEffect, useState } from "react";
import { Form, Input, FormGroup, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";

const AddAlbumsToGallery = () => {
  useEffect(() => {
    document.title = "Add Albums";
  }, []);

  const [album, setAlbum] = useState({}); //blank object is passed in useState

  //form handler function
  const handleForm = (e) => {
    console.log(album);
    postDataToServer(album);
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    console.log("Add album:", data);

    axios.post(`${base_url}/albums`, data).then(
      //promise
      (response) => {
        console.log("success");
        setAlbum({ id: "", title: "", coverPhoto: "" });
      },
      (error) => {
        console.log("error");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Album details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">Album Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setAlbum({ ...album, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="title">Album Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setAlbum({ ...album, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="file">Choose files to Upload</label>
          <Input
            type="file"
            name="file"
            id="file"
            onChange={(e) => {
              setAlbum({ ...album, coverPhoto: e.target.value });
            }}
          />
        </FormGroup>

        <Container className="text-center">
          <Button type="submit" color="success">
            Add Album
          </Button>
          <Button
            type="reset"
            onClick={() => {
              setAlbum({ id: "", title: "", coverPhoto: "" });
            }}
            color="warning ml-2"
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};
export default AddAlbumsToGallery;
