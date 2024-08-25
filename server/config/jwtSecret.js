// server/config/jwtSecret.js
module.exports = {
  jwtSecret:
    process.env.JWT_SECRET ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjYWRmYTQyODZjZDQ2MDkxMjBiMTVjIn0sImlhdCI6MTcyNDU4Mjc1MywiZXhwIjoxNzI0NTg2MzUzfQ.O7ubYzpMkhxjPtg1S4kg1j__Eg5Zgx45kAf07XoXFxg",
};

