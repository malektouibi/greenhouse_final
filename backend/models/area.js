const mongoose = require('mongoose');

const areaSchema = mongoose.Schema({
    greenhouseId: Number,
    name: String,
    time: Date.now(),
    data: {
        light_intensity: Number,
        relative_humidity: Number,
        temperature: Number
    }
}, { versionKey: false });

module.exports = mongoose.model('Area', areaSchema, 'area');