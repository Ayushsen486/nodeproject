
const express= require('express');
const hostRouter = express.Router();
//local module
const homesController = require('../controller/homes');
//controller call ho raha 
hostRouter.get("/add-home",homesController.getAddHome);
hostRouter.post("/add-home",homesController.postAddHome);

// Route to display all registered homes
hostRouter.get("/homes",homesController.gethome);
module.exports = hostRouter