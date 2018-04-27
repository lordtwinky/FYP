const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
var Schema = mongoose.Schema;

// User Schema
const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique : true,
        dropDups: true
    },
    username: {
        type: String,
        required: true,
        unique : true,
        dropDups: true
    },
    password: {
        type: String,
        required: true
    },
    groups: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }],
    invites: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }]
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    const query = { username: username }
    User.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}

module.exports.addGroupToUser = function (newGroup, user, callback) {
    user.groups.push(newGroup);
    user.save(callback);
}

module.exports.addGroupInviteToUser = function (newGroup, user, callback) {
    user.invites.push(newGroup);
    user.save(callback);
}

