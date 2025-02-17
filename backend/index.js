const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
app.use((req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
res.header(
  "Access-Control-Allow-headers",
  "Origin, X-Requested-with, Content-Type, Accept"
);
next();
})
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// middleware
app.use(express.json());
//routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})