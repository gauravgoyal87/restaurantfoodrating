const Restaurant=require("../models/restaurant")

const getAll = (req,res) => {
    Restaurant.find({}).then(restaurant=>{
     res.json(restaurant)
})
};

const findByName = (req,res)=>{
    Restaurant.find({name:req.params.name}).then(name=>{
        res.json(name)
    })
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
  create,
  update,
  deleteOne
}