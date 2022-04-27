const mongoose = require('mongoose');

const greenhouseSchema = mongoose.Schema({
    name: String
}, { versionKey: false });

module.exports = mongoose.model('Greenhouse', greenhouseSchema, 'greenhouse');