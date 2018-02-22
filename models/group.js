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
    }
});


const Group = module.exports = mongoose.model('Group', GroupSchema);


module.exports.getGroupById = function(id, callback){
    Group.findById(id, callback);
}


module.exports.getGroupByName = function(name, callback){
  const query = {name: name}
  Group.findOne(query, callback);
}


module.exports.addGroup = function(newGroup, callback){
            newGroup.save(callback);
}

