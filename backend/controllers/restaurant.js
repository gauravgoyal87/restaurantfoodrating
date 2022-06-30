const Restaurant=require("../models/restaurant")

// Controller functions, separated from routes

const getAll = (req,res) => {
    Restaurant.find({}).then(restaurant=>{
     res.json(restaurant)
  });
};

const findByName = (req,res) => {
    Restaurant.find({name:req.params.name}).then(name=>{
        res.json(name)
    });
};

const findById = (req, res) => {
  Restaurant.find({id:req.params.id}).then(id => {
    res.json(id)
  });
};

const create = (req, res) => {
    Restaurant.create(req.body)
    .then((restaurant) => {
      res.json(restaurant);
    });
  };

const update = (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.restaurant, req.body).then(restaurant => res.json(restaurant));
}

const deleteOne = (req, res) => {
    Restaurant.findByIdAndDelete(req.params.restaurant)
    .then((restaurant) => {
      res.json(restaurant);
    });
  };

module.exports = {
  getAll,
  findByName,
  findById,
  create,
  update,
  deleteOne
}