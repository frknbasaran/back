var mongoose = require("mongoose");
var utils = require(__dirname + "/../../libs/utils");
var slug = require('slug');
var sha512 = require("js-sha512").sha512;
var randomToken = require("rand-token");

var User = new mongoose.Schema({
  "username": {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v) {
        return v.trim().length;
      },
      message: "{VALUE} cannot be empty"
    }
  },
  "slug": {
    type: String,
    default: "",
    unique: true,
    lowercase: true,
    trim: true
  },
  "permission": {
    type: Number,
    enum: $enum("user.permission", true),
    default: 0
  },
  "email": {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    default: "",
    required: true,
    validate: {
      validator: function (v) {
        return utils.emailPattern.test(v);
      },
      message: "Not a valid email address!"
    }
  },
  "password": {
    type: String,
    required: true,
    set: function (password) {
      return sha512(password);
    }
  },
  "tokens": [String],
  "entries": [{
    type: ObjectId
  }],
  "chats": [{
    type: ObjectId,
    ref: "Chat"
  }],
  "favorites": [{
    type: ObjectId,
    ref: "User"
  }],
  "followers": [{
    type: ObjectId,
    ref: "User"
  }],
  "blocked": [{
    type: ObjectId,
    ref: "User"
  }],
  settings: {
    messaging: {type: Boolean, default: true}
  }
}, {
  collection: "users",
  minimize: false,
  versionKey: false,
  timestamps: true
});

User.pre('save', function (next) {
  this.slug = slug(this.username);
  this.tokens.push(randomToken.generate(32));
  next();
});

mongoose.model("User", User);