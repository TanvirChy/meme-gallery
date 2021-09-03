const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const linkMeme = new Schema({

    link: {
        type: String,
        
    },

});

const LinkMeme = mongoose.model('Link', linkMeme);

module.exports = LinkMeme;