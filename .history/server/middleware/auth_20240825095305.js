// middleware/auth.js
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/jwtSecret");

const auth = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied." });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error("Token verification error:", err.message);
    res.status(401).json({ error: "Token is invalid." });
  }
};

module.exports = auth;
