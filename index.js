const dotenv = require('dotenv');
const database = require('./config/database');
const express = require("express");

const app = express();

dotenv.config();
database.connect();
app.use(express.json());

// Logic goes here

const port = process.env.PORT || 5010;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});