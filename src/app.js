const express = require("express");

const app = express();

//Request handler
app.use("/home", (req, res) => {
  res.send("Welcome from home");
});

app.use("/test", (req, res) => {
  res.send("Test");
});

app.use("/hello", (req, res) => {
  res.send("Hello world");
});

app.use("/", (req, res) => {
  res.send("Welcome from dashboard");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
