var User = $("User");
var Topic = $("Topic");
var n3xt = require("n3xt");
var _ = require("lodash");

module.exports = {
  query: function (req, res) {
    var q = req.query.q;
    var regex = new RegExp(q, 'i');

    var findUsersTask = function (next) {
      User.find({username: regex})
        .then(function (users) {
          next(_.map(users, function (user) {
            return {
              username: user.username,
              slug: user.slug
            }
          }));
        })
        .then(null, $error(res));
    };

    var findTopicsTask = function (users, next) {
      Topic.find({title: regex})
        .then(function (topics) {
          next(users, _.map(topics, function (topic) {
            return {
              id: topic.id,
              title: topic.title,
              slug: topic.slug
            }
          }));
        })
        .then(null, $error(res));
    };

    n3xt([
      findUsersTask,
      findTopicsTask,
      function (users, topics) {
        res.json({
          success: true,
          data: {
            users: users,
            topics: topics
          }
        });
      }]);
  }
};
