var express = require('express');
var ms = require('mysql2');
var app = express();
const routing   = require('./route/routing');
const port = 5000;

app.use(express.json());
app.use('/', routing  );



app.listen(port,()=> console.log("server is running"));


module.exports = (app,ms);

