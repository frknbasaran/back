var User = $("User");
var Promise = require("Promise");


module.exports = {
  getUserWithToken: function (token, next) {
    return new Promise(function (resolve, reject) {
      User.findOne({
        "tokens": token
      }).exec()
        .then(function (user) {
          if (!user) {
            reject(false);
          } else {
            resolve(user.toObject());
          }
        })
        .then(null, function () {
          reject(false);
        });
    });
  }
};
