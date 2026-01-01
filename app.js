const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use ((req,res,next) => {
  console.log("first middleware",req.url,req.method);
  next();
});

app.use ((req,res,next) => {
  console.log("second middleware",req.url,req.method);
  next(); 
});

//app.use((req,res,next) => {
//console.log("third middleware",req.url,req.method);
//res.send("<p>welcome to my application</p>");
//})
app.get("/",(req,res,next) =>{
  console.log("handling for / path ");
  res.send("<h1>welcome to home page</h1>");
})
app.get("/contact-us",(req,res,next) =>{
  console.log("handling for /contact-us path ");
  res.send(`
    <html>
      <head>
        <title>Contact Us</title>
      </head>
      <body>
        <h1>Contact Us</h1>
        <form action="/contact-us" method="POST">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required><br><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br><br>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
})

app.post("/contact-us", (req, res) => {
  console.log("Form submitted:", req.body);
  res.send("Thank you for contacting us!");
})

const PORT = 3004;
app.listen(PORT,()=>{
console.log(`server is running on address http://localhost:${PORT}`);
});