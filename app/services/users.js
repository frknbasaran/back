var User = $("User");

module.exports = {
  getUserWithToken: function (token, next) {
    User.findOne({
      "tokens": token
    }).exec()
      .then(function (user) {
        if (!user) {
          next(false);
        } else {
          next(user.toObject());
        }
      })
      .then(null, function () {
        next(false);
      });
  }
};