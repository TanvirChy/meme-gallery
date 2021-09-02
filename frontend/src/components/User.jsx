import React, { useState } from "react";
import axios from "axios";

import './user.css'


const User = () => {
  const [newUser, setNewUser] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newUser.photo);

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

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };

  return (
    <div className="userwrapper">
      <div className='addlink'>
        <form>
          <input type="text" />
          <button type="submit" >Add meme</button>
        </form>
      </div>
      <div className='addfile'>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handlePhoto}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default User;
