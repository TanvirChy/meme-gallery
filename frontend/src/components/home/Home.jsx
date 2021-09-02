import axios from "axios";
import React, { useEffect, useState } from "react";
import Photos from "../photo/Photos";


import './home.css'



const Home = () => {
  const [photos, setPhotos] = useState([]);

 useEffect(() => {
  const fetchPhotos = async ()=>{
    const res = await axios.get("http://localhost:5000/users/")
    setPhotos(res.data)
  }
fetchPhotos()
}, []);

 
  // {
  //   console.log(photos);
  // }
  return (
    <div className="homeWrapper">
      <div>
        {photos ? <Photos photos={photos} /> : <p>there was no photos</p>}
      
      </div>
    </div>
  );
};

export default Home;

 