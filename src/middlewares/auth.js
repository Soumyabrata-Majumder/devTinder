const adminAuth = (req, res, next) => {
  const token = "abcdef";

  if (token !== "abcdef") {
    return res.status(401).send("Unauthorized access");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "abc";

  if (token !== "abc") {
    return res.status(401).send("Unauthorized access");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
