 const Home = require('../models/home');
 const path = require('path');
const rootDir = require('../routes/utils/pathUtils');
 exports.getAddHome = (req,res,next) => {
  res.sendFile(path.join(rootDir,'routes','views','addhome.html'))};

   
  exports.postAddHome = (req,res,next) => {
    //console.log(" post rote kaam kar raha",req.body);
 const{homeName,location,city,rents,rating}= req.body;
 const home = new Home(homeName,location,city,rents,rating)
 home.save();
 res.sendFile(path.join(rootDir,'routes','views','homeadd.html'))
}

exports.gethome = (req,res,next) => {
  Home.fetchAll((registeredHomes) => {
    res.render('homes', { homes: registeredHomes });
  });
};


exports.gethomes = (req,res,next) => {
  res.sendFile(path.join(rootDir, 'routes', 'views', "home.html"));

};