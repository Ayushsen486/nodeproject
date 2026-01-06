//local module
const homesController = require('../controller/homes');
const express = require('express');
const userRouter = express.Router();
userRouter.get("/",homesController.gethomes)


module.exports = userRouter;