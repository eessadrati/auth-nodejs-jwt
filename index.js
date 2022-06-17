const dotenv = require('dotenv');
const database = require('./config/database');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config();
database.connect();
// Middlewares
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }));
app.use(helmet());
app.use(morgan('common'));

app.use(cookieParser());

// Logic goes here

app.use("/auth", authRoute);
app.use("/users", userRoute);

const port = process.env.PORT || 5010;

// server listening 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});