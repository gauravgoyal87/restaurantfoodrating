const Food = require("../models/food")

// Controller functions, separated from routes

const getAll = (req, res) => {
    Food.find({}).then(food=>{
     res.json(food)
})
};


const findByName = (req,res) => {
  Food.find({food:req.params.dish}).then(name=>{
      res.json(name)
  })
};


const findById = (req, res) => {
  Food.find({id:req.params.id}).then(id => {
    res.json(id)
  })
}

const create = (req, res) => {
    Food.create(req.body)
    .then((food) => {
      res.json(food);
    });
  };

const update = (req, res) => {
  Food.findByIdAndUpdate(req.params.food, req.body).then(newFood => res.json(newFood));
}

const updateByName = (req, res) => {
  Food.findOneAndUpdate({ dish:req.params.dish }, req.body, {new: true}).then(newFood => res.json(newFood));
}

const deleteOne = (req, res) => {
  Food.findByIdAndDelete(req.params.food).then(newFood => {
      res.json(newFood);
  });
}
  
module.exports = {
  getAll,
  findById,
  create,
  update,
  deleteOne,
  findByName,
  updateByName
}