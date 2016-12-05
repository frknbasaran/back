module.exports = {
  index: function (req, res) {
    res.json({
      success: true
    });
  },
  status: function (req, res) {
    res.json({
      success: true,
      data: {
        version: $package.version
      }
    });
  },
  default: function (req, res) {
    res.status(404).json({
      success: false,
      msg: "yok ki"
    });
  }
};
