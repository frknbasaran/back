var Chat = $("Chat");
var User = $("User");
var Promise = require("promise");
var _ = require('lodash');

module.exports = {
  createChat: function (user_list) {
    return new Promise(function (resolve, reject) {
      User.find({
          slug: {$in: user_list},
          "settings.messaging": true
        })
        .then(function (users) {
          if (users.length == 2) {
            var chat = new Chat({
              users: users,
              slug: _
                .map(users, "slug")
                .sort()
                .join("-")
            });
            return chat.save();
          } else {
            reject(false);
          }
        })
        .then(function (chat) {
          resolve(chat);
        })
        .then(null, function (err) {
          reject(false);
        });
    });
  }
};
