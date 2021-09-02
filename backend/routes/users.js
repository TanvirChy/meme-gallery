const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let User = require('../models/user.model');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });



router.get('/',async(req,res)=>{
    try{
        const photo = await User.find();
        res.status(200).json(photo)
    } catch(err){
        res.status.json(err)
    }
})  



router.route('/add').post(upload.single('photo'), (req, res) => {
    // const name = req.body.name;
    // const birthdate = req.body.birthdate;
    const photo = req.file.filename;

    const newUserData = {
        // name,
        // birthdate,
        photo
    }

    const newUser = new User(newUserData);

    newUser.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

// get method

// delete method

router.delete("/:id",async (req,res)=>{
        itemId = req.params.id
    
        try{
            await User.findByIdAndDelete(itemId)
            res.status(200).json('deleted successfully')
        }catch(err){
            res.status(200).json('delete fail')
        }
    
})


module.exports = router;