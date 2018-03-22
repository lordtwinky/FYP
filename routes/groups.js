const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Topic = require('../models/topic');

//Create
router.post('/create', (req, res, next) => {

    const userID = req.body.admin;
    const name = req.body.name;
    const setting = req.body.setting;
    const type = req.body.type;
    const school = req.body.school;
    const organization = req.body.organization;
    const fields = req.body.fields;

    User.getUserById(userID, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found: ' + userID })
        }

            let newGroup = new Group({
                name: name,
                admin: user,
                setting: setting,
                type: type,
                school: school,
                organization: organization,
                fields: fields
            });
        

        Group.addGroup(newGroup, (err, group) => {
        });

        User.addGroupToUser(newGroup, user, (err, group) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to add group' });
            }
            else {
                res.json({ success: true, groupID: newGroup._id, msg: 'group added' });
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

router.post('/grabGroup', (req, res, next) => {
    const groupID = req.body.groupID;

    var topicNames = [];

    Group.getGroupById(groupID, (err, group) => {
        if (err) throw err;
        if (!group) {
            return res.json({ success: false, msg: "Group not found" })
        }
        else {
            Topic.find({_id: group.topics}, (err, topicsFound) => {
                // Check if error was found or not
                if (err) {
                  res.json({ success: false, message: err }); // Return error message
                } 
                  // Check if groups were found in database
                else if (!group.topics) {
                    res.json({ success: false, message: 'No Topics found.' }); // Return error of no groups found
                } 
                else if(topicsFound == null){
                        res.json({ success: false, message: 'Topic not found.' });
                } 
                else {
                    for (i = 0; i < group.topics.length; i++) { 
                      if(topicsFound[i] !== null && topicsFound[i] !== undefined)
                      topicNames.push(topicsFound[i].name);
                    }
                    res.json({ success: true, group: group, topicNames: topicNames }); // Return success and groups array
                  }
              })
        }
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

router.post('/joinGroup', (req, res, next) => {
    const groupID = req.body.groupID;
    const userID = req.body.userID;
    User.getUserById(userID, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found: ' })
        }
        else {
            Group.getGroupById(groupID, (err, group) => {
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
                            res.json({ success: true, msg: 'group added' });
                        }
                    });
                }
            });
        }
    });

});

router.get('/myGroupList', (req, res) => {
    // Search database for all groups
    const userID = req.body.userID;
    User.getUserById(userID, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found: ' + userID })
        }
        const groups = user.groups
        res.json({ success: true, groups:groups });
        
    });
});



//export the router
module.exports = router;