const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const session = require('express-session');
const path = require('path');
const mocha = require('mocha');
const index = require('./api/index');
const admin = require('./api/admin');
require('./db_conn');
const app = express();
// const index = require('./ap')
// tell the server to look for static files in the dist folder
app.use(express.static(path.join(__dirname,'dist')));

// link body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/admin',admin); // redirect any admin request to the admin route file
app.use('/api',index);

// tell server to go to the dist folder index.html for all routes
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/index.html'));
})

const port = process.env.PORT || '3000';
app.set('port',port);

app.listen(port,()=>{
  console.log('server running on port '+port);
})


