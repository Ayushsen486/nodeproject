  const path = require('path');
const rootDir = require('../routes/utils/pathUtils');
 exports.pageNotFound = (req,res,next) => {
  res.status(404).sendFile(path.join(rootDir, 'routes', 'views', '404.html'));
}