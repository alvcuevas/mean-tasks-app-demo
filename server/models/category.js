const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Category = new Schema ({
    text: {type: String},
    color: {type: String}
},
{collection: 'categories'});

module.exports = mongoose.model('Category', Category);