var Topic = $("Topic");
var Entry = $("Entry");
var User = $("User");
var _ = require("lodash");
var n3xt = require("n3xt");

module.exports = {
  getProfileWithSlug: function (req, res) {
    var slug = req.params.slug;

    var userTask = function (next) {
      User.findOne({slug: slug})
        .then((function (user) {
          if (user) {
            this.user = user;
            next();
          } else {
            res.json({
              success: false,
              message: "böyle bi yazar yok"
            })
          }
        }).bind(this))
        .then(null, $error(res));
    };

    var lastEntriesTask = function (next) {
      Entry.find({user: this.user._id})
        .sort({createdAt: -1})
        .limit(10)
        .populate('topic')
        .then(function (entries) {
          next({
            last_entries: _.map(entries, function (entry) {
              return {
                id: entry.id,
                title: entry.topic.title
              };
            })
          });
        }).then(null, $error(res));
    };

    var mostLikedTask = function (data, next) {
      Entry.aggregate([{
          $match: {
            user: this.user._id
          }
        }, {
          "$project": {
            "id": 1,
            "topic": 1,
            "length": {"$size": "$up"}
          }
        }, {"$sort": {"length": -1}}, {"$limit": 5}])
        .exec()
        .then(function (entries) {
          return Entry.populate(entries, {path: 'topic'});
        })
        .then(function (entries) {
          data.most_liked = entries
            .filter(function (entry) {
              return entry.length;
            }).map(function (entry) {
              return {
                id: entry.id,
                title: entry.topic.title
              };
            });
          next(data);
        })
        .then(null, $error(res));
    };

    var likedTask = function (data, next) {
      Entry.find({up: this.user._id})
        .sort({createdAt: -1})
        .limit(10)
        .populate('topic')
        .then(function (entries) {
          data.liked = _.map(entries, function (entry) {
            return {
              id: entry.id,
              title: entry.topic.title
            };
          });
          next(data);
        }).then(null, $error(res));
    };

    n3xt([userTask,
      lastEntriesTask,
      mostLikedTask,
      likedTask,
      function (data) {
        data.username = this.user.username;
        res.json({
          success: true,
          data: data
        });
      }]);
  }
};