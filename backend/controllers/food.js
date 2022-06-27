const Food = require("../models/food")

const getAll = (req, res) => {
    Food.find({}).then(food=>{
     res.json(food)
})
};

const create = (req, res) => {
    Food.create(req.body)
    .then((food) => {
      res.json(food);
    });
  };

const update = (req, res) => {
  Food.findByIdAndUpdate(req.params.food, req.body).then(newFood => res.json(newFood));
}

const deleteOne = (req, res) => {
  Food.findByIdAndDelete(req.params.food).then(newFood => {
      res.json(newFood);
  });
}
  
module.exports = {
  getAll,
  create,
  update,
  deleteOne,
}