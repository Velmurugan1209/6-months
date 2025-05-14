const express = require('express');
const {gettable , postsdata,getrow,putdata,deleterow,sendMail} = require('../controller/code.js');
const app = express();


app.post('/sendmail', sendMail);
app.post('/post', postsdata);
app.get('/', gettable);
app.get('/getrow/:id',getrow);
app.put('/putdata/:id',putdata);
app.delete('/deleterow/:id', deleterow) 






module.exports = app ;