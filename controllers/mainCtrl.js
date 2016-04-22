var data = require('../models/data.js')

module.exports = {
  getName: function (req, res, next) {
    res.status(200).json(data[0]);
  },

  getLocation: function (req, res, next) {
    res.status(200).json(data[1]);
  },

  getOccupations: function (req, res, next) {
    res.status(200).json(data[2]);
  },

  getLatest: function (req, res, next) {
    res.status(200).json(data[2][0]);
  },

  getHobbies: function (req, res, next) {
    res.status(200).json(data[3]);
  },

  getHobbiesType: function (req, res, next) {
    // var type = req.params.type;
    // for (var key in data) {
    //
    //   }
    // }
    res.status(200).json(data)
  }

}
