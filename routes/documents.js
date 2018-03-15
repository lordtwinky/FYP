const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Document1 = require('../models/document');
const Document = require('../models/document');
const Topic = require('../models/topic');
//Create
router.post('/createDocument', (req, res, next) => {
  const name = req.body.name;
  const text = req.body.text;
  const whoQAs = req.body.whoQAs;
  const whereQAs = req.body.whereQAs;
  const whenQAs = req.body.whenQAs;
  const answers = req.body.answers;
  const topicID = req.body.topicID;

  Topic.getTopicById(topicID, (err, topic) => {
    if (err) throw err;
    if (!topic) {
      return res.json({ success: false, msg: 'Topic not found: ' + topicID })
    }
    let newDoc = new Document({
      name: name,
      text: text,
      whoQAs: whoQAs,
      whereQAs: whereQAs,
      whenQAs: whenQAs
    });

    Document1.addDocument(newDoc, (err, document) => {
    });

    Topic.addDocumentToTopic(newDoc, topic, (err, document) => {
      if (err) {
        res.json({ success: false, msg: 'Failed to add document' });
      }
      else {
        res.json({ success: true, msg: 'Document added to topic' + topic.name });
      }
    });
  });


});

router.get('/documentList', (req, res) => {
  // Search database for all documents
  Document1.find({}, (err, documents) => {
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

//Modify
router.put('/updateDocument', (req, res, next) => {
  const documentID = req.body.documentID;
  const type = req.body.type;
  const index = req.body.index;
  const editText = req.body.editText;
  const qa = req.body.editText;
  Document1.getDocumentById(documentID, (err, document) => {
      if(err) throw err;
       if(!group){
           return res.json({success: false, msg: 'Group not found: '})
       }
       if(type == "whoQA"){
         if(qa == "q"){
          document.whoQAs[index].question = editText
         }
         else{
          document.whoQAs[index].answer = editText
         }
       }
       else if(type == "whereQA"){
        if(qa == "q"){
          document.whereQAs[index].question = editText
         }
         else{
          document.whereQAs[index].answer = editText
         }
       }
       else if(type == "whenQA"){
        if(qa == "q"){
          document.whenQAs[index].question = editText
         }
         else{
          document.whenQAs[index].answer = editText
         }
       }
      
  });
  
  
});



//export the router
module.exports = router;