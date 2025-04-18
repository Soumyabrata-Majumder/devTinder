const express = require("express");

const app = express();

//Request handler

//This will only handle get call to /user
app.get("/user", (res, req) => {
  req.send({ firstName: "Soumyabrata", lastName: "Majumder" });
});

app.post("/user", (res, req) => {
  console.log("Save data to DB");
  req.send("Data successfully saved to the DB");
});

//This will match all the http method API calls to /test
app.use("/test", (req, res) => {
  res.send("Test");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
