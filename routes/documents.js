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
      // Check if documents were found in database
      if (!documents) {
        res.json({ success: false, message: 'No documents found.' }); // Return error if no documents were found
      } else {
        res.json({ success: true, documents: documents }); // Return success and documents array
      }
    }
  })
});

//Modify document (edit questions/answers)
router.put('/updateDocumentEdit', (req, res, next) => {
  const documentID = req.body.documentID;
  const type = req.body.type;
  const index = req.body.index;
  const editText = req.body.editText;
  Document1.getDocumentById(documentID, (err, document) => {

    if (!document) {
      return res.json({ success: false, msg: 'Document not found with id: ' + documentID })
    }
    if(editText == null){
      if (type == "whoQA") {
        if(document.whoQAs[index].checked == true){
          document.whoQAs[index].checked = false
        }
        else{
          document.whoQAs[index].checked = true
        }
      }
      else if (type == "whereQA") {
        if(document.whereQAs[index].checked == true){
        document.whereQAs[index].checked = false
        }
        else{
          document.whereQAs[index].checked = true
        }
      }
      else if (type == "whenQA") {
        if(document.whenQAs[index].checked == true){
        document.whenQAs[index].checked = false
        }
        else{
          document.whenQAs[index].checked = true
        }
      }
    }
    else{
      if (type == "whoQA") {
        document.whoQAs[index].question = editText[0]
        document.whoQAs[index].answer = editText[1]
        document.whoQAs[index].checked = true
      }
      else if (type == "whereQA") {
        document.whereQAs[index].question = editText[0]
        document.whereQAs[index].answer = editText[1]
        document.whereQAs[index].checked = true
      }
      else if (type == "whenQA") {
        document.whenQAs[index].question = editText[0]
        document.whenQAs[index].answer = editText[1]
        document.whenQAs[index].checked = true
      }
    }

    Document1.findOneAndUpdate({ _id: documentID },
      {
        $set: {
          whoQAs: document.whoQAs,
          whereQAs: document.whereQAs,
          whenQAs: document.whenQAs
        }
      }, (err, newDocument) => {
        if (err)
          res.json({ success: false, err: err, msg: 'Failed to update document' });
        else {
          res.json({ success: true, msg: 'Document Updated'});
        }
      });

  });

});

//Modify document (delete questions/answers)
router.put('/updateDocumentDelete', (req, res, next) => {
  const documentID = req.body.documentID;
  const type = req.body.type;
  const index = req.body.index;
  Document1.getDocumentById(documentID, (err, document) => {

    if (type == "whenQA") {

      var removeitem = document.whenQAs[index].question
      Document1.findOneAndUpdate({ _id: documentID }, { $pull: { whenQAs: { "question": removeitem } } }, function (err, deleteDoc) {
        if (err)
          throw err;
        if (!deleteDoc) {
          return res.json({ success: false, msg: 'Document with id ' + documentID + ' not found' })
        }
        else {
          return res.json({ success: true, msg: 'Document deleted successfully ' })
        }
      });

    }

    if (type == "whereQA") {

      var removeitem = document.whereQAs[index].question
      Document1.findOneAndUpdate({ _id: documentID }, { $pull: { whereQAs: { "question": removeitem } } }, function (err, deleteDoc) {
        if (err)
          throw err;
        if (!deleteDoc) {
          return res.json({ success: false, msg: 'Document with id ' + documentID + ' not found' })
        }
        else {
          return res.json({ success: true, msg: 'Document deleted successfully ' })
        }
      });

    }

    if (type == "whoQA") {

      var removeitem = document.whoQAs[index].question
      Document1.findOneAndUpdate({ _id: documentID }, { $pull: { whoQAs: { "question": removeitem } } }, function (err, deleteDoc) {
        if (err)
          throw err;
        if (!deleteDoc) {
          return res.json({ success: false, msg: 'Document with id ' + documentID + ' not found' })
        }
        else {
          return res.json({ success: true, msg: 'Document deleted successfully ' })
        }
      });

    }

  });

});


//Modify document (add questions/answers)
router.put('/updateDocumentAdd', (req, res, next) => {
  const documentID = req.body.documentID;
  const type = req.body.type;
  const checked = req.body.checked;
  Document1.getDocumentById(documentID, (err, document) => {

    var newQA = {
      question: "",
      answer: "",
      checked: false
    }

    if (type == "whenQA") {

      Document1.findOneAndUpdate({ _id: documentID }, { $push: { whenQAs: newQA } }, function (err, newDoc) {
        if (err)
          throw err;
        if (!newDoc) {
          return res.json({ success: false, msg: 'Document with id ' + documentID + ' not found' })
        }
        else {
          return res.json({ success: true, msg: 'Document added successfully ' })
        }
      });

    }

    else if (type == "whereQA") {

      Document1.findOneAndUpdate({ _id: documentID }, { $push: { whereQAs: newQA } }, function (err, newDoc) {
        if (err)
          throw err;
        if (!newDoc) {
          return res.json({ success: false, msg: 'Document with id ' + documentID + ' not found' })
        }
        else {
          return res.json({ success: true, msg: 'Document added successfully ' })
        }
      });

    }
    else if (type == "whoQA") {

      Document1.findOneAndUpdate({ _id: documentID }, { $push: { whoQAs: newQA } }, function (err, newDoc) {
        if (err)
          throw err;
        if (!newDoc) {
          return res.json({ success: false, msg: 'Document with id ' + documentID + ' not found' })
        }
        else {
          return res.json({ success: true, msg: 'Document added successfully ' })
        }
      });

    }

  });

});

//export the router
module.exports = router;