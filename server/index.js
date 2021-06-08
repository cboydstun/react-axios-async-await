//import express
const express = require('express')

//import cors
var cors = require('cors')

//create app
const app = express();

//reserve port
const PORT = 8080;

//use cors
app.use(cors())

//fundamental GET request
app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use("/users/", require('./routes/usersRoutes'))

//sanity check on PORT
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});