const router = require("express").Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
let Photo = require("../models/photoModel");
const LinkMeme = require("../models/linkModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.get("/", async (req, res) => {
  try {
    const photo = await Photo.find();
    res.status(200).json(photo);
  } catch (err) {
    res.status.json(err);
  }
});

router.post("/link", (req, res) => {
  console.log(req.body.link)
  const link = req.body.link;
  const newLink = {
    link,
  };
  const newMeme = new LinkMeme(newLink);

  newMeme
    .save()
    .then(() => res.json("add meme"))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/add").post(upload.single("photo"), (req, res) => {
  const photo = req.file.filename;

  const newUserData = {
    photo,
  };

  const Photos = new Photo(newUserData);

  Photos
    .save()
    .then(() => res.json("add meme"))
    .catch((err) => res.status(400).json("Error: " + err));
});


// get method

// delete method

router.delete("/:id", async (req, res) => {
  itemId = req.params.id;

  try {
    await Photo.findByIdAndDelete(itemId);
    res.status(200).json("deleted successfully");
  } catch (err) {
    res.status(200).json("delete fail");
  }
});

module.exports = router;
