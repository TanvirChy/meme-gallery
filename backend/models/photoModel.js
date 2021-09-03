const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const photoSchema = new Schema({

    photo: {
        type: String,
        
    },

});

const Photo = mongoose.model('User', photoSchema);

module.exports = Photo;