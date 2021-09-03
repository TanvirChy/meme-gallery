import React, { useState } from "react";
import axios from "axios";

import "./photo.css";

const Photo = () => {
  const [photos, setNewPhotos] = useState({
    photo: "",
  });
  const [link, setLink] = useState('');
  console.log(link)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photos.photo);

    axios
      .post("http://localhost:5000/users/add/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    window.location.reload();
  };

  const handleLinkSubmit = async (e) => {
    e.preventDefault();
    console.log(link)
    await axios.post("http://localhost:5000/users/link/", link);
    

    window.location.reload();
  };

  

  const handlePhoto = (e) => {
    setNewPhotos({ ...photos, photo: e.target.files[0] });
  };

  return (
    <div className="userwrapper">
      <div className="addlink">
        <form onSubmit={handleLinkSubmit}>
          <input type="text" value={link} onChange={e=>setLink(e.target.value)} />
          <button type="submit">Add meme</button>
        </form>
      </div>
      <div className="addfile">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handlePhoto}
          />

          <button type="submit" >Upload</button>
        </form>
      </div>
    </div>
  );
};

export default Photo;
