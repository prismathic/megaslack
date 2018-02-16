const express = require('express');
const router = express.Router();
const User = require('./models/user');
const app = express();
// const posts = require('./posts');
const Post = require('./models/post');

// index api route
router.get('/',(req,res)=>{
  res.send('Welcome to mega flow api');
});

//user login api route
router.post('/login',(req,res)=>{
  // check if login details are complete
  if(req.body.email == undefined || req.body.password == undefined){
    res.json({"status":0,"message":"one or more missing credentials"});
    return false;
  }
  var email = req.body.email;
  var password = req.body.password;
  User.find({email:email,password:password},(err,user)=>{
    //check if if fetching was successful
    if(err){
      res.json({"status":0,"message":"sorry,error logging in"});
    }else{
      if(user.length == 0){
        res.json({"status":0,"message":"invalid email/password"});
      }else{
        res.json({"status":1,"message":user});
      }
    }
  })
});

//user registration api route
router.post('/register',(req,res)=>{
  // check if registration details are complete
  if(req.body.email == undefined || req.body.password == undefined){
    res.json({"status":0,"message":"one or more missing credentials"});
    return false;
  }
  newUser = new User(req.body);
  newUser.save((err,user)=>{
    if(err){
      res.json({"status":0,"message":err});
    }else{
      res.json({"status":1,"message":"User registration successful"});
    }
  });
})



// get all user posts
router.get('/posts/:id',(req,res)=>{
  var user_id = req.params.id;
  Post.find({user_id:user_id},(err,posts)=>{
    if(err){
      res.json({"status":0,"message":"Error fetching user posts"});
      return false;
    }else{
      res.json({"status":1,"message":posts});
    }
  })
})

// create user post
router.post('/post/:id',(req,res)=>{
  var user_id = req.params.id;
  // check if all credentials are present
  // console.log(req.body);
  if(req.body.title == undefined || req.body.body == undefined){
    res.json({"status":0,"message":"one or more missing credentials"});
    return false;
  }
  var title = req.body.title;
  var body = req.body.body;
  var date_added = new Date().getDate();
  newPost = new Post({
    title: title,
    body:body,
    user_id:user_id,
    date_added: date_added
  });
  newPost.save((err,post)=>{
    if(err){
      res.json({"status":0,"message":err});
    }else{
      res.json({"status":1,"message":post});
    }
  })
})

// get post details
router.get('/post/:id',(req,res)=>{
  var id = req.params.id;
  Post.findById(id,(err,post)=>{
    if(err){
      res.json({"status":0,"message":"Unable to fetch post details"});
    }else{
      res.json({"status":1,"message":post});
    }
  })
})


module.exports = router;
