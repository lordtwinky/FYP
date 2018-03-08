const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Topic = require('../models/topic');

//Create
router.post('/createTopic', (req, res, next) => {
    const topicName = req.body.topicName;
    const groupID = req.body.groupID;
    Group.getGroupById(groupID, (err, group) => {
        if(err) throw err;
         if(!group){
             return res.json({success: false, msg: 'Group not found: '})
         }
        let newTopic = new Topic({
            name: topicName
        });

        Topic.addTopic(newTopic, (err, topic) => {
        });
        
        Group.addTopicToGroup(newTopic, group, (err, topic) => {
          if(err){
              res.json({success: false, msg:'Failed to add topic'});
          }
          else{
              res.json({success: true, msg:'topic added'});
          }
      });
    });
    
    
});

router.get('/topicList', (req, res) => {
    // Search database for all topics
    Topic.find({}, (err, topics) => {
      // Check if error was found or not
      if (err) {
        res.json({ success: false, message: err }); // Return error message
      } else {
        // Check if groups were found in database
        if (!topics) {
          res.json({ success: false, message: 'No topics found.' }); // Return error of no topics found
        } else {
          res.json({ success: true, topics: topics }); // Return success and topics array
        }
      }
    })
  });



  router.post('/grabTopic', (req, res, next) => {
    const topicID = req.body.topicID;
    Topic.getTopicById(topicID, (err, topic) => {
      if(err) throw err;
       if(!topic){
           return res.json({success: false, msg: "Topic not found"})
       }
       else{
        res.json({ success: true, topic: topic });
       }
  });
});





//export the router
module.exports =  router;