const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const userRouter = require("./routes/users");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;


app.use("/images", express.static(path.join(__dirname, "/images")));


mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Connected With Database"))
  .catch((err) => console.log(err));


app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
