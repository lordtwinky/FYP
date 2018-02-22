const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//Create
router.post('/create', (req, res, next) => {
    const username = req.body.admin;
    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
         if(!user){
             return res.json({success: false, msg: 'User not found: '})
         }
        let newGroup = new Group({
            name: req.body.name,
            admin: user
        });

        Group.addGroup(newGroup, (err, group) => {
        });
        
        User.addGroupToUser(newGroup, user, (err, group) => {
          if(err){
              res.json({success: false, msg:'Failed to add group'});
          }
          else{
              res.json({success: true, msg:'group added'});
          }
      });
    });
    
    
});

router.get('/groupList', (req, res) => {
    // Search database for all groups
    Group.find({}, (err, groups) => {
      // Check if error was found or not
      if (err) {
        res.json({ success: false, message: err }); // Return error message
      } else {
        // Check if groups were found in database
        if (!groups) {
          res.json({ success: false, message: 'No groups found.' }); // Return error of no groups found
        } else {
          res.json({ success: true, groups: groups }); // Return success and groups array
        }
      }
    })
  });





//export the router
module.exports =  router;