const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
var Schema = mongoose.Schema;

const DocumentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    whoQAs: {
        type: Object,
        required: false
    },
    whereQAs: {
        type: Object,
        required: false
    },
    whenQAs: {
        type: Object,
        required: false
    }
});


const Document = module.exports = mongoose.model('Document', DocumentSchema);


module.exports.getDocumentById = function (id, callback) {
    Document.findById(id, callback);
}


module.exports.getDocumentByName = function (name, callback) {
    const query = { name: name }
    Document.findOne(query, callback);
}


module.exports.addDocument = function (newDocument, callback) {
    newDocument.save(callback);
}

module.exports.editDocument = function (newDocument, callback) {
    newDocument.set({name: 'x'});
    newDocument.save(newDocument);
}

