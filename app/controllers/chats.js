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
  }
};