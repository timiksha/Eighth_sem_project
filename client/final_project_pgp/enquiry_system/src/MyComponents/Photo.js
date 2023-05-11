import React, { useState, useEffect } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { useParams } from "react-router-dom";

import { Form, Input, FormGroup, Button, Container } from "reactstrap";

const Photo = ({ adminLoggedIn }) => {
  const [photos, setPhotos] = useState([]);
  const { name, id } = useParams(); //name nikal pa rahe hai album ka -Url mein %20
  const currentAlbumName = name.split("-").join(" ");
  const [singlePhoto, setSinglePhoto] = useState(null);
  const [photoId, setPhotoId] = useState(null);

  const getPhotos = () => {
    // Fetch more photos from the server for the album
    axios
      .get(`${base_url}/albums/photos`)
      .then((response) => {
        // Success
        console.log(response.data);
        setPhotos(
          response.data.filter((item) => item.albumTitle === currentAlbumName)
        );
      })
      .catch((error) => {
        // Error
        console.log(error);
      });
  };

  const changeCover = async (e) => {
    const imageLink = e.target.getAttribute("data"); //imagelink = current photo in the album
    const data = { id: id, title: currentAlbumName, coverPhoto: imageLink }; // id and title are of the album cover thats already set
    console.log(data);
    try {
      await axios.put(`${base_url}/albums`, data); // response=await, promise k liye wait krta h
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('file',singlePhoto)
    console.log('FORMDATA',formData)

    try {
      const data = {
        id: photoId,
        photoName: formData,
        albumTitle: currentAlbumName,
      };
      await axios.post(`${base_url}/albums/photos`, data);
      setPhotoId(null);
      setSinglePhoto(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      {photos.length > 0 ? (
        <div>
          {/* Render more photos inside the album */}
          {photos.map((item) => (
            <div
              style={{
                margin: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                style={{ height: "200px", width: "200px", objectFit: "cover" }}
                key={item.id}
                src={item.photoName}
              />
              {adminLoggedIn === "true" && (
                <button
                  style={{ width: "200px" }}
                  data={item.photoName}
                  onClick={changeCover}
                >
                  Set as album cover
                </button>
              )}
            </div>
          ))}
        </div>
      ) : null}

      {adminLoggedIn === "true" && (
        <>
          <Form>
            <FormGroup>
              <label for="photoId">Enter id</label>
              <Input
                type="text"
                onChange={(e) => setPhotoId(e.target.value)}
                name="photoId"
                id="photoId"
                required
              />
            </FormGroup>

            {/* <FormGroup>
              <label for="file">Choose files to Upload</label>
              <Input
                type="file"
                onChange={(e) => setSinglePhoto(e.target.files[0])}
                name="file"
                id="file"
                required
              />
            </FormGroup>

            <Container>
              <Container className="text-center">
                <Button
                  type="submit"
                  onClick={handleFileUpload}
                  color="success"
                >
                  Add Photo
                </Button>
                <Button
                  type="reset"
                  onClick={() => {
                    setPhotoId(null);
                    setSinglePhoto(null);
                  }}
                  color="warning ml-2"
                >
                  Clear
                </Button>
              </Container>
            </Container> */}
          </Form>
        </>
      )}
    </>
  );
};

export default Photo;
