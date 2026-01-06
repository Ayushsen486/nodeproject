const path = require('path');
const fs = require('fs');
const rootDir = require('../routes/utils/pathUtils');

module.exports = class Home{
  constructor(homeName,location,city,rents,rating)
  {
  this.homeName=homeName;
  this.location=location;
  this.city=city;
  this.rents=rents;
  this.rating=rating;
  this.photourl='https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg';
  this.id = Date.now();
}

save(){
  const homedatapath = path.join(rootDir,'data','homes.json');

  // Read existing data first
  fs.readFile(homedatapath, (err, data) => {
    let homes = [];
    if (!err) {
      try {
        homes = JSON.parse(data);
      } catch (parseErr) {
        console.log('Error parsing homes.json:', parseErr);
      }
    }

    // Add new home
    homes.push(this);

    // Write back to file
    fs.writeFile(homedatapath, JSON.stringify(homes, null, 2), error => {
      if (error) {
        console.log("File writing error:", error);
      } else {
        console.log("Home saved successfully");
      }
    });
  });
}

static fetchAll(callback) {
  const homedatapath = path.join(rootDir,'data','homes.json');

  fs.readFile(homedatapath, (err, data) => {
    if (err) {
      console.log('Error reading homes.json:', err);
      return callback([]);
    }

    try {
      const homes = JSON.parse(data);
      callback(homes);
    } catch (parseErr) {
      console.log('Error parsing homes.json:', parseErr);
      callback([]);
    }
  });
}
};