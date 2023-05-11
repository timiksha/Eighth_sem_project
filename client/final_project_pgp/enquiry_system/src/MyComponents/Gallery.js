import React, { useState, useEffect } from "react";
import Album from "./Album";
import axios from "axios";
import base_url from "../api/bootapi";
import { Link } from "react-router-dom";

const Gallery = () => {
  useEffect(() => {
    document.title = "All Albums";
  }, []);
  //function to call server
  const getAllAlbumsFromServer = () => {
    axios.get(`${base_url}/albums`).then(
      //promise
      (response) => {
        //success
        //console.log(response);
        console.log(response.data);
        setAlbums(response.data);
      },
      (error) => {
        //for error
        console.log(error);
      }
    );
  };
  
  //calling loading course function
  useEffect(() => {
    getAllAlbumsFromServer();
  }, []);
  const [albums, setAlbums] = useState([]);

  return (
    <div>
      <h1 align="center ">All Albums</h1>
      {albums.length > 0
        ? albums
            .filter(({ id }) => id !== 0)
            .map((item) => (
              <Link to={`/album/${item.id}/${item.title}`}>  
              {/* item =album */}
                <Album 
                  key={item.id}
                  album={item}
                  />
              </Link>
            ))
        : "No albums"}
    </div>
  );
};
export default Gallery;
