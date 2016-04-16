// this is the userServerModel.js file located at server/models/userServerModel.js
// this file is to create the schema users in our mongodb

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var UsersSchema = new mongoose.Schema({
// 	name: {type: String, required: true},
// 	created_at: {type: Date, default: Date.now, required: true},
// 	orders: [{type: Schema.Types.ObjectId, ref: "Orders"}]
// })

// mongoose.model("Users", UsersSchema);