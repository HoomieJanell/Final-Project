const db = require("../models");

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUse) {
      res.json(dbUse);
    });
  });
};
