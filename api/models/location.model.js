const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema(
    {
        lat: {
            type: String,
            required: true,
        },
        long: {
            type: String,
            required: true,
        },
    },
    { timestamps: true},
)

module.exports = mongoose.model('Location', locationSchema)