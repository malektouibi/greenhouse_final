const mongoose = require('mongoose');

const areaSchema = mongoose.Schema({
    greenhouseId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('Area', areaSchema, 'area');