import React from "react";
import "./singleItem.css";
import axios from "axios";

const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/users/${id}`);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

const SingleItem = ({ photo }) => {
  const PF = "http://localhost:5000/images/";
  console.log(photo)
  return (
    <div className="photowrapper">
      <div>
        <img className="image" src={PF + photo.photo} alt="" />
      </div>
      <div>
        <button className="button" onClick={() => handleDelete(photo._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
