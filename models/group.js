const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
var Schema = mongoose.Schema;

// group Schema
const GroupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    setting: {
        type: Number,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    school: {
        type: String,
        required: false
    },
    organization: {
        type: String,
        required: false
    },
    fields:{
        type:Array,
        required: false
    },
    topics: [{
        type: Schema.Types.ObjectId,
        ref: 'Topic'
    }]
});


const Group = module.exports = mongoose.model('Group', GroupSchema);


module.exports.getGroupById = function (id, callback) {
    Group.findById(id, callback);
}


module.exports.getGroupByName = function (name, callback) {
    const query = { name: name }
    Group.findOne(query, callback);
}


module.exports.addGroup = function (newGroup, callback) {
    newGroup.save(callback);
}

module.exports.addTopicToGroup = function (newTopic, group, callback) {
    group.topics.push(newTopic);
    group.save(callback);
}

