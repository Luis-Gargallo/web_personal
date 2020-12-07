const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require('./config');

//Load routings
const authRoutes = require('./routers/auth');
const userRoutes = require('./routers/user');
const api = require("./routers/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure HEader HTTP
//....


//Router Basic
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);


module.exports = app;