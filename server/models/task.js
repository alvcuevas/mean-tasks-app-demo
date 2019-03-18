const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Task = new Schema({
  id: {type: String},
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  status: { type: String },
  due_date: { type: String },
  init_hour: { type: String },
  final_hour: { type: String },
  enable: {type: Boolean, default: true},
  favorite: {type: Boolean, default: false}
},
{ collection: 'tasks' });

module.exports = mongoose.model('Task', Task);