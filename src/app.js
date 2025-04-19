const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();
app.use("/admin", adminAuth);

app.get("/login", (req, res) => {
  res.send("Login page");
});

app.get("/users", userAuth, (req, res) => {
  try {
    res.send("all users data");
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.get("/admin/getAllUsers", (req, res, next) => {
  throw new Error(" Error occurred");
  res.send("all users data");
});

app.get("/admin/deleteUser", (req, res, next) => {
  res.send("User deleted");
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
