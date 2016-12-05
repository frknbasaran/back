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
                  entry_id: entry.id
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
  }
};
