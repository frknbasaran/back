var mongoose = require("mongoose");

var Message = new mongoose.Schema({
  message: {type: String, required: true},
  user: {type: ObjectId, ref: "User", required: true}
}, {
  collection: "messages",
  minimize: false,
  versionKey: false,
  timestamps: true
});

var Chat = new mongoose.Schema({
  users: [{type: ObjectId, ref: 'User'}],
  messages: [Message],
  slug: {type: String, required: true, unique: true}
}, {
  collection: "chats",
  minimize: false,
  versionKey: false,
  timestamps: true
});

mongoose.model("Chat", Chat);