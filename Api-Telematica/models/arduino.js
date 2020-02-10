const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

// create arduino Schema & model
const ArduinoSchema = new Schema({
    temperatura: {
        type: Number,
        required: [true, 'Temeperatura es un campo requerido']
    },
    humedad: {
        type: Number,
        required: [true, 'Humedad es un campo requerido']
    },
    geometry: GeoSchema
});

const Arduino = mongoose.model('arduino', ArduinoSchema);

module.exports = Arduino;
