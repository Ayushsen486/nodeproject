const http = require('http');
const express = require('express');
  const app = express();
  app.use((req,res,next)=>{
    console.log("first middleware",req.url,req.method);
    res.send(('<p>welcome to my new application</> '));
    
  });

   app.use((req,res,next)=>{
    console.log("second middleware",req.url,req.method);
  });
  const server = http.createServer(app);
 const  PORT = 3004;
 server.listen(PORT,() => {
  console.log(`Server is running on address http://localhost:${PORT}`);
 });// base code for understanding express middleware



code aage ka 
  //http ke bina bhi chalega app(app act as server act as request handler) se kaam hoga 
  //const http = require('http');
 const express = require('express');
   const app = express();
   app.use("/",(req,res,next)=>{
     console.log("first middleware",req.url,req.method);
    // res.send(('<p>welcome to my new application</> '))
     next();
   });
    app.use("/submit",(req,res,next)=>{
     console.log("second middleware",req.url,req.method);
     res.send(('<p>thnaks<p/> '))
     next();
   });
 
    app.use("/",(req,res,next)=>{
     console.log("second middleware",req.url,req.method);
     res.send(('<p>thnaks<p/> '))
     next();
   });
 
   
  // no need to write const server app act wil as server
   //const server = http.createServer(app);
  const  PORT = 3004;
  // server.listen(PORT,() => { ki jagah app.listen likh dena
  app.listen(PORT,() => {
   console.log(`Server is running on address http://localhost:${PORT}`);
  });