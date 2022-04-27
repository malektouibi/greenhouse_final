const mongoose = require('mongoose');

const measurementSchema = mongoose.Schema({
    areaId: {
        type: Number,
        required: true
    },
    data: {
        light_intensity: Number,
        relative_humidity: Number,
        temperature: Number
    }
}, { versionKey: false });

module.exports = mongoose.model('Measurement', measurementSchema, 'measurement');