const express = require("express");

const app = express();

//Request handler

//This will only handle get call to /user
app.get("/user/:userId", (req, res) => {
  console.log(req.params); //to get params(dynamic routes)
  console.log(req.query); //to get query params
  res.send({ firstName: "Soumyabrata", lastName: "Majumder" });
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
