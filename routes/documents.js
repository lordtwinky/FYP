const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Document = require('../models/document');

//Create
router.post('/createDoc', (req, res, next) => {
    const name = req.body.name;
    const text = req.body.text;
    const questions = req.body.questions;
    const answers = req.body.answers;
    const topicName = req.body.topic;
    Topic.getTopicByName(topicName, (err, topic) => {
        if(err) throw err;
         if(!topic){
             return res.json({success: false, msg: 'Topic not found: '})
         }
        let newDoc = new Document({
            name: name,
            text: text,
            questions: questions,
            answers: answers
        });

        Document.addDocument(newDoc, (err, document) => {
        });
        
        Topic.addDocumentToTopic(newDoc, topic, (err, document) => {
          if(err){
              res.json({success: false, msg:'Failed to add document'});
          }
          else{
              res.json({success: true, msg:'document added'});
          }
      });
    });
    
    
});

router.get('/documentList', (req, res) => {
    // Search database for all documents
    Document.find({}, (err, documents) => {
      // Check if error was found or not
      if (err) {
        res.json({ success: false, message: err }); // Return error message
      } else {
        // Check if groups were found in database
        if (!documents) {
          res.json({ success: false, message: 'No documents found.' }); // Return error of no documents found
        } else {
          res.json({ success: true, documents: documents }); // Return success and documents array
        }
      }
    })
  });





//export the router
module.exports =  router;