
//local module 
const path = require('path');

//extrenal module
const express = require('express');
const userRouter = require('./routes/UserRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./routes/utils/pathUtils');
const app = express();

app.use((req,res,next) => {
  console.log(req.url,req.method);
  next();
})

app.use(express.urlencoded());
app.use(userRouter)
app.use("/host",hostRouter)

app.use((req,res,next) => {
  res.status(404).sendFile(path.join(rootDir, 'routes', 'views', '404.html'));
})

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});