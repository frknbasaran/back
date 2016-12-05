var Entry = $('Entry');
var Topic = $('Topic');

module.exports = {
  remove: function (req, res) {
    var id = req.params.id;

    Entry
      .findOne({id: id, user: req.user_mdl._id})
      .then(function (entry) {
        if (entry) {
          Topic.findOneAndUpdate({entries: entry._id}, {$pull: {entries: entry._id}})
            .then(function (topic) {
              if (topic.entries.length == 1) {
                topic.remove()
              }

              return entry.remove();
            })
            .then(function () {
              res.json({
                success: true
              });
            })
            .then(null, $error(res));
        } else {
          res.json({
            success: false,
            message: "böyle bir giriniz yok"
          })
        }
      })
      .then(null, $error(res));
  },
  create: function (req, res) {
    var topic_id = req.body.topic_id;
    var text = req.body.text;

    Topic.findOne({id: topic_id})
      .then(function (topic) {
        if (topic) {
          var entry = new Entry({text: text, user: req.user_mdl._id});
          entry.save()
            .then(function () {
              return Topic.update({id: topic_id}, {$push: {entries: entry._id}})
            })
            .then(function () {
              res.json({
                success: true,
                data: {
                  id: entry.id
                }
              })
            })
            .then(null, $error(res));
        } else {
          res.json({
            success: false,
            message: "başlık yok"
          })
        }
      })
      .then(null, $error(res));
  },
  fetch: function (req, res) {
    var id = req.params.id;

    Entry.findOne({id: id})
      .populate("user")
      .then(function (entry) {
        if (entry) {
          Topic.findOne({entries: entry._id})
            .then(function (topic) {
              if (topic) {
                res.json({
                  success: true,
                  data: {
                    id: entry.id,
                    text: entry.text,
                    upvotes_count: entry.up.length,
                    downvotes_count: entry.down.length,
                    created_at: entry.createdAt,
                    updated_at: entry.updatedAt,
                    user: {
                      id: entry.user._id,
                      username: entry.user.username,
                      slug: entry.user.slug
                    },
                    topic: {
                      id: topic.id,
                      title: topic.title,
                      slug: topic.slug,
                      created_at: topic.createdAt,
                      updated_at: topic.updatedAt
                    }
                  }
                });
              } else {
                res.json({
                  success: false,
                  message: "başlıksız entry mi olur?"
                })
              }
            })
            .then(null, $error(res));
        } else {
          res.json({
            success: false,
            message: "böyle bir entry yok"
          })
        }
      })
      .then(null, $error(res));
  }
};
