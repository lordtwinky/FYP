const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Group = require('../models/group');

//Register
router.post('/register', (req, res, next) => {
    //res.send('REGISTER');
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        }
        else{
            res.json({success: true, msg:'User registered'});
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    
    User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
    return res.json({success: false, msg: 'User not found'});
    }
    
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
    
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
    
    });
    });


//Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    var groups = req.user.groups;
    //getting users' groups names 
    var groupNames = [];

       Group.find({_id: groups}, (err, groupsFound) => {
        // Check if error was found or not
        if (err) {
          res.json({ success: false, message: err }); // Return error message
        } 
          // Check if groups were found in database
        else if (!groups) {
            res.json({ success: false, message: 'No groups found.' }); // Return error of no groups found
        } 
        else if(groupsFound == null){
                res.json({ success: false, message: 'Group not found.' });
        } 
        else {
            for (i = 0; i < groups.length; i++) { 
              if(groupsFound[i] !== null && groupsFound[i] !== undefined)
                 groupNames.push(groupsFound[i].name);
            }
            res.json({ success: true, user: req.user, groups: groupNames }); // Return success and groups array
          }
      })
    
});




//export the router
module.exports =  router;