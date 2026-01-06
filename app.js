
//local module 
const path = require('path');
const errorController = require('./controller/error');
//extrenal module
const express = require('express');
const userRouter = require('./routes/UserRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./routes/utils/pathUtils');
const app = express();

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'routes', 'views'));

app.use((req,res,next) => {
  console.log(req.url,req.method);
  next();
})

app.use(express.urlencoded());
app.use(userRouter)
app.use("/host",hostRouter)

app.use(errorController.pageNotFound);

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});