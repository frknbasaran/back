var noSecure = function (req, res, next) {
  var token = req.headers.token || $config.jokerToken;

  $("User").findOne({
      tokens: token
    })
    .exec()
    .then(function (user) {
      if (!user) {
        next();
      } else {
        req.user = user.toObject();
        req.user_mdl = user;
        res.status(409).json({
          success: false,
          message: "burdasın"
        });
      }
    })
    .then(null, $error(res));
};

var secure = function (req, res, next) {
  var token = req.headers.token || $config.jokerToken;

  $("User").findOne({
      tokens: token
    })
    .exec()
    .then(function (user) {
      if (!user) {
        res.status(401).json({
          success: false,
          message: "+18 burası"
        });
      } else {
        req.user = user.toObject();
        req.user_mdl = user;
        next();
      }
    })
    .then(null, $error(res));
};

var admin = function (req, res, next) {
  if (req.user) {
    if (req.user.permission > $enum("user.permission.MOD")) {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "olm sen allah mısın"
      });
    }
  } else {
    res.status(401).json({
      success: false,
      message: "+18 burası"
    });
  }
};

var moderator = function (req, res, next) {
  if (req.user) {
    if (req.user.permission > $enum("user.permission.USER")) {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "olm sen melek misin"
      });
    }
  } else {
    res.status(401).json({
      success: false,
      message: "+18 burası"
    });
  }
};

global.secure = secure;
global.noSecure = noSecure;
global.admin = admin;
global.moderator = moderator;