const express = require('express');
require('express-async-errors');
require('dotenv').config();

// const errorMiddleware = require('./middlewares/error.middleware');
// const routerRegister = require('./router/register.router');
const cors = require('cors')

const app = express();
app.use(cors());

app.use(express.json());

// app.use('/register', routerRegister);


// app.use(errorMiddleware); // tem de ser o último
module.exports = app;