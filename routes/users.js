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
    if (err) {
      res.json({ success: false, msg: 'Failed to register user' });
    }
    else {
      res.json({ success: true, msg: 'User registered' });
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const rememberme = req.body.rememberme;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        if(rememberme == true){
          const token = jwt.sign({ data: user }, config.secret, {
            expiresIn: 1209600 // 2 week JWT token
          });
          res.json({
            success: true,
            token: 'JWT ' + token,
            user: {
              id: user._id,
              username: user.username,
              email: user.email
            }
          });
        }
        else{
          const token = jwt.sign({ data: user }, config.secret, {
            expiresIn: 86400 // 1 day JWT token
          });
          res.json({
            success: true,
            token: 'JWT ' + token,
            user: {
              id: user._id,
              username: user.username,
              email: user.email
            }
          });
        }
      } else {
        return res.json({ success: false, msg: 'Wrong password' });
      }
    });

  });
});


//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  var groups = req.user.groups;
  var invites = req.user.invites;
  //getting users' groups and invite names 
  var groupNames = [];
  var inviteNames = [];


  Group.find({ _id: groups }, (err, groupsFound) => {
    // Check if error was found or not
    if (err) {
      res.json({ success: false, message: err }); // Return error message
    }
    // Check if groups were found in database
    if (groups.length > 0 && groupsFound != null) {
      for (i = 0; i < groups.length; i++) {
        if (groupsFound[i] !== null && groupsFound[i] !== undefined)
          groupNames.push(groupsFound[i].name);
      }
    }
    Group.find({ _id: invites }, (err, invitesFound) => {
      // Check if error was found or not
      if (err) {
        res.json({ success: false, message: err }); // Return error message
      }
      // Check if invites were found in database
      if (invites && invitesFound != null) {
        for (i = 0; i < invites.length; i++) {
          if (invitesFound[i] !== null && invitesFound[i] !== undefined)
            inviteNames.push(invitesFound[i].name);
        }
      }
      res.json({ success: true, user: req.user, groups: groupNames, invites: inviteNames }); // Return success and groups array
    });
  });
});


//make changes according to whether user accepts or declines an invite
router.post('/inviteacceptdecline', (req, res, next) => {
  const userID = req.body.userID;
  const acceptdecline = req.body.acceptdecline;
  const inviteID = req.body.inviteID;

  User.getUserById(userID, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }
    User.findOneAndUpdate({_id : userID},
      {
        $pull: {
          invites: inviteID
        }
      },
      (err, inviteDeleted) => {
          if (err)
            res.json({ success: false, err: err, msg: 'Failed to update document' });
          else {
            if(acceptdecline == 1){
              Group.getGroupById(inviteID, (err, group) => {
                if (err) throw err;
                if (!group) {
                    return res.json({ success: false, msg: "Group not found" })
                }
                else {
                    User.addGroupToUser(group, user, (err, group) => {
                        if (err) {
                            res.json({ success: false, msg: 'Failed to add group' });
                        }
                        else {
                            res.json({ success: true, msg: 'Group added to user' });
                        }
                    });
                }
            });
            }
          }
        });
      });
});

// user leaves a group
router.post('/leaveGroup', (req, res, next) => {
  const userID = req.body.userID;
  const groupID = req.body.groupID;

  User.getUserById(userID, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }
    User.findOneAndUpdate({_id : userID},
      {
        $pull: {
          groups: groupID
        }
      },
      (err, groupDeleted) => {
          if (err)
            res.json({ success: false, err: err, msg: 'Failed to update user' });
          else {
            res.json({ success: true, msg: 'Group deleted successfully from user' });
          }
        });
      });
});



//export the router
module.exports = router;