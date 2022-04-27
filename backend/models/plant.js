const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    areaId: Number,
    name: String,
    quantity: Number
}, { versionKey: false });

module.exports = mongoose.model('Plant', plantSchema, 'plant');