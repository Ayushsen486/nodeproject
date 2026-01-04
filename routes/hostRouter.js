//local module 
const path = require('path');
const rootDir = require('./utils/pathUtils');
const express= require('express');
const hostRouter = express.Router();

hostRouter.get("/add-home",(req,res,next) => {
  console.log("add home page show ho raha hai ");
  res.sendFile(path.join(rootDir,'routes','views','addhome.html'));

});
hostRouter.post("/add-home",(req,res,next) => {
 console.log(req.body);
  res.sendFile(path.join(rootDir,'routes','views','homeadd.html'));
});

module.exports = hostRouter