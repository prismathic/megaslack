const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/mega_flow').then(()=>{
  console.log('successfully connected to the database')
}).catch((err)=>{
  console.log('An error occured: '+err);
})
