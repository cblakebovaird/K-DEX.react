const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    search: {
        type: String,
        required: true
    }
});

module.exports = Post = mongoose.model( "Search", searchSchema );