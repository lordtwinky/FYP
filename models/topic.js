const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
var Schema = mongoose.Schema;

// group Schema
const TopicSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    documents: [{
        type: Schema.Types.ObjectId,
        ref: 'Document'
    }],

});


const Topic = module.exports = mongoose.model('Topic', TopicSchema);


module.exports.getTopicById = function (id, callback) {
    Topic.findById(id, callback);
}


module.exports.getTopicByName = function (name, callback) {
    const query = { name: name }
    Topic.findOne(query, callback);
}


module.exports.addTopic = function (newTopic, callback) {
    newTopic.save(callback);
}

module.exports.addDocumentToTopic = function(newDocument, topic, callback){
    topic.documents.push(newDocument);
    topic.save(callback);
}
