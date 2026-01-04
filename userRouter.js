const express = require('express');
const userRouter = express.Router();
userRouter.get("/",(req,res,next) => {
  console.log("Welcome to airbnb");
  res.sendfile(path.join(__dirname,"views","home.html"));
});


module.exports = userRouter;