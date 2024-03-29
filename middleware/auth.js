const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    //check for token
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

    //verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = verified.userId;

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}

module.exports = auth;