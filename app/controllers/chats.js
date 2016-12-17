var chats$ = require(__dirname + '/../services/chats');

module.exports = {
  create: function (req, res) {
    chats$.createChat(req.body.users)
      .then(function (chat) {
        res.json({
          success: true,
          data: {
            chat: chat._id
          }
        });
      })
      .catch(function (err) {
        res.json({
          success: false,
          message: "kavuşamazsınız"
        })
      });
  },
  send: function (req, res) {
    var from_user = req.user_mdl;
    var to_slug = req.body.to;
    var message = req.body.message;

    chats$.sendMessage(from_user, to_slug, message)
      .then(function () {
        res.json({
          success: true
        })
      })
      .catch(function (err) {
        res.json({
          success: false
        })
      });
  }
};