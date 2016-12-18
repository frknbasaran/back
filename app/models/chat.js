var mongoose = require("mongoose");
var Message = require(__dirname + "/message");

var Chat = new mongoose.Schema({
  users: [{type: ObjectId, ref: 'User'}],
  messages: [Message],
  slug: {type: String, required: true, unique: true},
  date: {type: Date, required: true, default: Date.now}
}, {
  collection: "chats",
  minimize: false,
  versionKey: false
});

mongoose.model("Chat", Chat);