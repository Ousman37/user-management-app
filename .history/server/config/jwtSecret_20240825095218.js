// server/config/jwtSecret.js
module.exports = {
  jwtSecret:
    process.env.JWT_SECRET ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjYWRmYTQyODZjZDQ2MDkxMjBiMTVjIn0sImlhdCI6MTcyNDU3MTc0MCwiZXhwIjoxNzI0NTc1MzQwfQ.VeQDWE78eUoZj_pDfyZxV9gmZNTLCuorUb4RQ9uPsVI",
};
