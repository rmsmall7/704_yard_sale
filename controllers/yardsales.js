const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
<<<<<<< HEAD
=======
    console.log('adlito was here')
>>>>>>> 1170ef201aa7073c40b62560ae443b29fb097802
    db.Yard
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Yard
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
<<<<<<< HEAD
=======
    console.log(req.body);
    console.log("Controller")
    
>>>>>>> 1170ef201aa7073c40b62560ae443b29fb097802
    db.Yard
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel);
        
       return res.json(dbModel)
      } )
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Yard
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Yard
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
