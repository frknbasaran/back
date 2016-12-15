var users$ = require(__dirname + '/../app/services/users');

var wss = new require("ws").Server;

module.exports = function (server, next) {
  var _wss = new wss({server: server});

  global.clients = {};

  var __closeWithSecurityNeed = function (ws) {
    ws.close(4001);
  };

  var __send = function (slug, data) {
    global.clients[slug].send(JSON.stringify(data));
  };

  var __defineEvents = function (ws, slug) {
    ws.on("message", function (obj) {
      var req = JSON.parse(obj);
      console.log('[' + slug + ']', req);

      if (req.action === 'send_message') {
        var data = req.data;
        var token = global.clients[slug].__data.token;
        __send(slug, {
          action: req.action,
          data: {
            message: '[' + data.to + '] ' + data.message
          }
        });
      }
    });

    ws.on("close", function () {
      console.log(slug, 'connection lost');
      delete global.clients[slug];
    });
  };

  _wss.on("connection", function (ws) {
    var token = ws.upgradeReq.url.slice(1);

    if (!token) {
      __closeWithSecurityNeed(ws);
    } else {
      users$.getUserWithToken(token)
      	.then(function (user){
	  user.token = token;
	  ws__data = user;
	  global.clients[user.slug] = ws;
	  console.log(user.slug, 'connected!');
	  __defineEvents(ws, user.slug);
	})
	.catch(function () {
	  __closeWithSecurityNeed(ws);
	});
      });
    }
  });

  next();
};
